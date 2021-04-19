export const fetchUser = () => dispatch => {
  fetch('https://online-bookstore-rails.herokuapp.com/api/v1/users')
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: 'ADD_USER', user: data });
    });
};
