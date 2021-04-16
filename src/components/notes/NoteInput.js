import React, { Component } from 'react';

class NoteInput extends Component {
  
  state = {
    content: '',
  }

  handleOnChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    let obj = {
      content: this.state.content,
      user_id: this.props.userId,
      book_id: this.props.bookId
    }

    this.props.addNote(obj);

    this.setState({
      content: '',
    });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <textarea
            className="form-control"
            rows="4"
            placeholder="What are your thoughts?..."
            value={this.state.content}
            onChange={this.handleOnChange} />
            <br />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    );
  }
};

export default NoteInput;