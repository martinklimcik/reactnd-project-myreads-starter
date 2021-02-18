import React from "react";
import BookGrid from "./BookGrid";

// TODO: show clearly currently selected value
// TODO: smoother movement between shelves?
// TODO: empty shelf better showing
class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <BookGrid
            books={this.props.books}
            onBookChange={this.props.onBookChange}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;
