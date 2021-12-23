import { Counter } from "./Components/Counter";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  background-color: lightblue;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Counter />
      </Wrapper>
    </>
  );
}
