"use client";

import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/BookMyService/header";
import Footer from "../components/BookMyService/footer";
import ThemeProvider from "../Providers/theme-provider";
import BusinessCategories from "../components/BookMyService/business-categories";
// import "../globals.css";
import RecommendationCardContainer from "../components/BookMyService/recommendations-card-container";
import { CategoryProps, fetchRecommendations } from "./services/api/recommendations";

const RecommendationsPage = () => {
  const [categories, setCategories] = useState([]); // Default empty state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        const data = await fetchRecommendations(); // Fetch recommendations
    
        setCategories(data); // Set the fetched categories
      } catch (err) {
        setError("Failed to load recommendations. Please try again.");
        console.error("Error fetching recommendations:", err);
      } finally {
        setLoading(false);
      }
    };

    loadRecommendations();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Loading recommendations...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" align="center" color="error" sx={{ mt: 4 }}>
          {error}
        </Typography>
      </Container>
    );
  }

  if (categories.length === 0) {
    return (
      <Container>
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          No recommendations found.
        </Typography>
      </Container>
    );
  }
  return (
    <div className="bg-gradientBackground flex flex-col min-h-screen">
    <Container sx={{ mt: 4 }}>
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <Header />

            <aside className="flex-grow w-full max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
                  <BusinessCategories />
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow w-full max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="flex gap-8">
              <RecommendationCardContainer categories={categories} />
              </div>
            </main>

            {/* Footer Section */}
            <Footer />
          </div>

    </Container>
    </div>
  );
};

export default RecommendationsPage;