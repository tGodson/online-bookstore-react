export const deleteNote = (noteId) => {

    return (dispatch) => {
        fetch(`http://localhost:8000/api/v1/notes/${noteId}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'DELETE_NOTE', note: data })
        })
    }

}