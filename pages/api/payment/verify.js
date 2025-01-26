import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

      if (razorpay_signature === expectedSign) {
        res.status(200).json({ message: "Payment verified successfully" });
      } else {
        res.status(400).json({ message: "Invalid signature sent!" });
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ message: "Internal Server Error!" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
