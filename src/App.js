import { Counter } from "./Components/Counter";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    font-family: sans-serif;
    background-color: lightblue;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
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
