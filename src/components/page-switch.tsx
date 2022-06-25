import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Contact, Home, Posts } from "../pages";
import { PostContainer } from "./post-container";

const Root = styled.div`
  margin-top: 70px;
`;

export const PageSwitch: React.FC = () => {
  return (
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postPath" element={<PostContainer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Root>
  );
};
