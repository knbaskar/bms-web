import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import makeStyles from "@mui/styles/makeStyles";

import cardsStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/cardsStyle.js";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridContainer justifyContent="center">
          <GridItem md={7} sm={7}>
            <div className={classes.imageContainer}>
              <img src="/img/assets-for-demo/cards-test.png" alt="views" />
            </div>
          </GridItem>
          <GridItem md={4} sm={5} className={classes.mlAuto}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Why Choose Us</h3>
              <h6 className={classes.description}>
                Experience the Difference
              </h6>
              <h5 className={classes.description}>
                Discover unbeatable benefits tailored for your convenience and peace of mind.
                <ul>
                  <li>Wide range of services</li>
                  <li>Easy booking process</li>
                  <li>Verified service providers</li>
                  <li>Secure payment options</li>
                </ul>
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
