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

import aboutUsStyle from "/styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function RefundsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Book My Service"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax image="/img/bg9.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Refunds & Cancellation Policy</h1>
              <h4>
                Pleae read carefully
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <p class="text-[#CCCCCC]"> <br/></p><p class="text-[#CCCCCC]">We at Book My Service want you to be completely satisfied with our services. Our online payment platform provides the convenience of automatic subscription billing for your Kid&#x27;s sports training. If for any reason you wish to cancel your subscription or request a refund, please read the following information to understand our refund and cancellation policy.</p><p class="text-[#CCCCCC]"> <br/></p><p class="text-[#CCCCCC]"> <br/></p><p class="text-xl mb-2 font-[400]">Cancellation</p><p class="text-[#CCCCCC]">Parents can cancel their subscription before the start of a new billing cycle. To cancel, please log in to your account at payments.Book My Service and click on the &quot;Cancel Subscription&quot; button. You can also email us at <font color="black">support@bookmyservice.com</font> with your cancellation request. If you cancel before the deduction of charges for the upcoming billing cycle, no amount will be deducted thereon and, if any amount is deducted, it&#x27;ll be refunded within 24 hours of said deduction.</p><p class="text-[#CCCCCC]"> <br/></p><p class="text-xl mb-2 font-[400]">Refund</p><p class="text-[#CCCCCC]">If you forget to cancel before the start of a new billing cycle and the amount has been charged to your account, we will provide a refund upon request provided that no training session has been attended in the new billing cycle. To request a refund, please email us at support@bookmyservice.com with your refund request. Once your refund request has been reviewed, we will issue a refund to your original payment method within 24 hours.</p>
        </div>
      </div>
      <br></br>
      <Footer />
      </div>
  );
}
