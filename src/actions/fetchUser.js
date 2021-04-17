export const fetchUser = () => {
    return (dispatch) => {
        fetch('http://localhost:8000/api/v1/users')
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_USER', user: data })
        })
    }
}