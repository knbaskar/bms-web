import Razorpay from "razorpay";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
		const instance = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID, // 'rzp_test_2UTAol2AFSV5VN',
			key_secret: process.env.RAZORPAY_KEY_SECRET // 'elb4JNjUw3eLqhVMiLFiRgki',
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
