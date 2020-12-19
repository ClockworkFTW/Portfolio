import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

import { useOnScreen } from "../../hooks";

import ProjectPreview from "./ProjectPreview";
import ProjectContent from "./ProjectContent";

export default ({ project, index }) => {
  const cRef = useRef();
  const tOnScreen = useOnScreen(cRef);
  const cControls = useAnimation();

  useEffect(() => {
    if (tOnScreen) cControls.start({ opacity: 1, y: 0 });
  }, [tOnScreen, cControls]);

  return (
    <motion.div ref={cRef} initial={{ opacity: 0, y: 20 }} animate={cControls}>
      <Card index={index}>
        <ProjectPreview preview={project.preview} />
        <ProjectContent project={project} />
      </Card>
    </motion.div>
  );
};

const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ index }) => (index % 2 ? "row" : "row-reverse")};
  margin-bottom: 120px;
  @media (max-width: 800px) {
    display: inherit;
  }
`;
