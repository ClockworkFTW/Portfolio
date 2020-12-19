import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getBooks, getCommits, getTime, getTracks } from "../../util";

import { Highlight } from "../Common";

const links = {
  resume:
    "https://docs.google.com/document/d/1iQX9wtfGwuBE-999QWens4Eh0Pc4xORfvA87KsfaHVQ/edit?usp=sharing",
  github: "https://github.com/ClockworkFTW",
  lastfm: "https://www.last.fm/user/ChiefBubbles",
  goodreads: "https://www.goodreads.com/user/show/65510527-john-boyle",
};

const Introduction = () => {
  const statistics = useSelector(({ statistics: { data } }) => {
    const books = getBooks(data);
    const commits = getCommits(data);
    const time = getTime(data);
    const tracks = getTracks(data);
    return { books, commits, time, tracks };
  });

  return (
    <Container>
      Currently I'm looking for a{" "}
      <Link href={links.resume} target="_blank">
        <Highlight>junior developer</Highlight>
      </Link>{" "}
      position based in the San Francisco Bay Area. In the last 30 days, I've
      logged {statistics.time} of coding time and pushed{" "}
      <Link href={links.github} target="_blank">
        <Highlight>{statistics.commits} commits</Highlight>
      </Link>{" "}
      to GitHub. My most played song was{" "}
      <Link href={links.lastfm} target="_blank">
        <Highlight>"{statistics.tracks.top.name}"</Highlight>
      </Link>{" "}
      by {statistics.tracks.top.artist}, and I've listened to{" "}
      {statistics.tracks.total.length} songs overall. I am reading{" "}
      <Link href={links.goodreads} target="_blank">
        <Highlight>
          {statistics.books.length === 0 ? "no" : statistics.books.length} book
          {statistics.books.length === 1 ? "" : "s"}
        </Highlight>
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
    </Container>
  );
};

const Container = styled.p`
  opacity: 0.8;
  line-height: 1.8;
  font-size: 1.125em;
  color: #ffffff;
  font-style: italic;
`;

const Link = styled.a`
  text-decoration: none;
`;

export default Introduction;
