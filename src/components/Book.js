import React from "react";

// TODO: currently selected value
class BookButton extends React.Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select /*onChange={this.props.bookChanged}*/>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

// TODO: show subtitle
// TODO additional info on hover
class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`,
            }}
          />
          <BookButton /*bookChanged={this.props.book.bookChanged}*/ />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
