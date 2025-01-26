"use client";

import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RecommendationCard from "./recommendations-card";
// import { CategoryProps } from "../../pages/services/api/recommendations";


const RecommendationCardContainer = ({
  categories,
}) => {
  const scrollRefs = useRef({}); // Maintain separate refs for each section
  const [scrollState, setScrollState] = useState({});

  const updateScrollState = (id) => {
    const sectionRef = scrollRefs.current[id];
    if (sectionRef) {
      const canScrollLeft = sectionRef.scrollLeft > 0;
      const canScrollRight =
        sectionRef.scrollLeft + sectionRef.clientWidth < sectionRef.scrollWidth;
      setScrollState((prev) => ({
        ...prev,
        [id]: { canScrollLeft, canScrollRight },
      }));
    }
  };

  const handleScroll = (id, direction = "left" | "right") => {
    const sectionRef = scrollRefs.current[id];
    if (sectionRef) {
      const scrollAmount =
        direction === "left" ? -sectionRef.scrollWidth : sectionRef.scrollWidth;
      sectionRef.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(() => updateScrollState(id), 300); // Update scroll state after scrolling
    }
  };

  useEffect(() => {
    categories.forEach((category) => updateScrollState(category.id));
  }, [categories]);

  if (!categories.length) {
    return (
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mt: 4 }}>
        No recommendations available.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "10px", position: "relative" }}>
      {categories.map((category) => {
        const { canScrollLeft, canScrollRight } = scrollState[category.id] || {
          canScrollLeft: false,
          canScrollRight: false,
        };

        return (
          <Box key={category.id} sx={{ marginBottom: "40px", position: "relative" }}>
            <Typography variant="h5" gutterBottom>
              {category.title}
            </Typography>

            {/* Scrollable Container */}
            <Box
              ref={(el) => (scrollRefs.current[category.id] = el)}
              onScroll={() => updateScrollState(category.id)}
              sx={{
                display: "flex",
                overflowX: "auto",
                gap: 2,
                paddingBottom: 2,
                position: "relative",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {category.services.map((service, index) => (
                <RecommendationCard key={index} {...service} />
              ))}
            </Box>

            {/* Left Navigation Button */}
            <IconButton
              onClick={() => handleScroll(category.id, "left")}
              disabled={!canScrollLeft}
              className="nav-button nav-button-scroll nav-button-scroll-left"
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>

            {/* Right Navigation Button */}
            <IconButton
              onClick={() => handleScroll(category.id, "right")}
              disabled={!canScrollRight}
              className="nav-button nav-button-scroll nav-button-scroll-right"
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translate(50%, -50%)",
                zIndex: 10,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        );
      })}
    </Box>
  );
};

export default RecommendationCardContainer;