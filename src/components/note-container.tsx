import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { registry } from "../notes";
import { NoteRenderer } from "./note-renderer";

const Root = styled.div``;

export const NoteContainer: React.FC = () => {
  const params = useParams();
  const path = params.notePath || "no-path";
  const noteData = registry.find((item) => item.path === path);

  if (!noteData) {
    return <div>No notes at this path</div>;
  }
  return (
    <Root>
      <NoteRenderer rawMarkdown={noteData.markdown} />
    </Root>
  );
};
