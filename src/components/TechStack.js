import React from "react";
import styled from "styled-components";

const technologies = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original colored" },
  { name: "Postgres", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "VSCode", icon: "devicon-visualstudio-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

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
      {technologies.map((tech) => (
        <Tech>
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
  font-size: 60px;
`;

export default TechStack;
