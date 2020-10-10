import React from "react";
import { Link as SL } from "react-scroll";
import { HashLink as HL } from "react-router-hash-link";
import { Link as RL, useLocation } from "react-router-dom";
import styled from "styled-components";

import "./index.css";

import Controls from "../Controls";

const links = ["home", "about", "projects"];

const Header = () => {
  const { pathname } = useLocation();
  const scrollable = pathname !== "/statistics";

  return (
    <Wrapper>
      <Container isStats={!scrollable}>
        <h1 style={{ fontSize: "30px" }}>&#x1F9A5;</h1>
        {!scrollable && <Controls />}
        <Links>
          {links.map((link, i) =>
            scrollable ? (
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
          <RouterLink to="/statistics" active={!scrollable}>
            Statistics
          </RouterLink>
        </Links>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
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
  max-width: ${({ isStats }) => (isStats ? "none" : "1000px")};
  margin: ${({ isStats }) => (isStats ? "0 20px" : "0 auto")};
  padding: 10px 0;
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
`;

const RouterLink = styled(RL)`
  margin-left: 20px;
  text-transform: capitalize;
  color: ${({ active }) => (active ? "#45aaf2" : "#4a4a4a;")};
  text-decoration: none;
`;

export default Header;
