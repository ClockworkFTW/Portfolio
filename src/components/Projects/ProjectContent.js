import React from "react";
import styled from "styled-components";

import { Icon } from "../Common";
import Emoji from "../Emoji";

export default ({ project }) => (
  <Container>
    <Type>
      <Emoji code={project.emoji} />
      {project.type}
    </Type>
    <Name>{project.name}</Name>
    <Description>{project.description}</Description>
    <Footer>
      <div>
        {project.technologies.split(", ").map((technology) => (
          <Technology>{technology}</Technology>
        ))}
      </div>
      <div>
        <Link href={project.demo} target="_blank">
          <Icon icon={["fas", "external-link-alt"]} />
        </Link>
        <Link href={project.code} target="_blank">
          <Icon icon={["fab", "github"]} />
        </Link>
      </div>
    </Footer>
  </Container>
);

const Container = styled.div`
  max-width: calc(100% - 400px);
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const Type = styled.h2`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #1e202a;
`;

const Description = styled.p`
  margin: 24px 0;
  line-height: 1.8;
  color: #1e202a;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  @media (max-width: 800px) {
    display: inherit;
  }
`;

const Technology = styled.div`
  display: inline-block;
  margin: 0 12px 12px 0;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background: -webkit-linear-gradient(left top, #ff0082 0%, #e60ce8 100%);
`;

const Link = styled.a`
  display: inline-block;
  margin-left: 8px;
  padding: 6px;
  font-size: 18px;
  color: #1e202a;
  &:hover {
    color: #ff0082;
  }
`;
