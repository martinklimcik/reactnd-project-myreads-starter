import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookGrid from "./BookGrid";
import PropTypes from "prop-types";

const SearchInput = (props) => {
  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={props.searchQuery}
          onChange={props.handleInput}
        />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

const SearchResults = (props) => {
  return (
    <div className="search-books-results">
      {props.foundBooks === undefined || props.foundBooks.length === 0 ? (
        <p className="no-results">No results found</p>
      ) : (
        <BookGrid books={props.foundBooks} onBookChange={props.onBookChange} />
      )}
    </div>
  );
};

SearchResults.propTypes = {
  foundBooks: PropTypes.array,
  onBookChange: PropTypes.func.isRequired,
};

class SearchPage extends React.Component {
  state = { searchQuery: "", foundBooks: [], clear: false };
  updateResults = (newResults) => {
    this.setState({
      foundBooks: newResults,
    });
  };

  handleInput = (event) => {
    const query = event.target.value.trim();
    this.setState({
      searchQuery: event.target.value,
      clear: query === "",
    });
    // for searching purposes, white space at the beginning and end of input is ignored
    if (query === "") {
      this.updateResults([]);
    } else {
      BooksAPI.search(query).then((data) => {
        // this ensures that upon deletion of query, the result isn't overwritten by previous query
        if (this.state.clear) {
          return;
        }
        // successful search results in array of books
        if (Array.isArray(data)) {
          this.updateResults(data);
        } else {
          // unsuccessful search resulted in object with error status
          this.updateResults([]);
        }
      });
    }
  };

  compareWithBookShelves = (searchResults) => {
    // find out which books returned by search are already on a bookshelves and update their info so that dropdown preselection matches
    return searchResults.map((resultBook) => {
      const containedBook = this.props.bookList.find(
        (myBook) => myBook.id === resultBook.id
      );
      return containedBook === undefined ? resultBook : containedBook;
    });
  };

  render() {
    return (
      <div className="search-books">
        <SearchInput
          searchQuery={this.state.searchQuery}
          handleInput={this.handleInput}
        />
        <SearchResults
          foundBooks={this.compareWithBookShelves(this.state.foundBooks)}
          onBookChange={this.props.onBookChange}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  bookList: PropTypes.array.isRequired,
  onBookChange: PropTypes.func.isRequired,
};

export default SearchPage;
