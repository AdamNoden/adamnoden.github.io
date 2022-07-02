import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { registry } from "../notes";

const Root = styled.div`
  padding: 20px;
`;

const Filter = styled.input`
  margin-right: 10px;
`;

const NoteList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 25px;
`;
const NoteListItem = styled.li`
  margin-bottom: 7px;
`;
export const Notes: React.FC = () => {
  const [titleFilter, setTitlefilter] = useState("");
  const [tagFilter, setTagfilter] = useState("");

  useEffect(() => {
    document.title = "Notes";
  }, []);

  const links = useMemo(() => {
    const listedNotes = registry.filter((note) => note.listed);

    const titleFilteredList = listedNotes.filter(({ title }) => {
      if (!titleFilter) {
        return true;
      }

      return title.toLowerCase().includes(titleFilter.toLowerCase());
    });

    const tagFilteredList = titleFilteredList.filter(({ tags }) => {
      if (!tagFilter) {
        return true;
      }
      if (tags.length === 0) {
        return false;
      }

      return tags.some((tag) =>
        tag.toLowerCase().includes(tagFilter.toLowerCase())
      );
    });

    const sortedList = tagFilteredList.sort((a, b) => {
      const textA = a.title.toUpperCase();
      const textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    const notelinks = sortedList.map(({ title, path }) => {
      // const tagDisplay = tags.length > 0 ? `Tags: [${tags.join(", ")}]` : "";
      return (
        <NoteListItem key={path}>
          {/* <Link to={`/notes/${path}`}>{title}</Link> &nbsp;- {tagDisplay} */}
          <Link to={`/notes/${path}`}>{title}</Link>
        </NoteListItem>
      );
    });

    return notelinks;
  }, [tagFilter, titleFilter]);

  const handleTitleFilterInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitlefilter(e.target.value);
  };

  const handleTagFilterInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTagfilter(e.target.value);
  };
  return (
    <Root>
      <div style={{ marginBottom: "60px" }}>
        <NavLink to="/"> &#8592; home</NavLink>
      </div>
      <h2>Notes</h2>

      {links.length > 20 && (
        <>
          <Filter
            type="text"
            placeholder="filter on title"
            value={titleFilter}
            onChange={handleTitleFilterInputChange}
          />
          <Filter
            type="text"
            placeholder="filter on tags"
            value={tagFilter}
            onChange={handleTagFilterInputChange}
          />
        </>
      )}

      <NoteList>{links}</NoteList>
    </Root>
  );
};
