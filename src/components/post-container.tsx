import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postRegistry } from "../posts";
import { PostRenderer } from "./post-renderer";

const Root = styled.div``;

export const PostContainer: React.FC = () => {
  const params = useParams();
  const path = params.postPath || "no-path";
  const postData = postRegistry.find((item) => item.path === path);

  if (!postData) {
    return <div>No post at this path</div>;
  }
  return (
    <Root>
      <PostRenderer rawMarkdown={postData.markdown} />
    </Root>
  );
};
