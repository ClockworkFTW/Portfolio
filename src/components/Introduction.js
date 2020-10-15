import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

const Introduction = () => {
  const books = useSelector(({ statistics }) => {
    if (statistics.data.books) {
      // Filter out books not read during this month and sort descending
      let books = statistics.data.books
        .filter((book) => moment().isSame(moment(book.date), "month"))
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
  });

  const commits = useSelector(({ statistics }) =>
    statistics.data.commits
      ? statistics.data.commits.filter((commit) =>
          moment().isSame(moment(commit.date), "month")
        )
      : 0
  );

  const places = useSelector(({ statistics }) =>
    statistics.data.places
      ? statistics.data.places.filter((place) =>
          moment().isSame(moment(place.date), "month")
        )
      : 0
  );

  const steps = useSelector(({ statistics }) =>
    statistics.data.activities
      ? statistics.data.activities.reduce((acc, cur) => {
          if (
            cur.type === "Steps" &&
            moment().isSame(moment(cur.date), "month")
          ) {
            return acc + cur.value;
          } else {
            return acc;
          }
        }, 0)
      : 0
  );

  const tracks = useSelector(({ statistics }) => {
    if (statistics.data.tracks) {
      const tracksTotal = statistics.data.tracks.filter((track) =>
        moment().isSame(moment(track.date), "month")
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
  });

  return (
    <Container>
      <Header>Introduction</Header>
      <Body>
        <span style={{ fontWeight: 600 }}>
          My first name is John, but my friends call me Nik.
        </span>{" "}
        Currently, I'm <Link>looking for a junior developer position</Link>. In
        the last 30 days, I've pushed <Link>{commits.length} commits</Link> to
        GitHub, sent <Link>24 Tweets</Link>, taken {steps} steps, and visited{" "}
        {places.length} places. My most played song is{" "}
        <Link>
          "{tracks.tracksTop.name}" by {tracks.tracksTop.artist}
        </Link>
        , and I've listened to {tracks.tracksTotal.length} songs overall. I am
        reading{" "}
        <Link>
          {books ? books.length : "no"} book
          {books ? (books.length > 1 ? "s" : "") : ""}
        </Link>{" "}
        at the moment:{" "}
        {books.map(
          (book, i) =>
            `"${book.title}" by ${book.author} ${
              i + 1 === books.length ? "" : "and"
            } `
        )}
      </Body>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.h1`
  margin-bottom: 10px;
  font-size: 14px;
  text-transform: uppercase;
  color: #4a4a4a;
`;

const Body = styled.p`
  font-size: 26px;
  line-height: 1.5;
  color: #111111;
`;

const Link = styled.a`
  color: #45aaf2;
  /* text-decoration: underline;
  text-decoration-color: #45aaf2; */
  &:hover {
    cursor: pointer;
  }
`;

export default Introduction;
