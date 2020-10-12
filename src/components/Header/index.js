import React from "react";
import { Link as SL } from "react-scroll";
import { HashLink as HL } from "react-router-hash-link";
import { Link as RL, useLocation } from "react-router-dom";
import styled from "styled-components";

import "./index.css";

import { Icon } from "../Common";
import Controls from "../Controls";

const links = ["home", "about", "projects"];

const Header = () => {
  const { pathname } = useLocation();
  const isStats = pathname === "/statistics";

  return (
    <Wrapper isStats={isStats}>
      <Container isStats={isStats}>
        <h1 style={{ fontSize: "30px" }}>&#x1F433;</h1>
        {isStats && <Controls />}
        <Links>
          {links.map((link, i) =>
            !isStats ? (
              <ScrollLink
                key={i}
                to={link}
                spy={true}
                smooth={true}
                duration={500}
              >
                {link}
              </ScrollLink>
            ) : (
              <HashLink key={i} to={`/#${link}`}>
                {link}
              </HashLink>
            )
          )}
          <RouterLink to="/statistics" active={isStats}>
            Statistics
          </RouterLink>
        </Links>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  position: ${({ isStats }) => (isStats ? "relative" : "fixed")};
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  border-bottom: 1px solid #f7f7f8;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ isStats }) => (isStats ? "100%" : "1000px")};
  margin: 0 auto;
  padding: ${({ isStats }) => (isStats ? "10px 20px;" : "10px 0;")};
  transition: max-width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
`;

const Links = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const ScrollLink = styled(SL)`
  display: inline-block;
  margin-left: 20px;
  text-transform: capitalize;
  color: #4a4a4a;
  &:hover {
    cursor: pointer;
  }
`;

const HashLink = styled(HL)`
  display: inline-block;
  margin-left: 20px;
  text-transform: capitalize;
  color: #4a4a4a;
  text-decoration: none;
  &:hover {
    color: #45aaf2;
  }
`;

const RouterLink = styled(RL)`
  margin-left: 20px;
  text-transform: capitalize;
  color: ${({ active }) => (active ? "#45aaf2" : "#4a4a4a;")};
  text-decoration: none;
  &:hover {
    color: #45aaf2;
  }
`;

export default Header;
