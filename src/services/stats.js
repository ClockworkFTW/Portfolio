import axios from "axios";

const base_url = "http://localhost:3005";

export const getStats = async (setStats) => {
  const endpoint = "data";
  const url = `${base_url}/${endpoint}`;

  const result = await axios.get(url);

  setStats(result.data);
};
