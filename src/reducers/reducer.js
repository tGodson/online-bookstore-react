import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  books: manageBooks,
  user: manageUser,
});
 
export default rootReducer;


function manageBooks(state = [], action) {
    switch (action.type) {
      case 'ADD_ALL_BOOKS':

        return action.books

      default:
        return state;
    }
};

function manageUser(state = {username: "", id: 0, userBooks: [], userNotes: []}, action) {
 
  switch (action.type) {
    case 'ADD_USER':

      return {...state, username: action.user.username, id: action.user.id, userBooks: action.user.books, userNotes: action.user.notes }

    case 'REMOVE_USER_BOOK':

      return {
        ...state,
        userNotes: state.userNotes,
        userBooks: state.userBooks.filter(b => b.id !== action.book.id)
      }         

    case 'ADD_USER_BOOK':
          
      return {
        ...state,
        userNotes: state.userNotes,
        userBooks: state.userBooks.concat(action.book)
      } 

    case 'ADD_NOTE':
    
      return {
        ...state,
        userBooks: state.userBooks,
        userNotes: state.userNotes.concat(action.note)
      }
      
    case 'DELETE_NOTE':

      return {
        ...state,
        userBooks: state.userBooks,
        userNotes: state.userNotes.filter(n => n.id !== action.note.id)
      }
      

    default:
      return state;
  }
};
