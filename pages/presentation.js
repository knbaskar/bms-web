/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import { signIn, useSession } from 'next-auth/react';
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from 'next/router';
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
// import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import headersStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";

// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// sections for this page
import SectionDescription from "/pages-sections/presentation-page/SectionDescription.js";
import SectionComponents from "/pages-sections/presentation-page/SectionComponents.js";
import SectionCards from "/pages-sections/presentation-page/SectionCards.js";
import SectionContent from "/pages-sections/presentation-page/SectionContent.js";
import SectionSections from "/pages-sections/presentation-page/SectionSections.js";//removed
import SectionExamples from "/pages-sections/presentation-page/SectionExamples.js";//removed
import SectionFreeDemo from "/pages-sections/presentation-page/SectionFreeDemo.js";//to rework
import SectionOverview from "/pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "/pages-sections/presentation-page/SectionPricing.js";
import SectionContacts from "/pages-sections/sections-page/SectionContacts.js";
import Footer from "/pages-sections/sections-page/Footer.js";

const useStyles = makeStyles(headersStyle);

export default function PresentationPage({ ...rest }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

const signInGoogleHandler = (e) => {
  e.preventDefault();
  signIn('google')
};

if (status === "loading") {
  return <div>Loading...</div>; // Show a loading message while the session is being fetched
}

/*if (session) {
  router.push('/about-us');
  return;
}*/
  return (
    <div>
      {/* HEADER 2 START */}
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
                    href="#pablo"
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
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
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
                <Button
                  href="#google"
                  className={classes.navLink}
                  onClick={signInGoogleHandler}
                  color="transparent"
                >
                  Google
                </Button>
                <Button
                  href="#facebook"
                  className={classes.navLink}
                  onClick={signInGoogleHandler}
                  color="transparent"
                >
                  facebook
                </Button>
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
          style={{ backgroundImage: "url('/img/web/hero-image.svg')" }}
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
                <h1 className={classes.title}>Your One-Stop Shop for Beauty and Wellness Services</h1>
                <h4>
                  Find the perfect salon, spa, or pet care provider near you.
                </h4>
              </GridItem>
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Card raised className={classes.card}>
                  <CardBody formHorizontal>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="name"
                            inputProps={{
                              placeholder: "Company name"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="email"
                            inputProps={{
                              placeholder: "Company email"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="password"
                            inputProps={{
                              placeholder: "Company password",
                              type: "password",
                              autoComplete: "off"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <Button
                            block
                            color="primary"
                            className={classes.button}
                          >
                            Sign up
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </form>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* HEADER 2 END */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionFreeDemo />
        <SectionOverview /> 
      </div>
      <SectionPricing />
      <br />
      <SectionContacts />
      <Footer />

    </div>
  );
}