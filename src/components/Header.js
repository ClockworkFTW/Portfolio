import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => (
  <Wrapper>
    <Container>
      <h1 style={{ fontSize: "30px" }}>&#x1F9A5;</h1>
      <div>
        <Link to="/">home</Link>
        <Link to="/">about</Link>
        <Link to="/">projects</Link>
        <Link to="/statistics">stats</Link>
      </div>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 0;
`;

export default Header;
