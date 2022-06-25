import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { registry } from "../notes";

const Root = styled.div``;

export const Notes: React.FC = () => {
  const links = useMemo(() => {
    const listedNotes = registry.filter((note) => note.listed);
    const notelinks = listedNotes.map(({ title, tags, path }) => {
      const tagDisplay = tags.length > 0 ? `Tags: [${tags.join(", ")}]` : "";
      return (
        <li key={path}>
          <Link to={`/notes/${path}`}>{title}</Link> &nbsp;- {tagDisplay}
        </li>
      );
    });

    return notelinks;
  }, []);

  return (
    <Root>
      <h2>Notes</h2>
      <ul>{links}</ul>
    </Root>
  );
};
