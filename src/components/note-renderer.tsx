import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div``;

interface Props {
  rawMarkdown: string;
}
export const NoteRenderer: React.FC<Props> = ({ rawMarkdown }) => {
  const [noteMarkdown, setNoteMarkdown] = useState("");

  useEffect(() => {
    fetch(rawMarkdown)
      .then((response) => response.text())
      .then((text) => {
        setNoteMarkdown(text);
      });
  }, []);

  return (
    <Root>
      <Markdown>{noteMarkdown}</Markdown>
    </Root>
  );
};
