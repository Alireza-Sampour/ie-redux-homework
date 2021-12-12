const infos = (state = [], action) => {
  switch (action.type) {
    case "ADD_INFO":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          number: action.number,
          post: action.post,
          nationality: action.nationality,
        },
      ];

    case "DEL_INFO":
      let i = 1;
      return state.filter((info) => {
        if (info.id !== action.id) {
          info.id = i++;
          return info;
        }
      });

    case "EDIT_INFO":
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          if (action.edit === true) {
            state[i].isEditing = true;
          } else {
            state[i] = {
              id: action.id,
              name: action.name,
              number: action.number,
              post: action.post,
              nationality: action.nationality,
            };
          }
          break;
        }
      }
      return [...state];

    default:
      return state;
  }
};

export default infos;
