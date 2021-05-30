import React, { useContext } from "react";

// Components

import NoteItem from "./NoteItem";

// Context

import NotesContext from "../helpers/NotesContext";

// Styles

import "./NotesList.css";

const NotesList = () => {
  // useContext

  const { arrNotes } = useContext(NotesContext);

  const notes =
    arrNotes.lastSearch.search !== ""
      ? arrNotes.lastSearch.data
      : arrNotes.data;

  // render

  const notesRender =
    notes.length > 0
      ? notes.map((note) => {
          return <NoteItem key={note.id} data={note} />;
        })
      : null;

  return <ul className="notes-list">{notesRender}</ul>;
};

export default NotesList;
