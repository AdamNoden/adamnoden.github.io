import React from "react";
import { HashRouter } from "react-router-dom";
import { PageSwitch } from "./components";
import "./index.css";

const App: React.FC = () => {
  return (
    <HashRouter>
      <PageSwitch />
    </HashRouter>
  );
};

export default App;
