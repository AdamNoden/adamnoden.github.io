import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Contact, Home, Notes } from "../pages";
import { NoteContainer } from "./note-container";

const Root = styled.div`
  margin-top: 70px;
`;

export const PageSwitch: React.FC = () => {
  return (
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:notePath" element={<NoteContainer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Root>
  );
};
