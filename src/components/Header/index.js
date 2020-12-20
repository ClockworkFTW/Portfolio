import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

import "./index.css";

import { Icon, Highlight } from "../Common";
import Controls from "../Controls";
import Links from "./Links";

const Header = () => {
  // Stats route flag for styling
  const { pathname } = useLocation();
  const isStats = pathname === "/statistics";

  // Mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Header style based on scroll position
  const [theme, setTheme] = useState({
    color: "#ffffff",
    background: "none",
    border: "transparent",
  });

  // Animation controls
  const controls = useAnimation();

  // Start animations on render
  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { delay: 1 } });
  }, [controls]);

  return (
    <Wrapper
      position={isStats ? "sticky" : "fixed"}
      background={isStats ? "#1e202a" : theme.background}
      border={isStats ? "#484d66" : theme.border}
    >
      <motion.div animate={controls} initial={{ opacity: 0, y: -50 }}>
        <Container width={isStats ? "100%" : "950px"}>
          <Logo color={isStats || isOpen ? "#ffffff" : theme.color}>
            J<Highlight>N</Highlight>B.
          </Logo>
          {isStats && !isOpen && <Controls />}
          <Navbar>
            <Links
              isStats={isStats}
              color={isStats || isOpen ? "#ffffff" : theme.color}
              setTheme={setTheme}
            />
          </Navbar>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            <Icon
              icon={["fas", isOpen ? "times" : "bars"]}
              color={isStats || isOpen ? "#ffffff" : theme.color}
            />
          </MenuButton>
        </Container>
      </motion.div>
      {isOpen && (
        <Dropdown>
          <Links
            isStats={isStats}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            color={theme.color}
            setTheme={setTheme}
          />
        </Dropdown>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  position: ${({ position }) => position};
  top: 0;
  right: 0;
  left: 0;
  background: ${({ background }) => background};
  border: ${({ border }) => `1px solid ${border}`};
`;

const Container = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ width }) => width};
  margin: 0 auto;
  padding: 10px 30px;
  transition: max-width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
`;

const Logo = styled.h1`
  color: ${({ color }) => color};
  font-weight: 900;
  font-size: 24px;
`;

const Navbar = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e202a;
  @media (min-width: 800px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  padding: 0;
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
