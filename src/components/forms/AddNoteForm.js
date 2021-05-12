import React, { memo, useEffect, useState } from "react";

// Components

import ColorRadioButtons from "./ColorRadioButtons";

// Styles

import "./AddNoteForm.css";

const AddNoteForm = memo(({ colorsNotes }) => {
  const colors =
    colorsNotes !== null || colorsNotes.length === 0
      ? colorsNotes
      : ["#f7e2a8", "#dbf7a8", "#a8f7df", "#bdd8ff"];

  let dataColor, defaultColor;

  defaultColor = {
    id: 0,
    hex: colors[0],
  };

  const [dataForm, setDataForm] = useState({ color: defaultColor });

  const colorsRender = colors.map((color, i) => {
    dataColor = {
      id: i,
      hex: color,
    };
    return (
      <ColorRadioButtons
        key={i}
        dataColor={dataColor}
        defaultId={defaultColor.id}
        setDataForm={setDataForm}
        dataForm={dataForm}
      />
    );
  });

  return (
    <form>
      <div className="select-color">{colorsRender}</div>
      <input
        type="text"
        className="form-item"
        placeholder="Title"
        autoComplete="off"
      />
      <textarea
        cols="30"
        rows="10"
        className="form-item"
        placeholder="Add text"
        autoComplete="off"
      ></textarea>
      <div className="buttons">
        <button className="button-danger">Cancel</button>
        <button className="button-success">Add</button>
      </div>
    </form>
  );
});

export default AddNoteForm;
