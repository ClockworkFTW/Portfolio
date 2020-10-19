import React from "react";
import { Link as SL } from "react-scroll";
import { HashLink as HL } from "react-router-hash-link";
import { Link as RL } from "react-router-dom";
import styled from "styled-components";

const links = ["home", "about", "projects"];

const Links = ({ isStats, toggle, setToggle }) => (
  <div>
    {links.map((link, i) =>
      !isStats ? (
        <ScrollLink
          key={i}
          to={link}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setToggle(!toggle)}
        >
          {link}
        </ScrollLink>
      ) : (
        <HashLink key={i} to={`/#${link}`} onClick={() => setToggle(!toggle)}>
          {link}
        </HashLink>
      )
    )}
    <RouterLink
      to="/statistics"
      active={isStats}
      onClick={() => setToggle(!toggle)}
    >
      Statistics
    </RouterLink>
  </div>
);

const ScrollLink = styled(SL)`
  display: inline-block;
  margin-left: 20px;
  text-transform: capitalize;
  color: #4a4a4a;
  @media (max-width: 800px) {
    display: block;
    padding: 10px 0;
  }
  &:hover {
    cursor: pointer;
    color: #45aaf2;
  }
`;

const HashLink = styled(HL)`
  display: inline-block;
  margin-left: 20px;
  text-transform: capitalize;
  color: #4a4a4a;
  text-decoration: none;
  @media (max-width: 800px) {
    display: block;
    padding: 10px 0;
  }
  &:hover {
    color: #45aaf2;
  }
`;

const RouterLink = styled(RL)`
  margin-left: 20px;
  text-transform: capitalize;
  color: ${({ active }) => (active ? "#45aaf2" : "#4a4a4a;")};
  text-decoration: none;
  @media (max-width: 800px) {
    display: block;
    padding: 10px 0;
  }
  &:hover {
    color: #45aaf2;
  }
`;

export default Links;
