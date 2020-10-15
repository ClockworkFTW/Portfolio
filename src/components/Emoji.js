import React from "react";
import styled from "styled-components";

const Emoji = ({ symbol, label, size }) => (
  <Container
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    size={size}
  >
    {symbol}
  </Container>
);

const Container = styled.span`
  margin: 0 6px;
  font-size: ${({ size }) => (size ? size : "inherit")};
  :nth-child(1) {
    margin: 0 0.5em 0 0;
  }
`;

export default Emoji;
