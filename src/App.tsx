import React from "react";
import styled from "styled-components";

const Root = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const Temp = styled.h1`
  text-align: center;
  margin-top: 30%;
  font-weight: 100;
`;

const App: React.FC = () => {
  return (
    <Root>
      <Temp>Under construction</Temp>
    </Root>
  );
};

export default App;
