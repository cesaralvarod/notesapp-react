const ArrNotesReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        data: [...state.data, action.payload],
        defaultColor: state.defaultColor,
      };

    case "delete":
      state.data = state.data.filter((note) => action.payload !== note.id);
      return {
        data: state.data,
        defaultColor: state.defaultColor,
      };

    case "setDColor":
      return { data: state.data, defaultColor: action.payload };

    default:
      throw Error("dispatch of arrNotes needs an type action");
  }
};

export default ArrNotesReducer;
