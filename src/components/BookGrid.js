import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class BookGrid extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <Book
            book={book}
            key={book.id}
            onBookChange={this.props.onBookChange}
          />
        ))}
      </ol>
    );
  }
}

BookGrid.propTypes = {
  onBookChange: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookGrid;
