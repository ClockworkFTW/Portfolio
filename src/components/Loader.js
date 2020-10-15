import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  const { pending } = useSelector((state) => state.statistics);
  return pending ? (
    <Wrapper>
      <Container>
        <ActiveDot />
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </Container>
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 142px;
  height: 40px;
  background: white;
  filter: contrast(20);
`;

const activeDot = keyframes`
    50% {
        transform: translateX(96px)
    }  
`;

const ActiveDot = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;
  filter: blur(4px);
  background: #000;
  border-radius: 50%;
  transform: translateX(0);
  animation: ${activeDot} 2.8s infinite;
`;

const dots = keyframes`
    50% {
        transform: translateX(-31px)
    }  
`;

const Dots = styled.div`
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: ${dots} 2.8s infinite;
`;

const Dot = styled.span`
  display: block;
  float: left;
  width: 16px;
  height: 16px;
  margin-left: 16px;
  filter: blur(4px);
  background: #000;
  border-radius: 50%;
`;

export default Loader;
