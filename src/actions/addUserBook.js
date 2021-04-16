export const addUserBook = (userBook) => {

    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify(userBook)
    }


    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/user_books/', obj)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_USER_BOOK', book: data })
        })
    }

}