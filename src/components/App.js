import React from "react";

// Components

import TopBar from "./layouts/TopBar";
import AddNote from "./AddNote";
import NotesList from "./NotesList";

// Styles

import "./App.css";

function App() {
  const colorsNotes = ["#f7e2a8", "#dbf7a8", "#a8f7df", "#bdd8ff"];

  return (
    <>
      <TopBar />
      <div className="container">
        <AddNote colorsNotes={colorsNotes} />
        <NotesList />
      </div>
    </>
  );
}

export default App;
