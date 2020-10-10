import axios from "axios";

const base_url = "http://localhost:3005";

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
