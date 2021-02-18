import React from "react";
import BookGrid from "./BookGrid";
import PropTypes from "prop-types";

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          {this.props.books.length === 0 ? (
            <p className="no-results">Shelf is empty</p>
          ) : (
            <BookGrid
              books={this.props.books}
              onBookChange={this.props.onBookChange}
            />
          )}
        </div>
      </div>
    );
  }
}
BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onBookChange: PropTypes.func.isRequired,
};
export default BookShelf;
