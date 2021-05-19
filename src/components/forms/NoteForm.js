import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { Redirect } from "react-router";

// Components

import ColorRadioButtons from "./ColorRadioButtons";

// Context

import NotesContext from "../../helpers/NotesContext";

// Styles

import "./NoteForm.css";

const NoteForm = memo(() => {
  const { arrNotes, colorsNotes, dpArrNotes } = useContext(NotesContext);

  const colors =
    !colorsNotes || colorsNotes.length === 0
      ? colorsNotes
      : ["#f7e2a8", "#dbf7a8", "#a8f7df", "#bdd8ff"];

  const [redirect, setRedirect] = useState(false);

  const inputTitle = useRef(null),
    textareaContent = useRef(null);

  const defaultId = arrNotes.defaultColor;

  const [dataColor, setDataColor] = useState({
    color: { id: defaultId, hex: colors[defaultId], default: true },
  });

  useEffect(() => {
    inputTitle.current.focus();
  }, []);

  useEffect(() => {
    dpArrNotes({ type: "setDColor", payload: dataColor.color.id });
  }, [dataColor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputTitle.current.value.trim(),
      content = textareaContent.current.value.trim();
    if (title !== "" || content !== "") {
      dpArrNotes({
        type: "add",
        payload: {
          id: Date.now(),
          title: title,
          content: content,
          color: dataColor.color,
        },
      });
      setRedirect(true);
      e.target.reset();
    }
  };

  let arrColor;

  const colorsRender = colors.map((color, i) => {
    arrColor = {
      id: i,
      hex: color,
      default: i === defaultId,
    };
    return (
      <ColorRadioButtons
        key={i}
        setDataForm={setDataColor}
        dataForm={dataColor}
        color={arrColor}
      />
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="select-color">{colorsRender}</div>
      <input
        type="text"
        className="form-item"
        placeholder="Title"
        autoComplete="off"
        ref={inputTitle}
      />
      <textarea
        className="form-item"
        placeholder="Add text"
        autoComplete="off"
        ref={textareaContent}
      ></textarea>
      <div className="buttons">
        <button className="button-success">Add</button>
        {redirect && <Redirect to="/" />}
      </div>
    </form>
  );
});

export default NoteForm;
