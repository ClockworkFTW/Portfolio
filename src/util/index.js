import moment from "moment";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export const getBooks = (statistics) => {
  if (statistics.books) {
    // Filter out books not read during this month and sort descending
    let books = statistics.books
      .filter(
        (book) =>
          moment(book.date).isAfter(moment().subtract(30, "days")) &&
          book.percent !== "100"
      )
      .sort((a, b) => a.date - b.date);

    // Filter out duplicate entries
    books = books.reduce((acc, cur) => {
      const x = acc.find((item) => item.title === cur.title);
      if (!x) {
        return acc.concat([cur]);
      } else {
        return acc;
      }
    }, []);

    return books;
  } else {
    return null;
  }
};

export const getCommits = (statistics) =>
  statistics.commits
    ? statistics.commits.filter((commit) =>
        moment(commit.date).isAfter(moment().subtract(30, "days"))
      )
    : 0;

export const getTime = (statistics) => {
  if (statistics.time) {
    const time = statistics.time.filter((time) =>
      moment(time.date).isAfter(moment().subtract(30, "days"))
    );

    let total = moment.duration();

    time.forEach(({ software_development_time }) => {
      if (software_development_time !== "no time") {
        software_development_time.split(" ").forEach((e) => {
          total.add(e.slice(0, -1), e[e.length - 1]);
        });
      }
    });

    // prettier-ignore
    total = `${Math.floor(total.asHours())} hours and ${total.minutes()} minutes`;

    return total;
  } else {
    return null;
  }
};

export const getPlaces = (statistics) =>
  statistics.places
    ? statistics.places.filter((place) =>
        moment(place.date).isAfter(moment().subtract(30, "days"))
      )
    : 0;

export const getSteps = (statistics) => {
  if (statistics.activities) {
    const count = statistics.activities.reduce((acc, cur) => {
      if (
        cur.type === "Steps" &&
        moment(cur.date).isAfter(moment().subtract(30, "days"))
      ) {
        return acc + cur.value;
      } else {
        return acc;
      }
    }, 0);

    const distance = statistics.activities.reduce((acc, cur) => {
      if (
        cur.type === "Walking + Running Distance" &&
        moment(cur.date).isAfter(moment().subtract(30, "days"))
      ) {
        return acc + cur.value;
      } else {
        return acc;
      }
    }, 0);

    return { count: formatNumber(count), distance: distance.toFixed(1) };
  } else {
    return null;
  }
};

export const getTracks = (statistics) => {
  if (statistics.tracks) {
    const tracksTotal = statistics.tracks.filter((track) =>
      moment(track.date).isAfter(moment().subtract(30, "days"))
    );

    const tracksTop = tracksTotal
      .sort(
        (a, b) =>
          tracksTotal.filter((v) => v.name === a.name).length -
          tracksTotal.filter((v) => v.name === b.name).length
      )
      .pop();

    return { tracksTotal, tracksTop };
  } else {
    return null;
  }
};
