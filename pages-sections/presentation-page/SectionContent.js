import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import makeStyles from "@mui/styles/makeStyles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

import contentStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/contentStyle.js";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justifyContent="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>App Areas</h3>
              <h6 className={classes.description}>
              We Made Finding Salon’s Very Easy!
              </h6>
              <h5 className={classes.description}>
                Download our mobile app and find your nearest spa & salon.
              </h5>
              <ShoppingCart className={classes.icons} /> Android &nbsp;
              <ShoppingCart className={classes.icons} /> iOS
            </div>
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src="/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg"
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src="/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg"
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
              <img
                className={classes.ipadImg}
                src="/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg"
                alt="iPad"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
