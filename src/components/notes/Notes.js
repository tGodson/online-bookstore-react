import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {

    renderNotes() {
        let filteredNotes = this.props.notes.filter(n => n.book_id === this.props.book.id)
        
        return (
            filteredNotes.map(note => <Note key={note.id} note={note} bookTitle={this.props.book.title} deleteNote={this.props.deleteNote} />)
        )
    }

    render() {
        return(
        <div className="container">            
            <h4>Notes</h4>            
            {this.renderNotes()}
        </div>
        );
    }
};

export default Notes;