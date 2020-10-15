import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

const Section = ({ name, children, background }) => (
  <Element name={name}>
    <Wrapper id={name} background={background}>
      <Container>{children}</Container>
    </Wrapper>
  </Element>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => (background ? background : "#FFFFFF")};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 200px 20px;
  @media (max-width: 800px) {
    padding: 70px 20px;
  }
`;

export default Section;
