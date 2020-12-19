import React from "react";
import styled from "styled-components";

const Emoji = ({ symbol, code, label, size }) => {
  if (symbol)
    return (
      <Symbol
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
        size={size}
      >
        {symbol}
      </Symbol>
    );

  if (code) return <Code dangerouslySetInnerHTML={{ __html: `${code}` }} />;
};

const Symbol = styled.span`
  margin: 0 6px;
  font-size: ${({ size }) => (size ? size : "inherit")};
  :nth-child(1) {
    margin: 0 0.5em 0 0;
  }
`;

const Code = styled.span`
  margin-right: 10px;
`;

export default Emoji;
