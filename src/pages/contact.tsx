import React from "react";
import styled from "styled-components";

const Root = styled.div``;

export const Contact: React.FC = () => {
  return (
    <Root>
      <h2>Contact</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/adam-noden/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/adamnoden"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </Root>
  );
};
