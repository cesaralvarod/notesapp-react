import React from "react";

// Styles

import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <h1>Notes App</h1>
      <input type="text" className="input-search" placeholder="Search a note" />
    </div>
  );
}

export default TopBar;
