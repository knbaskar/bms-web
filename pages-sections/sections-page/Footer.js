import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.column}>
          <h4 style={styles.heading}>About Us</h4>
          <ul style={styles.list}>
            <li><Link href="/faq" style={{ ...styles.link, color: 'white' }} >FAQ</Link></li>
            <li><Link href="/contact-us" style={styles.link}>Contact Us</Link></li>
            <li><Link href="/careers" style={styles.link}>Careers</Link></li>
            <li style={styles.solutionLink}>
              <Link href="/solutions" style={styles.link}>Solutions</Link>
              <span style={styles.betaTag}>BETA</span>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Terms and Conditions</h4>
          <ul style={styles.list}>
          <li><Link href="/terms" style={styles.link}>Terms of Use</Link></li>
            <li><Link href="/privacy-policy" style={styles.link}>Privacy Policy</Link></li>
            <li><Link href="/refunds" style={styles.link}>Refunds</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div style={styles.column}>
          <div style={styles.downloadSection}>
            <Link href="https://apps.apple.com" target="_blank">
              <Image
                src="/img/web/app-store-badge.svg"
                alt="Download on the App Store"
                width={140}
                height={40}
                style={styles.storeImage}
              />
            </Link>
            <Link href="https://play.google.com" target="_blank">
              <Image
                src="/img/web/play-goole-badge.svg"
                alt="Get it on Google Play"
                width={140}
                height={40}
                style={styles.storeImage}
              />
            </Link>
          </div>
          <Image
            src="/img/web/qr-code.svg"
            alt="QR Code"
            width={80}
            height={80}
            style={styles.qrCode}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div style={styles.bottom}>
        <div>© 2024. All rights reserved.</div>
        <div style={styles.socialIcons}>
          <Link href="https://twitter.com" target="_blank" style={styles.icon}>
            <FaTwitter size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" style={styles.icon}>
            <FaInstagram size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" style={styles.icon}>
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 20px",
    fontSize: "14px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  column: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff", // Corrected color code for white
    marginBottom: "8px",
    display: "block",
  },
  solutionLink: {
    display: "flex",
    alignItems: "center",
  },
  betaTag: {
    backgroundColor: "#4caf50",
    color: "#fff",
    fontSize: "10px",
    marginLeft: "6px",
    padding: "2px 6px",
    borderRadius: "4px",
  },
  downloadSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "10px",
  },
  storeImage: {
    cursor: "pointer",
  },
  qrCode: {
    color: "#fff",
    marginTop: "10px",
  },
  bottom: {
    borderTop: "1px solid #333",
    marginTop: "20px",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
  },
};


export default Footer;
