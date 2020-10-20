import React from "react";
import styled from "styled-components";

import { technologies } from "../data";

const TechStack = () => (
  <Container>
    <Header>Tech Stack</Header>
    <div>
      <Body>
        <span style={{ fontWeight: 700 }}>
          You can find my favorite technologies listed below.
        </span>{" "}
        As an aspiring developer, I am constantly honing my skillset and
        learning new tools to add to my kit.
      </Body>
      {technologies.map((tech, i) => (
        <Tech key={i}>
          <Name>{tech.name}</Name>
          <Icon className={tech.icon} />
        </Tech>
      ))}
    </div>
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
  margin-bottom: 20px;
  font-size: 26px;
  line-height: 1.5;
  color: #111111;
`;

const Tech = styled.div`
  display: inline-block;
  margin: 0 30px 30px 0;
  text-align: center;
  color: #4a4a4a;
`;

const Name = styled.h1`
  margin-bottom: 10px;
`;

const Icon = styled.i`
  font-size: 54px;
`;

export default TechStack;
