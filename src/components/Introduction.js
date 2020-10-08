import React from "react";
import styled from "styled-components";

const Introduction = () => (
  <Container>
    <Header>Introduction</Header>
    <Body>
      <span style={{ fontWeight: 600 }}>
        My first name is John, but my friends call me Nik.
      </span>{" "}
      Currently, I'm <Link>looking for a junior developer position</Link>. In
      the last 30 days, I've pushed <Link>_____ commits</Link> to GitHub, sent{" "}
      <Link>_____ Tweets</Link>, taken _____ steps, and visited _____ places. My
      most played song is <Link>"_____" by _____</Link>, and I've listened to
      _____ songs overall. I am reading <Link>_____ book</Link> at the moment:
      "_____" by _____.
    </Body>
  </Container>
);

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
  text-decoration: underline;
  text-decoration-color: #45aaf2;
  &:hover {
    cursor: pointer;
  }
`;

export default Introduction;
