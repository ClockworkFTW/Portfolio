import React from "react";
import styled from "styled-components";

const Project = ({ project }) => (
  <Container>
    <Name>{project.name}</Name>
  </Container>
);

const Container = styled.div``;

const Name = styled.h1``;

export default Project;
