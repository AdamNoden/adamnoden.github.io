import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { postRegistry } from "../posts";

const Root = styled.div``;

export const Posts: React.FC = () => {
  const postLinks = postRegistry.map(({ title, tags, path }) => {
    const tagDisplay = tags.length > 0 ? `Tags: [${tags.join(", ")}]` : "";
    return (
      <li key={path}>
        <Link to={`/posts/${path}`}>{title}</Link> &nbsp;- {tagDisplay}
      </li>
    );
  });

  return (
    <Root>
      <h2>Posts</h2>
      <ul>{postLinks}</ul>
    </Root>
  );
};
