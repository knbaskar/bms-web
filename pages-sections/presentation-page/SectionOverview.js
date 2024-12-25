import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
// @material-ui icons
import Grid from "@mui/icons-material/GridOn";
import PhoneLink from "@mui/icons-material/Phonelink";
import AccessTime from "@mui/icons-material/AccessTime";
import AttachMoney from "@mui/icons-material/AttachMoney";
import makeStyles from "@mui/styles/makeStyles";

import overviewStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/overviewStyle.js";

const useStyles = makeStyles(overviewStyle);

export default function SectionOverview() {
  const classes = useStyles();
  return (
    <div style={{marginBottom: '1em'}}>
    <div className={classes.section}>
      <div
        className={classes.features5}
        style={{
          // backgroundImage: "url('/img/assets-for-demo/features-5.jpg')",
          backgroundImage: "url('/img/web/shadow.svg')",
        }}
      >
        <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <h2 className={classes.title}>Benefits</h2>
        </GridItem>
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Expert Stylists & Therapists"
                description={
                  <p>
                    Our highly trained and experienced team ensures you receive the best in beauty care, 
                    from haircuts to facials, tailored to your needs.
                  </p>
                }
                icon={Grid}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Personalized Services"
                description={
                  <p>
                    Every client is unique. We customize our treatments to fit your individual style, 
                    skin type, and beauty goals, making sure you leave feeling your best.
                  </p>
                }
                icon={PhoneLink}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Luxurious Experience"
                description={
                  <p>
                    Enjoy a relaxing, tranquil environment designed to rejuvenate your mind and body. 
                    From soothing music to comfortable seating, your comfort is our priority.
                  </p>
                }
                icon={AccessTime}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            
          </GridContainer>
        </div>
      </div>
      <div className={classes.sectionTestimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <h2 className={classes.title}>Trusted by 879.000+ People</h2>
              <h5 className={classes.description}>
              Our happy clients say about us
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src="/img/assets-for-demo/test1.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/assets-for-demo/test1.jpg')",
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/assets-for-demo/test1.jpg')",
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Kesavan Mohan</h4>
                      <p className={classes.cardDescription}>
                        {'"'}I absolutely love this salon! The staff is friendly, and my stylist always knows exactly what I want. I leave feeling relaxed and looking amazing every time!{'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src="/img/assets-for-demo/test2.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/assets-for-demo/test2.jpg')",
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/assets-for-demo/test2.jpg')",
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Michael</h4>
                      <p className={classes.cardDescription}>
                        {'"'}I’ve been coming here for months, and the service is always amazing. The staff is friendly, and my stylist always nails the perfect cut. I leave feeling refreshed every time!
                        {'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src="/img/assets-for-demo/test3.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/assets-for-demo/test3.jpg')",
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/assets-for-demo/test3.jpg')",
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Shruti</h4>
                      <p className={classes.cardDescription}>
                        {'"'}
                        The facial I had was fantastic! My skin felt so rejuvenated and smooth afterward. I love the calming atmosphere and the personalized care.{'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <div className={classes.ourClients}>
            <GridContainer justifyContent="center">
              <GridItem md={3} sm={3}>
                <img
                  src="/img/assets-for-demo/ourClients/naturals-seeklogo.png"
                  alt="vodafone"
                />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img
                  src="/img/assets-for-demo/ourClients/greentrends-logo.png"
                  alt="microsoft"
                />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img
                  src="/img/assets-for-demo/ourClients/Beauty-Salon-Logo-Idea.jpg"
                  alt="harvard"
                />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img
                  src="/img/assets-for-demo/ourClients/hairmac.jpg"
                  alt="stanford"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
