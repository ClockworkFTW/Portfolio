import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// prettier-ignore
import {getBooks, getCommits, getTime, getPlaces, getSteps, getTracks} from '../util'

const Introduction = () => {
  const statistics = useSelector(({ statistics: { data } }) => {
    const books = getBooks(data);
    const commits = getCommits(data);
    const time = getTime(data);
    const places = getPlaces(data);
    const steps = getSteps(data);
    const tracks = getTracks(data);

    return { books, commits, time, places, steps, tracks };
  });

  return (
    <Container>
      <Header>Introduction</Header>
      <Body>
        <span style={{ fontWeight: 600 }}>
          My first name is John, but my friends call me Nik.
        </span>{" "}
        Currently, I'm{" "}
        <Link
          href="https://docs.google.com/document/d/1iQX9wtfGwuBE-999QWens4Eh0Pc4xORfvA87KsfaHVQ/edit?usp=sharing"
          target="_blank"
        >
          looking for a junior developer position
        </Link>
        . In the last 30 days, I've logged {statistics.time} of coding time and
        pushed{" "}
        <Link href="https://github.com/ClockworkFTW" target="_blank">
          {statistics.commits.length} commits
        </Link>{" "}
        to GitHub. I've taken {statistics.steps.count} steps over a distance of{" "}
        {statistics.steps.distance} miles, visiting {statistics.places.length}{" "}
        places along the way. My most played song is{" "}
        <Link href="https://www.last.fm/user/ChiefBubbles" target="_blank">
          "{statistics.tracks.tracksTop.name}" by{" "}
          {statistics.tracks.tracksTop.artist}
        </Link>
        , and I've listened to {statistics.tracks.tracksTotal.length} songs
        overall. I am reading{" "}
        <Link
          href="https://www.goodreads.com/user/show/65510527-john-boyle"
          target="_blank"
        >
          {statistics.books.length === 0 ? "no" : statistics.books.length} book
          {statistics.books.length === 1 ? "" : "s"}
        </Link>{" "}
        at the moment{statistics.books.length === 0 ? "." : ":"}{" "}
        {statistics.books
          ? statistics.books.map(
              (book, i) =>
                `"${book.title}" by ${book.author} ${
                  i + 1 === statistics.books.length ? "" : "and"
                } `
            )
          : null}
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
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Introduction;
