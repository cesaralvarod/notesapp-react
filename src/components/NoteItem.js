import React, { useContext } from "react";
import PropTypes from "prop-types";

// Styles

import "./NoteItem.css";
import { Link } from "react-router-dom";
import NotesContext from "../helpers/NotesContext";

const NoteItem = ({ data }) => {
  let titleRender = cutContent(data.title, 10);
  let contentRender = cutContent(data.content, 30);
  let colorNote = data.color.hex;

  const { dpArrNotes } = useContext(NotesContext);

  const handleClick = (e) => {
    dpArrNotes({ type: "delete", payload: data.id });
  };

  return (
    <li className="note" style={{ background: colorNote }}>
      <Link to={`/edit?id=${data.id}`} className="link-edit">
        <h3>{titleRender}</h3>
        <p>{contentRender}</p>
      </Link>
      <button className="btn-delete" onClick={handleClick}>
        ×
      </button>
    </li>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const cutContent = (content, number) => {
  const arrayContent = content !== "" && content.split(" ");
  let shortContent = "";

  if (arrayContent.length > number) {
    arrayContent.forEach((word, i) => {
      if (i < number) {
        shortContent += word;
        if (i !== number - 1) {
          shortContent += " ";
        }
      }
    });
    shortContent += "...";
  } else {
    shortContent = content;
  }
  return shortContent;
};

export default NoteItem;
