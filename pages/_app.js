/*!

=========================================================
* Book My Service v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ct-nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import App from "next/app";
import Head from "next/head";
import { SessionProvider } from 'next-auth/react';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import "/styles/scss/nextjs-material-kit-pro.scss";
import "/styles/css/react-demo.css";
import "animate.css/animate.min.css";
import { BOOK_MY_SERVICE } from "../utils/constant";

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

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* Book My Service v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    const metadata = {
      title: {
        template: '%s | Dave Gray',
        default: 'Dave Gray Teaches Code',
      },
      description: "Hello, I'm Dave. 👋 I teach coding and web development skills.",
      applicationName: 'Book My Service',
      authors: [{ name: 'BMS' }],
      generator: 'Next.js',
      keywords: ['bookmyservice', 'bms', 'code', 'web development', 'javascript', 'react', 'node.js', 'next.js', 'web dev', 'html', 'css', 'python'],
      referrer: 'origin-when-cross-origin',
      creator: 'BMS Team',
      publisher: 'BMS Team',
      verification: {
        google: 'A3y6FQxQnzZJy3m7zE8EHOiX9Fy34uQzSDHG_0muZhw',
      },
    };
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, i
            nitial-scale=1, shrink-to-fit=no hjhjhjhj"
          />
          <title>{metadata.title.default}</title>

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
          <meta name="keywords" content={metadata.keywords.join(', ')} />

          {/* Referrer Policy */}
          <meta name="referrer" content={metadata.referrer} />

          {/* Creator */}
          <meta name="creator" content={metadata.creator} />

          {/* Publisher */}
          <meta name="publisher" content={metadata.publisher} />

          {/* Google Site Verification */}
          <meta name="google-site-verification" content={metadata.verification.google} />

          {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" /> */}
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
          <title>{BOOK_MY_SERVICE}</title>
        </Head>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
            </SessionProvider>
          </StyledEngineProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
