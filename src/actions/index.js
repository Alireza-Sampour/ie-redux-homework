let counter = 1;

export const addInfo = (name, number, post, nationality) => {
  return {
    type: "ADD_INFO",
    id: counter++,
    name,
    number,
    post,
    nationality,
  };
};

export const delInfo = (id) => {
  counter--;
  return {
    type: "DEL_INFO",
    id,
  };
};

export const editInfo = (id, name, number, post, nationality, edit) => {
  return {
    type: "EDIT_INFO",
    id,
    name,
    number,
    post,
    nationality,
    edit,
  };
};
