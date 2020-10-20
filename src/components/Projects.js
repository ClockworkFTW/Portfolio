import React from "react";
import styled from "styled-components";

import { projects } from "../data";

import { Icon } from "./Common";
import Emoji from "./Emoji";

const Projects = () => (
  <Container>
    {projects.map((project, i) => (
      <Project key={i}>
        <Name mobile={true}>
          <Emoji symbol={project.emoji.symbol} label={project.emoji.label} />
          {project.name}
        </Name>
        <Image url={project.image} />
        <Content>
          <Name mobile={false}>
            <Emoji symbol={project.emoji.symbol} label={project.emoji.label} />
            {project.name}
          </Name>
          <Description>{project.description}</Description>
          <div>
            <Link href={project.demo}>
              <Icon icon={["fas", "link"]} />
              <span style={{ marginLeft: "10px" }}>Demo</span>
            </Link>
            <Link href={project.demo}>
              <Icon icon={["fab", "github"]} />
              <span style={{ marginLeft: "10px" }}>Code</span>
            </Link>
          </div>
        </Content>
      </Project>
    ))}
  </Container>
);

const Container = styled.ul``;

const Project = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  padding-bottom: 30px;
  &:nth-last-child(1) {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
  @media (max-width: 800px) {
    display: block;
    border-bottom: 1px solid #f7f7f8;
    &:nth-last-child(1) {
      border-bottom: none !important;
    }
  }
`;

const Image = styled.div`
  flex: 0 0 300px;
  height: 250px;
  margin: 0 30px 0 0;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 16px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 4px 0px;
  @media (max-width: 800px) {
    width: 100%;
    height: inherit;
    margin: 30px 0;
    padding-top: 70%;
  }
`;

const Content = styled.div``;

const Name = styled.h1`
  display: ${({ mobile }) => (mobile ? "none" : "inherit")};
  font-size: 26px;
  font-weight: 700;
  color: #111111;
  @media (max-width: 800px) {
    display: ${({ mobile }) => (mobile ? "inherit" : "none")};
  }
`;

const Description = styled.p`
  margin: 16px 0;
  line-height: 1.8;
  color: #111111;
`;

const Link = styled.a`
  display: inline-block;
  margin: 2px;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: #111111;
  &:hover {
    background: #f7f7f8;
  }
`;

export default Projects;
