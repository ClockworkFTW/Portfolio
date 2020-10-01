import axios from "axios";

const cors = "https://cors-anywhere-jnb.herokuapp.com";
const base_url = "https://api.github.com";

export const getCommits = async (setCommits) => {
  const endpoint = "users/clockworkftw/events";
  const url = `${cors}/${base_url}/${endpoint}`;

  let next = true;
  let commits = [];
  let page = 1;

  const limit = new Date();
  limit.setDate(limit.getDate() - 30);

  while (next) {
    const result = await axios.get(`${url}?page=${page}`);

    commits = [...commits, ...result.data];

    result.data.forEach((commit) => {
      if (new Date(commit.created_at) < limit) {
        next = false;
      }
    });

    page++;
  }

  commits = commits.filter(
    (event) => event.type === "PushEvent" && new Date(event.created_at) > limit
  );

  setCommits(commits);
};
