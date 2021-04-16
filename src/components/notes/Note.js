import React from 'react';

class Note extends React.Component {
    
    handleDeleteNote = (e) => {         
        this.props.deleteNote(this.props.note.id);
    }
    
    render() {
        return (
        <div>
        <div className="card">

            <div className="card-header">
                <div className="row">
                    <div className="col-9">
                        <small><i>{this.props.bookTitle} - {this.props.note.format_date}</i></small>
                    </div>
                    <div className="col">
                        <div className="text-right">
                            <button type="button" className="close" aria-label="Delete Note" onClick={this.handleDeleteNote} >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-body">
                {this.props.note.content}
            </div>

        </div>
        <br />
        </div>
        )
    }
}

export default Note