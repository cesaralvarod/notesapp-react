import React, { useRef } from "react";

// Styles

import "./ColorRadioButtons.css";

const ColorRadioButtons = ({ dataForm, setDataForm, color }) => {
  const refRadio = useRef(null);

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

  const handleChange = () => {
    changeClassLabel();
    setDataForm({ color: color });
  };

  return (
    <div className="content-input ">
      <input
        type="radio"
        name="color"
        ref={refRadio}
        id={color.id}
        onChange={handleChange}
        defaultChecked={color.default}
      />
      <label
        className={"content-color " + (color.default && "active")}
        htmlFor={color.id}
      >
        <div className="color">
          <span className="small" style={{ background: color.hex }}></span>
        </div>
      </label>
    </div>
  );
};

export default ColorRadioButtons;
