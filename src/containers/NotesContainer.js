import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notes from '../components/notes/Notes';
import NoteInput from '../components/notes/NoteInput';

import { addNote } from '../actions/addNote';
import { deleteNote } from '../actions/deleteNote';


class NotesContainer extends Component {

    render() {
        return (
        <div>
            <br />
            <Notes book={this.props.book} notes={this.props.user.userNotes} deleteNote={this.props.deleteNote} />
            <br />                    
            <NoteInput userId={this.props.user.id} bookId={this.props.book.id} addNote={this.props.addNote} />
        </div>
        )
    }

}

const mapDispatch = dispatch => {
    return { 
        addNote: (note) => dispatch(addNote(note)),
        deleteNote: (id) => dispatch(deleteNote(id)),
    }
}


export default connect(null, mapDispatch)(NotesContainer);