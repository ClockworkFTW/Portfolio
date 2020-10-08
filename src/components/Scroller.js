import styled, { keyframes } from "styled-components";

const scroll = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-50%, 46px);
    }
`;

const Scroller = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 70px;
  box-shadow: inset 0 0 0 1px #45aaf2;
  border-radius: 25px;
  &::before {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 8px;
    height: 8px;
    background: #45aaf2;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${scroll};
  }
`;

export default Scroller;
