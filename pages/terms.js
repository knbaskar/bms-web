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

export default function TermsPage() {
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
                <h1 className={classes.title}>Terms</h1>
                
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
        <div className={classes.container}>
          <p class="#CCCCCC">These terms and conditions outline the rules and regulations for the use of Book My Service&#x27;s Website, located at Book My Service. By accessing this website we assume you accept these terms and conditions. Do not continue to use Book My Service if you do not agree to take all of the terms and conditions stated on this page.</p>
          <p class="#CCCCCC">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company’s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
          <div class="flex flex-col gap-3 mt-5"><div><p class="text-xl mb-2 font-[400">Cookies</p></div>
          <div><p class="#CCCCCC">We employ the use of cookies. By accessing Book My Service, you agreed to use cookies in agreement with the Book My Service&#x27;s Privacy Policy.</p><p class="#CCCCCC">Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p></div></div>
          <div class="flex flex-col gap-3 mt-5"><div><p class="text-xl mb-2 font-[400">License</p></div><div class="flex flex-col gap-2"><p class="#CCCCCC">Unless otherwise stated, Book My Service and/or its licensors own the intellectual property rights for all material on Book My Service. All intellectual property rights are reserved. You may access this from Book My Service for your own personal use subjected to restrictions set in these terms and conditions.</p><p class="#CCCCCC">You must not:</p><ul class="list-disc ml-10"><li><p class="#CCCCCC">Republish material from Book My Service</p></li><li><p class="#CCCCCC">Sell, rent or sub-license material from Book My Service</p></li><li><p class="#CCCCCC">Reproduce, duplicate or copy material from Book My Service</p></li><li><p class="#CCCCCC">Redistribute content from Book My Service</p></li></ul><p class="#CCCCCC">This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the <a href="https://www.termsandconditionsgenerator.com/" rel="noopener">Free Terms and Conditions Generator</a>.</p><p class="#CCCCCC">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Book My Service does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Book My Service, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Book My Service shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p><p class="#CCCCCC">Book My Service reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p><p class="#CCCCCC">You warrant and represent that:</p><ul class="list-disc ml-10"><li><p class="#CCCCCC">You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.</p></li><li><p class="#CCCCCC">The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party.</p></li><li><p class="#CCCCCC">The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</p></li><li><p class="#CCCCCC">The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</p></li></ul><p class="#CCCCCC">You hereby grant Book My Service a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p></div></div><div class="flex-col gap-3 mt-5 flex"><div><p class="text-xl mb-2 font-[400">Hyperlinking to our Content</p></div><div class="flex flex-col gap-2"><p class="#CCCCCC">The following organizations may link to our Website without prior written approval:</p><ul class="list-disc ml-10"><li><p class="#CCCCCC">Government agencies </p></li><li><p class="#CCCCCC">Search engines </p></li><li><p class="#CCCCCC">News organizations </p></li><li><p class="#CCCCCC">Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses  and</p></li><li><p class="#CCCCCC">System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</p></li></ul><p class="#CCCCCC">These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive  (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services  and (c) fits within the context of the linking party’s site.</p><p class="#CCCCCC">We may consider and approve other link requests from the following types of organizations:</p><ul class="list-disc ml-10"><li><p class="#CCCCCC">commonly-known consumer and/or business information sources </p></li><li><p class="#CCCCCC">dot.com community sites </p></li><li><p class="#CCCCCC">associations or other groups representing charities </p></li><li><p class="#CCCCCC">online directory distributors </p></li><li><p class="#CCCCCC">internet portals </p></li><li><p class="#CCCCCC">accounting, law and consulting firms  and</p></li><li><p class="#CCCCCC">educational institutions and trade associations.</p></li></ul><p class="#CCCCCC">We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses  (b) the organization does not have any negative records with us  (c) the benefit to us from the visibility of the hyperlink compensates the absence of Book My Service  and (d) the link is in the context of general resource information.</p><p class="#CCCCCC">These organizations may link to our home page so long as the link: (a) is not in any way deceptive  (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services  and (c) fits within the context of the linking party’s site.</p><p class="#CCCCCC">If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Book My Service. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p><p class="#CCCCCC">Approved organizations may hyperlink to our Website as follows:</p><ul class="list-disc ml-10"><li><p class="#CCCCCC">By use of our corporate name  or</p></li><li><p class="#CCCCCC">By use of the uniform resource locator being linked to  or</p></li><li><p class="#CCCCCC">By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</p></li></ul><p class="#CCCCCC">No use of Book My Service&#x27;s logo or other artwork will be allowed for linking absent a trademark license agreement.</p></div></div>
          <div class="flex flex-col gap-3 mt-5"><div><p class="text-xl mb-2 font-[400">iFrames</p></div>
          <div>
          <p class="#CCCCCC">Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p></div></div><div class="flex flex-col gap-3 mt-5"><div><p class="text-xl mb-2 font-[400">Content Liability</p></div><div><p class="#CCCCCC">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
          </div>
           
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
      </div>
  );
}
