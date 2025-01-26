import axios from "axios";

export interface Address {
  street: string;
  area: string;
}

export interface Merchant {
  merchant_id: string;
  business_name: string;
  address: Address;
  display_picture: string;
  average_rating: number;
  country: string;
  city: string;
  merchant_subcategory: string;
  description: string | null;
}

export interface RecommendationCardProps {
  businessName: string;
  area: string;
  displayPicture: string;
  averageRating?: number;
}

export interface CategoryProps {
  id: string;
  title: string;
  services: RecommendationCardProps[];
}

const API_URL =
  process.env.NEXT_PUBLIC_RECOMMENDATIONS_MERCHANTS_API ||
  "https://mukeshkapoor25-merchant-hub-service.hf.space/api/v1/merchants/recommended-merchants";

export const fetchRecommendations = async () => {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: {
        location_id: "IN-MAA",
        merchant_category: "salon",
        radius: 0,
      },
    });

    if (response?.data?.data && Array.isArray(response?.data?.data)) {
       const list = response.data.data.map(category => ({
        id: category.id,
        title: category.title,
        services: category.services.map((service) => ({
          businessName: service.business_name,
          area: service.address.area,
          displayPicture: service.display_picture || "/images/default-merchant.avif",
          averageRating: service.average_rating,
        })),
      }));
      return list;
    }
    throw new Error("Invalid API response format.");
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return []; // Return an empty array on error
  }
};
