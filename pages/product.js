/*eslint-disable*/
import React, { useState } from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
import makeStyles from '@mui/styles/makeStyles';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LocalShipping from "@mui/icons-material/LocalShipping";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
//import Footer from "/components/Footer/Footer.js";
import Button from "/components/CustomButtons/Button.js";
import Accordion from "/components/Accordion/Accordion.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Tooltip from "@mui/material/Tooltip";
// sections for this page
import Footer from "/pages-sections/sections-page/Footer.js";

import productStyle from "/styles/jss/nextjs-material-kit-pro/pages/productStyle.js";
import { BOOK_MY_SERVICE } from "../utils/constant";

import headersStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";

const useStyles = makeStyles(headersStyle);

export default function ProductPage() {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();
  const images = [
    {
      original: "/img/examples/product3.jpg",
      thumbnail: "/img/examples/product3.jpg"
    },
    {
      original: "/img/examples/product4.jpg",
      thumbnail: "/img/examples/product4.jpg"
    },
    {
      original: "/img/examples/product1.jpg",
      thumbnail: "/img/examples/product1.jpg"
    },
    {
      original: "/img/examples/product2.jpg",
      thumbnail: "/img/examples/product2.jpg"
    }
  ];
  const [book, setBook] = useState({
		name: "Jones-Parsons",
		time: "Mon 10:00 am - 7.30pm",
		img: "https://dpi-interactive.com/europeanskincare/wp-content/uploads/2021/03/Services_Spa_Package-copy.jpg",
		price: 250,
	});

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_2UTAol2AFSV5VN",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "/api/payment/verify.";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

  const handlePayment = async (price) => {
		try {
			const orderUrl = "/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className={classes.productPage}>
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
        <div className={classes.container}>
          <GridContainer className={classes.titleRow}>
            <GridItem md={4} className={classes.mlAuto}>
              <Button color="white" className={classes.floatRight}>
                <ShoppingCart /> 0 items
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  startIndex={3}
                  items={images}
                  showThumbnails={true}
                  renderLeftNav={(onClick, disabled) => {
                    return (
                      <button
                        className="image-gallery-left-nav"
                        disabled={disabled}
                        onClick={onClick}
                      />
                    );
                  }}
                  renderRightNav={(onClick, disabled) => {
                    return (
                      <button
                        className="image-gallery-right-nav"
                        disabled={disabled}
                        onClick={onClick}
                      />
                    );
                  }}
                />
              </GridItem>
              <GridItem md={6} sm={6}>
                <h2 className={classes.title}>Becky Silk Blazer</h2>
                <h3 className={classes.mainPrice}>Rs.335</h3>
                <Accordion
                  active={0}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Description",
                      content: (
                        <p>
                          Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit has
                          the fit and coverage of a bikini in a one-piece
                          silhouette. This fuchsia style is crafted from the
                          label{"'"}s sculpting peau douce fabric and has
                          flattering cutouts through the torso and back. Wear
                          yours with mirrored sunglasses on vacation.
                        </p>
                      )
                    },
                    {
                      title: "Designer Information",
                      content: (
                        <p>
                          An infusion of West Coast cool and New York attitude,
                          Rebecca Minkoff is synonymous with It girl style.
                          Minkoff burst on the fashion scene with her
                          best-selling {"'"}Morning After Bag{"'"} and later
                          expanded her offering with the Rebecca Minkoff
                          Collection - a range of luxe city staples with a {'"'}
                          downtown romantic{'"'} theme.
                        </p>
                      )
                    },
                    {
                      title: "Details and Care",
                      content: (
                        <ul>
                          <li>Storm and midnight-blue stretch cotton-blend</li>
                          <li>
                            Notch lapels, functioning buttoned cuffs, two front
                            flap pockets, single vent, internal pocket
                          </li>
                          <li>Two button fastening</li>
                          <li>84% cotton, 14% nylon, 2% elastane</li>
                          <li>Dry clean</li>
                        </ul>
                      )
                    }
                  ]}
                />
                <GridContainer className={classes.pickSize}>
                  <GridItem md={6} sm={6}>
                    <label>Select color</label>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={colorSelect}
                        onChange={(event) => setColorSelect(event.target.value)}
                        inputProps={{
                          name: "colorSelect",
                          id: "color-select"
                        }}
                      >
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="0"
                        >
                          Rose
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          Gray
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          White
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem md={6} sm={6}>
                    <label>Select size</label>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={sizeSelect}
                        onChange={(event) => setSizeSelect(event.target.value)}
                        inputProps={{
                          name: "sizeSelect",
                          id: "size-select"
                        }}
                      >
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="0"
                        >
                          Small
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          Medium
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Large
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.pullRight}>
                  <Button onClick={() => handlePayment(335)} round color="rose">
                   Place order
                  </Button>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classNames(classes.features, classes.textCenter)}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="2 Days Delivery"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={LocalShipping}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Refundable Policy"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={VerifiedUser}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Popular Item"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={Favorite}
                  iconColor="rose"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.relatedProducts}>
            <h3 className={classNames(classes.title, classes.textCenter)}>
              You may also be interested in:
            </h3>
            <GridContainer>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img
                        src="/img/examples/card-product1.jpg"
                        alt="cardProduct"
                      />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}
                    >
                      Trending
                    </h6>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <div className={classes.cardDescription}>
                      Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                      crafted in Italy from hard-wearing red textured-leather.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$1,459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon color="rose" simple>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img
                        src="/img/examples/card-product3.jpg"
                        alt="cardProduct3"
                      />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6 className={classes.cardCategory}>Popular</h6>
                    <h4 className={classes.cardTitle}>Balmain</h4>
                    <div className={classes.cardDescription}>
                      Balmain{"'"}s mid-rise skinny jeans are cut with stretch
                      to ensure they retain their second-skin fit but move
                      comfortably.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon link>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img
                        src="/img/examples/card-product4.jpg"
                        alt="cardProduct4"
                      />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6 className={classes.cardCategory}>Popular</h6>
                    <h4 className={classes.cardTitle}>Balenciaga</h4>
                    <div className={classes.cardDescription}>
                      Balenciaga{"'"}s black textured-leather wallet is finished
                      with the label{"'"}s iconic {"'"}Giant{"'"} studs. This is
                      where you can...
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$590</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon color="rose" simple>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img
                        src="/img/examples/card-product2.jpg"
                        alt="cardProduct2"
                      />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}
                    >
                      Trending
                    </h6>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <div className={classes.cardDescription}>
                      Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                      crafted in Italy from hard-wearing red textured-leather.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$1,459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon link>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
