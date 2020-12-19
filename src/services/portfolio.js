import axios from "axios";

const base_url = "/api/portfolio";

export const getPortfolio = async () => {
  try {
    const result = await axios.get(base_url);
    return result.data;
  } catch (error) {
    throw error;
  }
};
