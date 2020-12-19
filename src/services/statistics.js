import axios from "axios";
import moment from "moment";

const base_url = "/api/statistics";

export const getStatistics = async () => {
  try {
    const from = moment().subtract(30, "days").format("YYYY-MM-DD");
    const to = moment().format("YYYY-MM-DD");
    const url = `${base_url}?from=${from}&to=${to}`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getCalendar = async () => {
  try {
    const endpoint = "calendar";
    const url = `${base_url}/${endpoint}`;

    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    throw error;
  }
};
