import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getCurrentlyReading } from "../services/goodreads";
import { getTopTrack, getTotalTracks } from "../services/lastfm";
import { getCommits } from "../services/github";
import { getCheckins } from "../services/foursquare";

import Introduction from "../components/Introduction";
import TechStack from "../components/TechStack";

const About = () => {
  const [book, setBook] = useState(null);
  const [topTrack, setTopTrack] = useState(null);
  const [totalTracks, setTotalTracks] = useState(null);
  const [commits, setCommits] = useState(null);
  const [checkins, setCheckins] = useState(null);

  useEffect(() => {
    getCurrentlyReading(setBook);
    getTopTrack(setTopTrack);
    getTotalTracks(setTotalTracks);
    getCommits(setCommits);
    getCheckins(setCheckins);
  }, []);

  const render = book && topTrack && totalTracks && commits && checkins;

  return (
    render && (
      <Wrapper>
        <Container>
          <Row>
            <Introduction
              data={{ book, topTrack, totalTracks, commits, checkins }}
            />
          </Row>
          <Row>
            <TechStack />
          </Row>
        </Container>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f8;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Row = styled.div`
  margin-bottom: 60px;
  &:nth-last-child(1) {
    margin-bottom: 0px;
  }
`;

export default About;
