import React, { memo } from "react";

// Components

import NoteForm from "./forms/NoteForm";

const FormNoteContent = memo(() => {
  return (
    <div className="section">
      <NoteForm />
    </div>
  );
});

export default FormNoteContent;
