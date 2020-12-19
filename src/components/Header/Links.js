import React from "react";
import { Link as SL } from "react-scroll";
import { HashLink as HL } from "react-router-hash-link";
import { Link as RL } from "react-router-dom";
import styled from "styled-components";

const links = ["home", "about", "projects"];

export default ({ isStats, isOpen, setIsOpen, color, setTheme }) => {
  const handleClick = () => (isOpen ? setIsOpen(false) : null);

  const handleSetActive = (link) => {
    switch (link) {
      case "home":
        setTheme({
          color: "#ffffff",
          background: "none",
          border: "transparent",
        });
        break;
      case "about":
        setTheme({
          color: "#1e202a",
          background: "#ffffff",
          border: "#ffffff",
        });
        break;
      case "projects":
        setTheme({
          color: "#1e202a",
          background: "#f7f7f8",
          border: "#f7f7f8",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {links.map((link, i) =>
        !isStats ? (
          <ScrollLink
            key={i}
            to={link}
            spy={true}
            smooth={true}
            offset={-44}
            duration={500}
            onClick={handleClick}
            onSetActive={() => handleSetActive(link)}
            color={color}
          >
            {link}
          </ScrollLink>
        ) : (
          <HashLink key={i} to={`/#${link}`} onClick={handleClick}>
            {link}
          </HashLink>
        )
      )}
      <RouterLink
        to="/statistics"
        active={isStats}
        onClick={handleClick}
        color={color}
      >
        Statistics
      </RouterLink>
    </div>
  );
};

const ScrollLink = styled(SL)`
  display: inline-block;
  margin-left: 20px;
  text-transform: capitalize;
  color: ${({ color }) => color};
  font-weight: 900;
  text-align: center;
  @media (max-width: 800px) {
    display: block;
    padding: 20px 0;
    font-size: 32px;
  }
  &:hover {
    cursor: pointer;
    background: -webkit-linear-gradient(left top, #ff0082 0%, #e60ce8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HashLink = styled(HL)`
  display: inline-block;
  margin-left: 20px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 900;
  text-align: center;
  @media (max-width: 800px) {
    display: block;
    padding: 20px 0;
    font-size: 32px;
  }
  &:hover {
    cursor: pointer;
    background: -webkit-linear-gradient(left top, #ff0082 0%, #e60ce8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const RouterLink = styled(RL)`
  margin-left: 20px;
  text-transform: capitalize;
  text-align: center;
  color: ${({ color }) => color};
  background: ${({ active }) =>
    active
      ? "-webkit-linear-gradient(left top, #ff0082 0%, #e60ce8 100%)"
      : "none"};
  -webkit-background-clip: ${({ active }) => (active ? "text" : "none")};
  -webkit-text-fill-color: ${({ active }) => (active ? "transparent" : "none")};
  text-decoration: none;
  font-weight: 900;
  @media (max-width: 800px) {
    display: block;
    padding: 20px 0;
    font-size: 32px;
  }
  &:hover {
    cursor: pointer;
    background: -webkit-linear-gradient(left top, #ff0082 0%, #e60ce8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
