import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

import { useOnScreen } from "../../hooks";
import { Header, Highlight } from "../Common";
import AboutProfile from "./AboutProfile";
import AboutSkills from "./AboutSkills";

export default ({ section }) => {
  const { about, technologies } = useSelector((state) => state.portfolio.data);

  const tRef = useRef();
  const tOnScreen = useOnScreen(tRef);
  const tControls = useAnimation();

  useEffect(() => {
    if (tOnScreen) tControls.start({ opacity: 1, y: 0 });
  }, [tOnScreen, tControls]);

  return (
    <Element name={section}>
      <Wrapper id={section}>
        <Container>
          <motion.div
            ref={tRef}
            initial={{ opacity: 0, y: 20 }}
            animate={tControls}
          >
            <Header>
              <Highlight>{section} Me.</Highlight>
            </Header>
            <Body>
              <Content>
                {about.map((a, i) => (
                  <Paragraph key={i}>{a.text}</Paragraph>
                ))}
              </Content>
              <AboutProfile />
            </Body>
            <AboutSkills technologies={technologies} />
          </motion.div>
        </Container>
      </Wrapper>
    </Element>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 80px 30px 120px 30px;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    display: inherit;
  }
`;

const Content = styled.div`
  max-width: calc(100% - 300px);
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.8;
  color: #1e202a;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;
