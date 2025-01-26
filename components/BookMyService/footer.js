import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "grey.200", py: 4, mt: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Brand and Social Icons */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" color="primary">
            BOOK MY SERVICE
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
            <FacebookIcon sx={{ color: "primary.main", cursor: "pointer" }} />
            <TwitterIcon sx={{ color: "primary.main", cursor: "pointer" }} />
            <GitHubIcon sx={{ color: "primary.main", cursor: "pointer" }} />
            <YouTubeIcon sx={{ color: "primary.main", cursor: "pointer" }} />
          </Box>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Company
          </Typography>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">About Us</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Freebies</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Premium Tools</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Blog</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Help & Support
          </Typography>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Contact Us</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Knowledge Center</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Custom Development</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Sponsorships</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Legal
          </Typography>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Terms & Conditions</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Privacy Policy</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Typography variant="body2">Licenses (EULA)</Typography>
          </Link>
        </Grid>
      </Grid>

      {/* Footer Bottom Text */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2" align="center" color="textSecondary">
          © 2024 Book My Service. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
