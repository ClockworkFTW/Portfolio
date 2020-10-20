import axios from "axios";

const base_url = "/api";

export const getStatistics = async () => {
  try {
    const endpoint = "data";
    const url = `${base_url}/${endpoint}`;

    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    throw error;
  }
};
