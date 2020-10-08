import React from "react";

import Home from "../components/Home";
import Introduction from "../components/Introduction";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";

import Section from "../components/Section";
import { Row } from "../components/Common";
import Scroller from "../components/Scroller";

const Portfolio = ({ stats }) => (
  <div>
    <Section>
      <>
        <Home />
        <Scroller />
      </>
    </Section>
    <Section background="#F7F7F8">
      <>
        <Row>
          <Introduction />
        </Row>
        <Row>
          <TechStack />
        </Row>
      </>
    </Section>
    <Section>
      <Projects />
    </Section>
  </div>
);

export default Portfolio;
