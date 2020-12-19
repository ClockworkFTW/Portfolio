import React from "react";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import { Header, Highlight } from "../Common";
import ProjectCard from "./ProjectCard";

export default ({ section }) => {
  const { projects } = useSelector((state) => state.portfolio.data);
  return (
    <Element name={section}>
      <Wrapper id={section}>
        <Container>
          <Header>
            <Highlight>{section}.</Highlight>
          </Header>
          <ul>
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i + 1} />
            ))}
          </ul>
        </Container>
      </Wrapper>
    </Element>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #f7f7f8;
`;

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 80px 30px;
`;
