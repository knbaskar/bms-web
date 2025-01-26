"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Stack } from "@mui/material";
import axios from "axios";

const BusinessCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories from the API
    axios
      .get("https://mukeshkapoor25-merchant-hub-service.hf.space/api/v1/helpers/business-categories")
      .then((response) => {
        const sortedCategories = response.data.data.categories.sort(
          (a, b) => a.priority - b.priority
        );
        setCategories(sortedCategories); // Sort by priority
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
    sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center items horizontally
        gap: 3, // Uniform spacing between categories
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "16px 0", // Add consistent top and bottom padding
        backgroundColor: "var(--background)", // Use the global gradient background
        scrollbarWidth: "none",
        marginTop: "20px", // Move the entire component 20px below the top
        "&::-webkit-scrollbar": {
        display: "none",
        },
    }}
    >
    {categories.map((category) => (
        <Stack
        key={category.name}
        direction="column"
        alignItems="center"
        sx={{
            minWidth: "80px", // Ensure consistent width
            textAlign: "center",
            cursor: "pointer",
        }}
        >
        
        <Typography
            variant="caption"
            sx={{
            fontSize: "16px", // Adjusted font size
            fontWeight: category.default ? "bold" : "normal",
            color: "var(--foreground)",
            }}
        >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
        </Typography>
        </Stack>
    ))}
    </Box>
  );
};

export default BusinessCategories;