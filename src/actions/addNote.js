export const addNote = noteInput => {
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(noteInput),
  };

  return dispatch => {
    fetch('https://online-bookstore-rails.herokuapp.com/api/v1/notes/', obj)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'ADD_NOTE', note: data });
      });
  };
};
