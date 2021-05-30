import React, { memo, useRef } from "react";

// Style

import "./ColorRadioButtons.css";

const ColorRadioButtons = memo(({ setDefaultColor, id, hex, isDefault }) => {
  // useRef

  const refRadio = useRef(null);

  // handles

  const handleChange = () => {
    changeClassLabel();
    setDefaultColor(parseInt(refRadio.current.id), hex, true);
  };

  // functions

  const changeClassLabel = () => {
    const anotherLabels =
      refRadio.current.parentElement.parentElement.querySelectorAll(
        "label.content-color"
      );
    const label = refRadio.current.parentElement.children[1];
    anotherLabels.forEach((label) => {
      label.classList.remove("active");
    });
    label.classList.add("active");
  };

  return (
    <div className="content-input">
      <input
        type="radio"
        name="color"
        id={id}
        defaultChecked={isDefault}
        ref={refRadio}
        onClick={handleChange}
      />
      <label
        className={"content-color " + (isDefault && "active")}
        htmlFor={id}
      >
        <div className="color">
          <span className="small" style={{ background: hex }}></span>
        </div>
      </label>
    </div>
  );
});

export default ColorRadioButtons;
