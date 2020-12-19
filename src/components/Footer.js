import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Wrapper>
    <Container>
      <Message>Built by John Nikolas Boyle | 2020</Message>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  background: #1e202a;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Message = styled.p`
  color: #ffffff;
  opacity: 0.8;
`;

export default Footer;
