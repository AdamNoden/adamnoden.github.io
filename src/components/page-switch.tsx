import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Contact, Home } from "../pages";

const Root = styled.div`
  margin-top: 70px;
`;

export const PageSwitch: React.FC = () => {
  return (
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Root>
  );
};
