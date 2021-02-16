import React from "react";
import Book from "./Book";

class BookGrid extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ol>
    );
  }
}

export default BookGrid;
