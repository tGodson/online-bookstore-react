/* eslint-disable import/prefer-default-export */
export const signinUser = userInput => {
  const user = {
    username: userInput,
  };

  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  };

  return dispatch => {
    fetch('https://online-bookstore-rails.herokuapp.com/api/v1/users/', obj)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'ADD_USER', user: data });
      });
  };
};
