import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import "./index.css";

import { Icon } from "../Common";
import Emoji from "../Emoji";
import Controls from "../Controls";
import Links from "./Links";

const Header = () => {
  const { pathname } = useLocation();
  const isStats = pathname === "/statistics";
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper isStats={isStats}>
      <Container isStats={isStats}>
        <Emoji symbol="🐳" label="spouting-whale" size="30px" />
        {isStats && <Controls />}
        <Navbar>
          <Links isStats={isStats} />
        </Navbar>
        <MenuButton onClick={() => setToggle(!toggle)}>
          <Icon icon={["fas", toggle ? "times" : "bars"]} />
        </MenuButton>
      </Container>
      {toggle && (
        <Dropdown>
          <Links isStats={isStats} />
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

const Navbar = styled.div`
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
