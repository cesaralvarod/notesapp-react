import React, { memo, useContext, useRef } from "react";
import NotesContext from "../helpers/NotesContext";

// Styles

import "./TopBar.css";

const TopBar = memo(() => {
  // useContext

  const { dpArrNotes } = useContext(NotesContext);

  // useRef

  const refSearch = useRef(null);

  // handle

  const handleInput = () => {
    const search = refSearch.current.value.trim().toLowerCase();

    dpArrNotes({ type: "SEARCH_NOTE", payload: search });
  };

  return (
    <div className="topbar">
      <h1>Notes App</h1>
      <input
        type="text"
        className="input-search"
        placeholder="Search a note"
        autoComplete="off"
        ref={refSearch}
        onInput={handleInput}
      />
    </div>
  );
});

export default TopBar;
