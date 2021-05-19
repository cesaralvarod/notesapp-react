import React, { useContext } from "react";

// Components

import NoteItem from "./NoteItem";

// Context

import NotesContext from "../helpers/NotesContext";

// Styles

import "./NotesList.css";

const NotesList = () => {
  const { arrNotes } = useContext(NotesContext);

  const notesRender =
    arrNotes.data.length > 0
      ? arrNotes.data.map((note) => {
          return <NoteItem key={note.id} data={note} />;
        })
      : null;

  return <ul className="notes-list">{notesRender}</ul>;
};

export default NotesList;
