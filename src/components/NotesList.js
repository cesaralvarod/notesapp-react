import React from "react";

// Components

import NoteItem from "./NoteItem";

// Styles

import "./NotesList.css";

function NotesList() {
  const dataNote = {
    title: "HOla mundo",
    content: "sjaksdjaks skjdaks dkajshdka jdisand",
    color: "#f7e2a8",
  };

  return (
    <ul className="notes-list">
      <NoteItem data={dataNote} />
    </ul>
  );
}

export default NotesList;
