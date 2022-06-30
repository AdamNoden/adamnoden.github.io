import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { registry } from "../notes";
import { NoteRenderer } from "./note-renderer";

const Root = styled.div``;

export const NoteContainer: React.FC = () => {
  const params = useParams();
  const path = params.notePath || "no-path";
  const listedNotes = registry.filter((note) => note.listed);
  const noteData = listedNotes.find((item) => item.path === path);

  useEffect(() => {
    if (noteData) {
      document.title = noteData.title;
    }
  }, [noteData]);
  if (!noteData) {
    return (
      <div>
        No notes at this path. If there was one here it may have been removed
      </div>
    );
  }
  return (
    <Root>
      <NoteRenderer
        rawMarkdown={noteData.markdown}
        showFilter={noteData.showFilter}
      />
    </Root>
  );
};
