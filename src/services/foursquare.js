import axios from "axios";

const cors = "https://cors-anywhere-jnb.herokuapp.com";
const base_url = "https://api.foursquare.com/v2";
const oauth_token = process.env.REACT_APP_FOURSQUARE_ACCESS_TOKEN;

export const getCheckins = async (setCheckins) => {
  const endpoint = "/users/self/checkins";
  const v = "20200927";
  const url = `${cors}/${base_url}/${endpoint}?v=${v}&oauth_token=${oauth_token}`;

  const result = await axios.get(url);

  setCheckins(result.data.response.checkins.count.toString());
};
