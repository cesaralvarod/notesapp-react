import React, {
  useCallback,
  useContext,
  memo,
  useState,
  useRef,
  useEffect,
} from "react";
import { Redirect, useLocation } from "react-router";

// Components

import ColorRadioButtons from "./ColorRadioButtons";

//Context

import NotesContext from "../../helpers/NotesContext";

// Styles

import "./NoteForm.css";

const NoteForm = memo(() => {
  // useLocation

  const { pathname, search } = useLocation();

  // useRef

  const titleInput = useRef(null);
  const contentTextarea = useRef(null);

  // useContext

  const { arrNotes, colorsNotes, dpArrNotes } = useContext(NotesContext);

  // useState

  const [color, setColor] = useState({
    id: arrNotes.defaultColor,
    hex: colorsNotes[arrNotes.defaultColor],
    isDefault: true,
  });
  const [redirect, setRedirect] = useState(false);
  const [noteEdit, setNoteEdit] = useState(null);

  // useEffect

  useEffect(() => {
    titleInput.current.focus();
    if (pathname === "/edit" && search !== "") {
      const query = new URLSearchParams(search);
      const id = parseInt(query.get("id"));
      let noteEdit;
      arrNotes.data.forEach((note) => {
        if (id === note.id) {
          noteEdit = note;
        }
      });
      setNoteEdit(noteEdit);
      titleInput.current.value = noteEdit.title;
      contentTextarea.current.innerText = noteEdit.content;
    }
  }, []);

  // useCallback

  const cbDefaultColor = useCallback(
    (id, hex, isDefault) => {
      dpArrNotes({ type: "SET_DEFAULT_COLOR", payload: id });
      setColor({ id, hex, isDefault });
    },
    [dpArrNotes, setColor]
  );

  // handles

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value.trim();
    const content = contentTextarea.current.value.trim();
    if (title.length > 0 || content.length > 0) {
      if (!noteEdit) {
        dpArrNotes({
          type: "ADD_NOTE",
          payload: { id: Date.now(), title, content, color },
        });
      } else {
        dpArrNotes({
          type: "EDIT_NOTE",
          payload: { ...noteEdit, title, content, color },
        });
      }
      setRedirect(true);
    }
  };

  // renderRadioColors

  const renderRadioColors = colorsNotes.map((color, id) => (
    <ColorRadioButtons
      key={id}
      id={id}
      hex={color}
      isDefault={id === arrNotes.defaultColor}
      setDefaultColor={cbDefaultColor}
    />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div className="select-color">{renderRadioColors}</div>
      <input
        type="text"
        className="form-item"
        placeholder="Title"
        autoComplete="off"
        ref={titleInput}
      />
      <textarea
        className="form-item"
        placeholder="Add text"
        autoComplete="off"
        ref={contentTextarea}
      ></textarea>
      <div className="buttons">
        {noteEdit ? <ButtonForm text="Edit" /> : <ButtonForm text="Add" />}
        {redirect && <Redirect to="/" />}
      </div>
    </form>
  );
});

const ButtonForm = ({ text }) => {
  return <button className="button-success">{text}</button>;
};

export default NoteForm;
