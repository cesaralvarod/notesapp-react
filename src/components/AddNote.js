import React from "react";

// Components

import AddNoteForm from "./forms/AddNoteForm";

const AddNote = ({ colorsNotes }) => {
  return (
    <div className="section">
      <button className="d-block button-success">Add note</button>
      <AddNoteForm colorsNotes={colorsNotes} />
    </div>
  );
};

export default AddNote;
