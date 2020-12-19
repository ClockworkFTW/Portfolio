import React from "react";
import styled from "styled-components";

import profile from "../../assets/profile.jpg";

export default () => (
  <Container>
    <Content url={profile} />
  </Container>
);

const Container = styled.div`
  width: 200px;
  height: 200px;
  padding: 12px;
  border-radius: 16px;
  shape-outside: circle(16px);
  background: -webkit-linear-gradient(left top, #ff0082 0%, #e60ce8 100%);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 2.5rem;
  @media (max-width: 800px) {
    margin: 30px auto;
  }
`;

const Content = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 16px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
`;
