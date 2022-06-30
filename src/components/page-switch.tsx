import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Notes } from "../pages";
import { NoteContainer } from "./note-container";

export const PageSwitch: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:notePath" element={<NoteContainer />} />
    </Routes>
  );
};
