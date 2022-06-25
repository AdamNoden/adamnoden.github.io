import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div``;

interface Props {
  rawMarkdown: string;
}
export const PostRenderer: React.FC<Props> = ({ rawMarkdown }) => {
  const [postMarkdown, setPostMarkdown] = useState("");

  useEffect(() => {
    fetch(rawMarkdown)
      .then((response) => response.text())
      .then((text) => {
        setPostMarkdown(text);
      });
  }, []);

  return (
    <Root>
      <Markdown>{postMarkdown}</Markdown>
    </Root>
  );
};
