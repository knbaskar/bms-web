"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import axios from 'axios';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";

const RecommendationCard = ({
  businessName,
  area,
  displayPicture,
  averageRating,
}) => {

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

  const handlePayment = async (price = 100) => {
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
  <Box display="inline-flex" alignItems="center" gap={1} position="relative">
    <Card
      sx={{
        width: 220,
        height: 300,
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={displayPicture || "/images/default-merchant.avif"}
        alt={businessName}
      />
      <CardContent sx={{ padding: 1 }}>
        <Grid container spacing={0.5}>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary">
              Ratings
            </Typography>
            <Box display="flex" alignItems="center">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{ fontSize: "12px" }}
                  color={
                    averageRating && index < Math.floor(averageRating)
                      ? "primary"
                      : "disabled"
                  }
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography variant="caption" color="text.secondary">
              Unisex
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="primary"
              sx={{
                fontSize: "12px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {businessName}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              sx={{ fontSize: "10px", marginBottom: "4px" }}
            >
              {area}
            </Typography>
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ fontSize: "12px", color: "primary.main" }} />
              <Typography
                variant="caption"
                color="primary"
                sx={{ ml: 0.5, fontSize: "10px" }}
              >
                Directions
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="warning"
              fullWidth
              sx={{ fontSize: "8px", padding: "2px" }}
            >
              Profile
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{ fontSize: "8px", padding: "2px" }}
            >
              Book
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="warning"
              fullWidth
              onClick={() => handlePayment()}
              sx={{ fontSize: "8px", padding: "2px" }}
            >
              ₹ 100
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <IconButton
        sx={{ position: "absolute", top: 4, right: 4 }}
        color="warning"
        size="small"
      >
        <ShareIcon sx={{ fontSize: "12px" }} />
      </IconButton>
      <IconButton
        sx={{ position: "absolute", bottom: 4, right: 4 }}
        color="default"
        size="small"
      >
        <FavoriteBorderIcon sx={{ fontSize: "12px" }} />
      </IconButton>
    </Card>
  </Box>
);
}

export default RecommendationCard;