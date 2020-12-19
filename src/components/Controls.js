import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

import { setOffset } from "../reducers/offset";

import { Icon } from "./Common";

const Controls = () => {
  const dispatch = useDispatch();
  const { offset } = useSelector((state) => state);

  return (
    <Container>
      <Button onClick={() => dispatch(setOffset(offset - 1))}>
        <Icon icon={["fal", "angle-left"]} />
      </Button>
      <Date>{moment().add(offset, "month").format("MMM YYYY")}</Date>
      <Button onClick={() => dispatch(setOffset(offset + 1))}>
        <Icon icon={["fal", "angle-right"]} />
      </Button>
    </Container>
  );
};

const Container = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  :nth-child(1) {
    margin: 0 6px 0 0;
  }
`;

const Date = styled.h1`
  margin: 0 10px;
  font-weight: 900;
  color: #ffffff;
`;

const Button = styled.button`
  padding: 4px 10px;
  outline: none;
  background: none;
  border: none;
  font-size: 20px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    color: #ff0082;
  }
`;

export default Controls;
