import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

import { setOffset } from "../reducers/offset";

const Controls = () => {
  const dispatch = useDispatch();
  const { offset } = useSelector((state) => state);

  return (
    <Container>
      <Button onClick={() => dispatch(setOffset(offset - 1))}>prev</Button>
      <Date>{moment().add(offset, "month").format("MMM YYYY")}</Date>
      <Button onClick={() => dispatch(setOffset(offset + 1))}>next</Button>
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
`;

const Button = styled.button``;

export default Controls;
