"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ProfileDropdown from "./ProfileDropdown";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
// import LocationPopup from "./location-popup"; // Import the location popup component

const Header = () => {
  const [location, setLocation] = useState("Location"); // Default location text
  const [open, setOpen] = useState(false); // Modal state
  const { data: session } = useSession();
  const handleOpen = () => setOpen(true); // Open location popup
  const handleClose = () => setOpen(false); // Close location popup
  const router = useRouter();
  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation); // Update location
  };

  const handleSignOut = () => {
    signOut();
    router.push('/presentation')
  };

  useEffect(() => {
    if (!session?.user?.name) {
      router.push("/login");
    }
  }, [session?.user?.name, router]);

  return (
    <>
      {/* Header Backdrop Section */}
      <Box
        sx={{
          backgroundColor: "#ff9500", // Primary color background
          height: "120px", // Adjust height to cover margin and header
          width: "100%",
          position: "fixed", // Fixed to the top to stay in place
          top: 0,
          zIndex: 1200, // Below the AppBar's z-index
        }}
      />
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#474343",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          zIndex: 1201,
          marginTop: "20px", // Move header 20px below the top
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // Space out left, center, and right sections
            alignItems: "center",
            padding: "0 50px", // Adjust padding as needed
            height: "100px", // Set a fixed height for the header
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="/img/web/bms_logo.svg" // Placeholder image
            alt="Logo"
            sx={{ width: "180px", height: "auto" }}
          />

          {/* Center: Search Bar and Location Selector */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px", // Spacing between search bar and location selector
            }}
          >
            {/* Search Bar */}
            <TextField
              variant="outlined"
              placeholder="Search by provider, type, or service – it’s that easy!"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: {
                  xs: "100%",  // Full width on extra-small screens
                  sm: "300px", // 300px on small screens
                  md: "400px", // 400px on medium screens
                  lg: "500px", // 500px on large screens and above
                },
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            />

            {/* Location Selector */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                padding: "10px 20px",
                cursor: "pointer",
              }}
              onClick={handleOpen} // Open location popup
            >
              <LocationOnIcon sx={{ color: "#8392ab" }} />
              <Typography sx={{ color: "#8392ab" }}>{location}</Typography>
            </Box>
          </Box>

          {/* Sign Up Button */}
          {/* <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff9500",
              borderRadius: "10px",
              boxShadow: "0px 2px 6px rgba(220, 34, 101, 0.36)",
              textTransform: "none",
            }}
          >
            Sign Up
          </Button> */}
          <div className="flex justify-end p-4 bg-gray-50">
            <ProfileDropdown
              userName={session?.user?.name}
              profileImage={session?.user?.image} // Replace with actual image URL
              onSignOut={handleSignOut}
            />
          </div>
        </Toolbar>
      </AppBar>

      {/* Spacer to avoid content overlap */}
      <Box sx={{ height: "100px" }} />

      {/* Location Popup */}
      {/* <LocationPopup
        open={open}
        onClose={handleClose}
        onSelectLocation={handleLocationSelect}
      /> */}
    </>
  );
};

export default Header;