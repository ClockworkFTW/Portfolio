import React from "react";
import styled from "styled-components";

const Projects = () => (
  <Wrapper>
    <Container>
      <h1>Projects</h1>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

export default Projects;
