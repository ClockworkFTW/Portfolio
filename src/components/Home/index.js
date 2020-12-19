import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

import { Highlight } from "../Common";
import Particles from "./Particles";
import Introduction from "./Introduction";

const cVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const tVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};

const Home = ({ section }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <Element name={section}>
      <Wrapper id={section}>
        <Particles color="#1E202A" />
        <Container animate={controls} initial="hidden" variants={cVariants}>
          <Name variants={tVariants}>
            John <Highlight>Nikolas</Highlight> Boyle.
          </Name>
          <Title variants={tVariants}>Software Developer.</Title>
          <motion.div variants={tVariants}>
            <Introduction />
          </motion.div>
          <Links variants={tVariants}>
            <Link>Linkedin</Link>
            <Link>Github</Link>
            <Link>Resume</Link>
          </Links>
        </Container>
      </Wrapper>
    </Element>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  position: relative;
  max-width: 950px;
  margin: 0 auto;
  padding: 30px;
  @media (max-width: 800px) {
    padding: 80px 30px;
    text-align: center;
  }
`;

const Name = styled(motion.h1)`
  margin-bottom: 10px;
  font-size: 4em;
  font-weight: 900;
  color: #ffffff;
`;

const Title = styled(motion.h2)`
  margin-bottom: 20px;
  font-size: 3em;
  font-weight: 900;
  color: #ffffff;
`;

const Links = styled(motion.div)`
  margin-top: 30px;
`;

const Link = styled.a`
  margin: 0 1em 1em 0;
  padding: 6px 12px;
  border: 3px solid #ffffff;
  border-radius: 1.125em;
  text-decoration: none;
  font-size: 1em;
  font-weight: 700;
  color: #ffffff;
  &:hover {
    background: #ffffff;
    color: #1e202a;
    cursor: pointer;
  }
`;

export default Home;
