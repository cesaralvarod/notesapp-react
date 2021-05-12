import React from "react";
import PropTypes from "prop-types";

// Styles

import "./NoteItem.css";

function NoteItem({ data }) {
  const cutContent = (content, number) => {
    const arrayContent = content.split(" ");
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

  let titleRender = cutContent(data.title, 10);
  let contentRender = cutContent(data.content, 30);
  let colorNote = data.color;

  return (
    <li className="note" style={{ background: colorNote }}>
      <h3>{titleRender}</h3>
      <p>{contentRender}</p>
    </li>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default NoteItem;
