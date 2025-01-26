/*! Book My Service v1.3.1 */

import React, { useEffect } from "react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import "/styles/scss/nextjs-material-kit-pro.scss";
import "/styles/css/react-demo.css";
import "animate.css/animate.min.css";
import '../styles/globals.css';
import { BOOK_MY_SERVICE } from "../utils/constant";

// Create MUI Theme
const theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#fff !important",
          },
        },
      },
    },
  },
});

const metadata = {
  title: {
    template: "%s | Dave Gray",
    default: "Dave Gray Teaches Code",
  },
  description: "Hello, I'm Dave. 👋 I teach coding and web development skills.",
  applicationName: "Book My Service",
  authors: [{ name: "BMS" }],
  generator: "Next.js",
  keywords: [
    "bookmyservice",
    "bms",
    "code",
    "web development",
    "javascript",
    "react",
    "node.js",
    "next.js",
    "web dev",
    "html",
    "css",
    "python",
  ],
  referrer: "origin-when-cross-origin",
  creator: "BMS Team",
  publisher: "BMS Team",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
};

const MyApp = ({ Component, pageProps }) => {
  // Add comment to DOM after mount
  useEffect(() => {
    const comment = document.createComment(`

=========================================================
* Book My Service v1.3.1 based on Material Kit PRO - v2.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2022 Creative Tim

=========================================================

    `);
    document.insertBefore(comment, document.documentElement);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{metadata.title.default}</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        {/* Description */}
        <meta name="description" content={metadata.description} />

        {/* Application Name */}
        <meta name="application-name" content={metadata.applicationName} />

        {/* Authors */}
        {metadata.authors.map((author, index) => (
          <meta key={index} name="author" content={author.name} />
        ))}

        {/* Generator */}
        <meta name="generator" content={metadata.generator} />

        {/* Keywords */}
        <meta name="keywords" content={metadata.keywords.join(", ")} />

        {/* Referrer Policy */}
        <meta name="referrer" content={metadata.referrer} />

        {/* Creator */}
        <meta name="creator" content={metadata.creator} />

        {/* Publisher */}
        <meta name="publisher" content={metadata.publisher} />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content={metadata.verification.google}
        />
        <title>{BOOK_MY_SERVICE}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
