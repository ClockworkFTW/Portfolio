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
        <Icon icon={["fas", "angle-left"]} />
      </Button>
      <Date>{moment().add(offset, "month").format("MMM YYYY")}</Date>
      <Button onClick={() => dispatch(setOffset(offset + 1))}>
        <Icon icon={["fas", "angle-right"]} />
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
  margin: 0 6px;
  :nth-child(1) {
    margin: 0 6px 0 0;
  }
`;

const Date = styled.h1`
  margin: 0 10px;
  font-weight: 700;
`;

const Button = styled.button`
  padding: 4px 10px;
  outline: none;
  background: none;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  color: #111111;
  &:hover {
    cursor: pointer;
    background: #f7f7f8;
  }
`;

export default Controls;
