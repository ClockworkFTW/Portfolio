import React, { useState } from "react";
import Ticker from "react-ticker";
import styled from "styled-components";

export default ({ technologies }) => {
  const [play, setPlay] = useState(true);
  return (
    <Wrapper>
      <Header>Technologies I've been using recently</Header>
      <Ticker move={play}>
        {() => (
          <Container
            onMouseEnter={() => setPlay(false)}
            onMouseLeave={() => setPlay(true)}
          >
            {technologies.map((t, i) => (
              <Skill key={i}>
                <Icon className={t.icon} />
                <Name>{t.name}</Name>
              </Skill>
            ))}
          </Container>
        )}
      </Ticker>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.h3`
  margin-bottom: 40px;
  text-align: center;
  color: #1e202a;
`;

const Container = styled.div`
  display: flex;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const Icon = styled.i`
  margin-bottom: 10px;
  font-size: 40px;
  color: #383838;
`;

const Name = styled.span`
  font-size: 12px;
  color: #1e202a;
`;
