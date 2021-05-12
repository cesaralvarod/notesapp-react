import React, { useRef } from "react";

// Styles

import "./ColorRadioButtons.css";

const ColorRadioButtons = ({ dataColor, defaultId, dataForm, setDataForm }) => {
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
    setDataForm({ color: dataColor });
  };

  return (
    <div className="content-input ">
      <input
        type="radio"
        name="color"
        ref={refRadio}
        id={dataColor.id}
        value={dataColor.hex}
        onChange={handleChange}
        defaultChecked={defaultId === dataColor.id ? true : false}
      />
      <label
        className={
          "content-color " + (defaultId === dataColor.id ? "active" : "")
        }
        htmlFor={dataColor.id}
      >
        <div className="color">
          <span className="small" style={{ background: dataColor.hex }}></span>
        </div>
      </label>
    </div>
  );
};

export default ColorRadioButtons;
