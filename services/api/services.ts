import axios from "axios";

const API_BASE_URL = "https://mukeshkapoor25-merchant-hub-service.hf.space/api/v1";

export async function fetchBusinessCategories() {
  try {
    const response = await axios.get(`${API_BASE_URL}/helpers/business-categories`);
    const { categories } = response.data.data;
    return categories.sort((a: any, b: any) => a.priority - b.priority); // Sort by priority
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
}