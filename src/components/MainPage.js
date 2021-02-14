import React from "react";
import BookShelf from "./BookShelf";

class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              name="Currently Reading"
              books={this.props.bookList.filter(
                (book) => book.shelf === "currentlyReading"
              )}
            />
            <BookShelf
              name="Want to Read"
              books={this.props.bookList.filter(
                (book) => book.shelf === "wantToRead"
              )}
            />
            <BookShelf
              name="Read"
              books={this.props.bookList.filter(
                (book) => book.shelf === "read"
              )}
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={this.props.switchView}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default MainPage;
