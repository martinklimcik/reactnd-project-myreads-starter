import React from "react";
import PropTypes from "prop-types";

class BookButton extends React.Component {
  getShelf = (value) => {
    return value === undefined ? "none" : value;
  };

  state = { selected: this.getShelf(this.props.selected) };

  handleShelfChange = (event) => {
    this.setState({ selected: this.getShelf(event.target.value) });
    this.props.onChange(event);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleShelfChange} value={this.state.selected}>
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

BookButton.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const Authors = (props) => {
  return (
    <div className="book-authors">
      {props.authors === undefined
        ? "Unknown author"
        : props.authors.map((author) => <div key={author}>{author}</div>)}
    </div>
  );
};

Authors.propTypes = {
  authors: PropTypes.array,
};

class Book extends React.Component {
  handleShelfChange = (event) => {
    this.props.onBookChange(this.props.book, event.target.value);
  };

  render() {
    let img = this.props.book.imageLinks;
    img =
      img != null && img.thumbnail != null ? `url("${img.thumbnail}")` : "none";
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: img,
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

Book.propTypes = {
  onBookChange: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default Book;
