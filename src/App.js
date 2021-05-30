import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components

import TopBar from "./layouts/TopBar";

// Routes

import AppRoutes from "./routes/AppRoutes";

// Reducer

import ArrNotesReducer from "./helpers/ArrNotesReducer";

// Styles

import "./App.css";
import NotesContext from "./helpers/NotesContext";

const App = () => {
  const init = () => {
    return (
      JSON.parse(localStorage.getItem("notes")) || {
        data: [],
        lastSearch: { data: [], search: "" },
        defaultColor: 0,
      }
    );
  };

  const [arrNotes, dpArrNotes] = useReducer(ArrNotesReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(arrNotes));
  }, [arrNotes]);

  const colorsNotes = ["#f7e2a8", "#dbf7a8", "#a8f7df", "#bdd8ff"];

  return (
    <Router>
      <NotesContext.Provider value={{ arrNotes, dpArrNotes, colorsNotes }}>
        <TopBar />
        <div className="container">
          <AppRoutes />
        </div>
      </NotesContext.Provider>
    </Router>
  );
};

export default App;
