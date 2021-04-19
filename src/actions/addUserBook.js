/* eslint-disable import/prefer-default-export */
export const addUserBook = userBook => {
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userBook),
  };

  return dispatch => {
    fetch('https://online-bookstore-rails.herokuapp.com/api/v1/user_books/', obj)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'ADD_USER_BOOK', book: data });
      });
  };
};
