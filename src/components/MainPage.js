import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const MyReadsHeader = () => {
  return (
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
  );
};

const SearchPageButton = () => {
  return (
    <Link to="/search">
      <div className="open-search">
        <button>Add a book</button>
      </div>
    </Link>
  );
};

class MainPage extends React.Component {
  filterBooks = (shelf) => {
    return this.props.bookList.filter((book) => book.shelf === shelf);
  };

  render() {
    return (
      <div className="list-books">
        <MyReadsHeader />
        <div className="list-books-content">
          <div>
            <BookShelf
              name="Currently Reading"
              books={this.filterBooks("currentlyReading")}
              onBookChange={this.props.onBookChange}
            />
            <BookShelf
              name="Want to Read"
              books={this.filterBooks("wantToRead")}
              onBookChange={this.props.onBookChange}
            />
            <BookShelf
              name="Read"
              books={this.filterBooks("read")}
              onBookChange={this.props.onBookChange}
            />
          </div>
        </div>
        <SearchPageButton />
      </div>
    );
  }
}

MainPage.propTypes = {
  bookList: PropTypes.array.isRequired,
  onBookChange: PropTypes.func.isRequired,
};
export default MainPage;
