import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Navigation, PageSwitch } from "./components";

const Root = styled.div`
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Root>
        <Navigation />
        <PageSwitch />
      </Root>
    </BrowserRouter>
  );
};

export default App;
