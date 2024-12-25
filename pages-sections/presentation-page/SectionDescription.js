import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@mui/icons-material/Apps";
import ViewDay from "@mui/icons-material/ViewDay";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import makeStyles from "@mui/styles/makeStyles";

import descriptionStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justifyContent="center">
          <GridItem md={8} sm={8}>         
          
            <h4 className={classes.description}>
            
            <h3 className={classes.title}><b>How it Works!</b></h3>
              We offer a variety of beauty and salon services tailored to your needs. 
              Whether you're looking for a fresh haircut, a relaxing facial, a rejuvenating massage, 
              or a luxurious manicure, we’ve got you covered.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Step 1"
                description="Choose your location and service type (like salon, spa, or clinic). Turn on location services for faster nearby options."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Step 2"
                description="Select your provider, pick a date and time, and customize your appointment by choosing services like haircuts, massages, or consultations."
                icon={ViewDay}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Step 3"
                description="Confirm your booking and relax! Your appointment is all set."
                icon={ViewCarousel}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
