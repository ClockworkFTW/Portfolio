import React, { useState } from "react";
import { Link as SL } from "react-scroll";
import { HashLink as HL } from "react-router-hash-link";
import { Link as RL, useLocation } from "react-router-dom";
import styled from "styled-components";

import "./index.css";

import { Icon } from "../Common";
import Emoji from "../Emoji";
import Controls from "../Controls";

const links = ["home", "about", "projects"];

const Header = () => {
  const { pathname } = useLocation();
  const isStats = pathname === "/statistics";

  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper isStats={isStats}>
      <Container isStats={isStats}>
        <Emoji symbol="🐳" label="spouting-whale" size="30px" />
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
        <MenuButton onClick={() => setToggle(!toggle)}>
          <Icon icon={["fas", "bars"]} />
        </MenuButton>
      </Container>
      {toggle && (
        <Dropdown>
          {links.map((link, i) =>
            !isStats ? (
              <ScrollLink
                key={i}
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setToggle(false)}
              >
                {link}
              </ScrollLink>
            ) : (
              <HashLink
                key={i}
                to={`/#${link}`}
                onClick={() => setToggle(false)}
              >
                {link}
              </HashLink>
            )
          )}
          <RouterLink
            to="/statistics"
            active={isStats}
            onClick={() => setToggle(false)}
          >
            Statistics
          </RouterLink>
        </Dropdown>
      )}
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
  padding: 10px 20px;
  transition: max-width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
`;

const Links = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  padding-bottom: 10px;
  @media (min-width: 800px) {
    display: none;
  }
`;

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

const MenuButton = styled.button`
  display: none;
  border: none;
  background: none;
  outline: none;
  font-size: 20px;
  @media (max-width: 800px) {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Header;
