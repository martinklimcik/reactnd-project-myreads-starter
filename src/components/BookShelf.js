import React from "react";
import BookGrid from "./BookGrid";

// TODO: currently selected value
class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <BookGrid books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default BookShelf;
