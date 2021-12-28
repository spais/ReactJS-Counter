import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: block;
  width: 100%;
  margin: 0 0 0 -4px;
  font-size: 220px;
  line-height: 1;
  color: #6d7a8b;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;
const Button = styled.button`
  display: inline-block;
  height: 24px;
  width: 24px;
  margin-right: 6px;
  padding: 8px;
  font-size: 24px;
  line-height: 1;
  color: white;
  box-sizing: content-box;
  background-color: lightcoral;
  border: 1px solid coral;
  border-radius: 3px;
`;

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementLimit = 5;
  const decrementLimit = -5;

  return (
    <>
      <Title>
        <span>{count}</span>
      </Title>
      <ButtonContainer>
        <Button
          onClick={() => setCount(count + 1)}
          disabled={count >= incrementLimit ? true : false}
          style={{ opacity: count >= incrementLimit ? "0.5" : "1" }}
        >
          &#43;
        </Button>
        <Button
          onClick={() => setCount(count - 1)}
          disabled={count <= decrementLimit ? true : false}
          style={{ opacity: count <= decrementLimit ? "0.5" : "1" }}
        >
          &#8722;
        </Button>
      </ButtonContainer>
    </>
  );
};
