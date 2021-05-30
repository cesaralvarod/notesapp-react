const ArrNotesReducer = (state, action) => {
  let { data, lastSearch, defaultColor } = state;
  switch (action.type) {
    case "ADD_NOTE":
      return {
        data: [...data, action.payload],
        lastSearch,
        defaultColor,
      };

    case "DELETE_NOTE":
      data = data.filter((note) => action.payload !== note.id);
      return {
        data: data,
        lastSearch,
        defaultColor,
      };

    case "EDIT_NOTE":
      data = data.map((note) =>
        action.payload.id === note.id ? action.payload : note
      );
      lastSearch.data = state.data.filter((note) => {
        if (
          note.title.includes(action.payload) ||
          note.content.includes(action.payload)
        ) {
          return note;
        }
      });
      return {
        data,
        lastSearch,
        defaultColor,
      };

    case "SEARCH_NOTE":
      lastSearch.data = data.filter((note) => {
        const title = note.title.toLowerCase();
        const content = note.content.toLowerCase();
        if (
          title.includes(action.payload) ||
          content.includes(action.payload)
        ) {
          return note;
        }
      });
      return {
        data,
        lastSearch: {
          data: lastSearch.data,
          search: action.payload,
        },
        defaultColor,
      };

    case "SET_DEFAULT_COLOR":
      return {
        data,
        lastSearch,
        defaultColor: action.payload,
      };

    default:
      throw Error("dispatch of arrNotes needs an type action");
  }
};

export default ArrNotesReducer;
