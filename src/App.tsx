import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PageSwitch } from "./components";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageSwitch />
    </BrowserRouter>
  );
};

export default App;
