import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  const { pending } = useSelector((state) => state.statistics);
  return pending ? (
    <Wrapper>
      <Container>
        <Name>JNB</Name>
        <LineOne />
        <LineTwo />
        <LineThree />
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
  background: #1e1f24;
`;

const Container = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  perspective: 800px;
`;

const rotate_one = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

const rotate_two = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;

const rotate_three = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;

const Name = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  letter-spacing: 4px;
  color: #ffffff;
`;

const LineOne = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0%;
  top: 0%;
  animation: ${rotate_one} 1s linear infinite;
  border-bottom: 3px solid #ffffff;
  opacity: 0.5;
`;

const LineTwo = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  top: 0%;
  animation: ${rotate_two} 1s linear infinite;
  border-right: 3px solid #ffffff;
  opacity: 0.5;
`;

const LineThree = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  bottom: 0%;
  animation: ${rotate_three} 1s linear infinite;
  border-top: 3px solid #ffffff;
  opacity: 0.5;
`;

export default Loader;
