import moment from "moment";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export const getBooks = (statistics) => {
  if (!statistics.books) return [];

  return statistics.books
    .sort((a, b) => a.date - b.date)
    .reduce((acc, cur) => {
      const x = acc.find((item) => item.title === cur.title);
      if (!x) {
        return acc.concat([cur]);
      } else {
        return acc;
      }
    }, []);
};

export const getCommits = (statistics) => {
  if (!statistics.commits) {
    return 0;
  } else {
    return statistics.commits.length;
  }
};

export const getTime = (statistics) => {
  if (!statistics.time) return "0 hours";

  let total = moment.duration();

  statistics.time.forEach(({ software_development_time }) => {
    if (software_development_time !== "no time") {
      software_development_time.split(" ").forEach((e) => {
        total.add(e.slice(0, -1), e[e.length - 1]);
      });
    }
  });

  return `${Math.floor(total.asHours())} hours and ${total.minutes()} minutes`;
};

export const getTracks = (statistics) => {
  if (!statistics.tracks) return null;

  const total = statistics.tracks;

  const top = total
    .sort(
      (a, b) =>
        total.filter((v) => v.name === a.name).length -
        total.filter((v) => v.name === b.name).length
    )
    .pop();

  return { total, top };
};
