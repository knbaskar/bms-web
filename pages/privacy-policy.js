/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
//import Footer from "/components/Footer/Footer.js";
// sections for this page
import SectionDescription from "/pages-sections/about-us/SectionDescription.js";
import SectionTeam from "/pages-sections/about-us/SectionTeam.js";
import SectionServices from "/pages-sections/about-us/SectionServices.js";
import SectionOffice from "/pages-sections/about-us/SectionOffice.js";
import SectionContact from "/pages-sections/about-us/SectionContact.js";
import Footer from "/pages-sections/sections-page/Footer.js";

import headersStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";

const useStyles = makeStyles(headersStyle);

export default function PrivacyPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
          absolute
          brand="Book My Service"
          color="transparent"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
          links={
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/presentation"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Home
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/about-us"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    About us
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/product"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Products
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/contact-us"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Contact us
                  </Button>
                </ListItem>
                
              </List>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-twitter"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-facebook"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-instagram"} />
                  </Button>
                </ListItem>
              </List>
            </div>
          }
        />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: "url('/img/bg9.jpg')" }}
        >

          <div className={classes.conatinerHeader2}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>Privacy Policy</h1>
                
              </GridItem>
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                
              </GridItem>
            </GridContainer>
          </div>
        </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div class="text-[#CCCCCC]">This Privacy Policy sets forth the reasonable security practices and procedures adopted by GMI TECHNOLOGIES PRIVATE LIMITED (“FC.one”) and shall apply to the use and disclosure and sharing of sensitive personal data or information (“Personal Information”) provided by the registered users/ of the Website/Web Application www.theFC.one.app (“Website/Web Application”), which is owned, maintained and operated by FC.ONE. This policy is equally applicable to the visitors/users/ on the Website/Web Application. We value the trust you have placed with us. To provide you with a convenient and safe online experience, we have implemented measures to protect the confidentiality, integrity, and security of your Personal Information, during storage and transmission through the World Wide Web. This Privacy Policy explains how we protect personal Information provided by you through the Website/Web Application and how we store and use that information, to deliver the services on the Website/Web Application. By entering this Website/Web Application and providing personal information when subscribing and sending enquiries to us, you expressly agree to this privacy policy. By entering this Website/Web Application, you shall be treated as having given your consent to process your personal information as set out in the Privacy Policy. This Privacy Policy is in conformity with the Industry Standards and Practice, however is subject to change at any time. It is advised that you review this Privacy Policy periodically. This Privacy Policy is also incorporated into and subject to the Terms of Use of the Website/Web Application.</div>
        <div class="text-xl mt-5 mb-2 font-[400]">Personal Information</div><div class="text-[#CCCCCC]">Personal information means any information that relates to a natural person, which directly or indirectly is capable of identifying that person. The personal information collected from you and covered within this Private Policy may include your full name, address, telephone/mobile number, email address, mobile number, Bank account number and other information as defined in Rule 3 of the Information Technology (Reasonable security practices and procedures and sensitive data or information) Rules, 2011, as may be required by us from time to time in order to provide services to you. However, you have the right to modify or update your personal Information/details with us.</div>
        <div class="text-xl mt-5 mb-2 font-[400]">Collection of Personal Information</div><div class="text-[#CCCCCC]">Most features of the Website/Web Application would require registration, which may require you to provide your details such as an email address, a password, mobile number and other information.In case, you avail the online services through FC.one.app, you will be required to provide Personal Information like your Name, Address, mobile, Bank Account Number and other information required as per applicable regulations [“user information”] at the time of registration/activation of such facility. The collection of these information is obligatory pursuant to regulatory requirements in order to activate and enable the online services. Such information shall be used/shared/maintained/ accessed/stored with/by third party technology provider/authorised service providers in order to enable/facilitate/complete/process of online services. Any personal information collected from the user shall be encrypted for data security. The encryption protection is verified by SSL. From time to time, the Website/Web Application may also request other personal information to provide you with additional benefits of the services as selected by you. On all such occasions, you will have the option to provide or decline to provide that personal information. In order to benefit from the full functionality of the services, you would need to provide your Account Credentials/Information to allow the Website/Web Application, to provide an account aggregator services to access your account data from the financial institutions/banks where your accounts are maintained, to enable you to use/see consolidated view of various accounts. All such Account Credentials/Information and data collected from such accounts are stored by us on highly secured servers. The section “Your data is secure” shall describe the various security mechanism followed for securing your data. You agree and understand that your personal information shall be collected, processed, stored and used by us, and passed to other data processors for the services identified under this Privacy Policy.</div><div class="text-xl mt-5 mb-2 font-[400]">Use of Personal Information</div><div class="text-[#CCCCCC]">The Website/Web Application uses and discloses your Personal Information only as follows: To fulfil / complete your requests for products and services offered, or subscribed or availed by you on the Website/Web Application To deliver to you any administrative notices, alerts and communications relevant to your use of the services To any Governmental Authority including but not limited to the Reserve Bank of India To Third Party Service Providers (including payment gateways) that provide services to Users To any regulator for identifying the registered user for complying with regulatory Act To comply with orders of the Court, any applicable law or any statutory or legal requirements or process To analyze Website/Web Application usage improve features, tailor the Website/Web Application to cater to your interest’s and improve the services offered For market research, troubleshooting problems, detecting and protecting against error, fraud, hacking or cyber-crimes.For any of these purposes, we may use group companies / affiliates, third party vendors, agents, contractors, consultants or service providers (individually a ‘Third Party Service Provider’ and collectively, the “Third Party Service Providers”). Such Third-Party Service Providers are bound by privacy restrictions which are similar to the restrictions mentioned in this Privacy Policy</div>

      </div>
      <br></br>
      <Footer />
      </div>
  );
}
