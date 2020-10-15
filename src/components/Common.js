import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// prettier-ignore
import { faFileContract, faPaperPlane, faAngleLeft, faAngleRight, faBars, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faFileContract,
  faPaperPlane,
  faGithub,
  faAngleLeft,
  faAngleRight,
  faBars,
  faLink
);

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
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
