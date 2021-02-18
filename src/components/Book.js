import React from "react";

// TODO: currently selected value
class BookButton extends React.Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.props.onChange}
          value={
            this.props.selected === undefined ? "none" : this.props.selected
          }
        >
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

const Authors = (props) => {
  return (
    <div className="book-authors">
      {props.authors === undefined
        ? "Unknown author"
        : props.authors.map((author) => <div key={author}>{author}</div>)}
    </div>
  );
};

// TODO: show subtitle
// TODO additional info on hover
class Book extends React.Component {
  handleShelfChange = (event) => {
    this.props.onBookChange(this.props.book, event.target.value);
  };

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  this.props.book.imageLinks.thumbnail
                }")`,
              }}
            />
            <BookButton
              onChange={this.handleShelfChange}
              selected={this.props.book.shelf}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <Authors authors={this.props.book.authors} />
        </div>
      </li>
    );
  }
}

export default Book;
