import React from "react";
import styled from "styled-components";

const Emoji = ({ symbol, label }) => (
  <Container
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </Container>
);

const Container = styled.span`
  margin: 0 6px;
  :nth-child(1) {
    margin: 0 6px 0 0;
  }
`;

export default Emoji;
