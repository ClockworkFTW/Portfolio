import axios from "axios";

const cors = "https://cors-anywhere-jnb.herokuapp.com";
const base_url = "http://ws.audioscrobbler.com/2.0/";
const api_key = process.env.REACT_APP_LASTFM_API_KEY;

export const getTopTrack = async (setTopTrack) => {
  const method = "user.getTopTracks";
  const user = "ChiefBubbles";
  const limit = 1;
  const url = `${cors}/${base_url}?method=${method}&api_key=${api_key}&user=${user}&limit=${limit}&format=json`;

  const result = await axios.get(url);

  const { name, artist } = result.data.toptracks.track[0];

  setTopTrack({ name, artist: artist.name });
};

export const getTotalTracks = async (setTotalTracks) => {
  const method = "user.getRecentTracks";
  const user = "ChiefBubbles";
  const limit = 200;
  const url = `${cors}/${base_url}?method=${method}&api_key=${api_key}&user=${user}&limit=${limit}&format=json`;

  let next = true;
  let tracks = [];
  let page = 1;

  const dateLimit = new Date();
  dateLimit.setDate(dateLimit.getDate() - 30);

  while (next) {
    let result = await axios.get(`${url}&page=${page}`);
    result = result.data.recenttracks.track;

    if (Array.isArray(result) && result.length > 0) {
      tracks = [...tracks, ...result];

      result.forEach((track) => {
        if (track.date && new Date(track.date.uts * 1000) < dateLimit) {
          next = false;
        }
      });

      page++;
    } else {
      next = false;
    }
  }

  tracks = tracks.filter(
    (track) => track.date && new Date(track.date.uts * 1000) > dateLimit
  );

  setTotalTracks(tracks.length);
};
