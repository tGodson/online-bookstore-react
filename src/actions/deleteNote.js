/* eslint-disable import/prefer-default-export */
export const deleteNote = noteId => dispatch => {
  fetch(`https://online-bookstore-rails.herokuapp.com/api/v1/notes/${noteId}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: 'DELETE_NOTE', note: data });
    });
};
