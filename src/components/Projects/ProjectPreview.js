import React from "react";
import styled from "styled-components";

export default ({ preview }) => (
  <Container url={`https://drive.google.com/uc?export=view&id=${preview}`} />
);

const Container = styled.div`
  flex: 0 0 350px;
  height: 250px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 2.5rem;
  @media (max-width: 800px) {
    width: 100%;
    height: inherit;
    margin-bottom: 50px;
    padding-top: 70%;
  }
`;
