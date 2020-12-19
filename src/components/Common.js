import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { faAngleLeft, faAngleRight } from "@fortawesome/pro-light-svg-icons";

library.add(
  faGithub,
  faAngleLeft,
  faAngleRight,
  faBars,
  faTimes,
  faExternalLinkAlt
);

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    background: #1e202a;
    font-size: 16px;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`;

export const Row = styled.div`
  margin-bottom: 60px;
  &:nth-last-child(1) {
    margin-bottom: 0px;
  }
`;

export const Icon = styled(FontAwesomeIcon)``;

export const Statistic = styled.li`
  margin-bottom: 8px;
  font-size: 12px;
  color: ${({ color }) => color};
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Header = styled.h1`
  margin-bottom: 50px;
  font-size: 48px;
  font-weight: 900;
  text-transform: capitalize;
`;

export const Highlight = styled.span`
  opacity: 1;
  background: -webkit-linear-gradient(left top, #ff0082 0%, #e60ce8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
