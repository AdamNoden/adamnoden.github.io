import Markdown from "markdown-to-jsx";
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  padding: 20px;
  h1 {
    margin-top: 60px;
    font-size: 35px;
  }
  h2 {
    margin-top: 50px;
  }
`;
const Filter = styled.input`
  margin-right: 10px;
  margin-left: 20px;
`;

const HeaderPanel = styled.div`
  @media print {
    * {
      display: none;
    }
  }
`;

interface Props {
  rawMarkdown: string;
  showFilter: boolean;
}

export const NoteRenderer: React.FC<Props> = ({ rawMarkdown, showFilter }) => {
  const [noteMarkdown, setNoteMarkdown] = useState("");
  const [filter, setFilter] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    fetch(rawMarkdown)
      .then((response) => response.text())
      .then((text) => {
        setNoteMarkdown(text);
      });
  }, []);

  const markdown = useMemo(() => {
    if (!filter || !showFilter) {
      return noteMarkdown;
    }

    const split = noteMarkdown.split(/\r?\n/);
    const filtered = split.filter((line) =>
      line.toLowerCase().includes(filter.toLowerCase())
    );
    const joined = filtered.join("\n");

    return joined;
  }, [filter, noteMarkdown, showFilter]);

  return (
    <Root>
      <HeaderPanel>
        <NavLink to="/notes"> &#8592; notes</NavLink>
        {showFilter && (
          <Filter
            type="text"
            placeholder="filter text"
            value={filter}
            onChange={handleChange}
          />
        )}
      </HeaderPanel>
      <Markdown
        options={{
          wrapper: "article",
        }}
      >
        {markdown}
      </Markdown>
    </Root>
  );
};
