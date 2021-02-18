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
        "no Books match filter criteria"
      ) : (
        <BookGrid books={props.foundBooks} onBookChange={props.onBookChange} />
      )}
    </div>
  );
};

class SearchPage extends React.Component {
  state = { searchQuery: "", foundBooks: [] };

  updateResults = (newResults) => {
    newResults = newResults.map((resultBook) => {
      const containedBook = this.props.bookList.find(
        (myBook) => myBook.id === resultBook.id
      );
      return containedBook === undefined ? resultBook : containedBook;
    });

    this.setState({
      foundBooks: newResults,
    });
  };

  handleInput = (event) => {
    // TODO: make sure deleting input deletes all found - query arrives later and overwrites setState after first if
    const query = event.target.value.trim();
    this.setState({
      searchQuery: query,
    });
    if (query === "") {
      this.updateResults([]);
    } else {
      BooksAPI.search(query).then((data) => {
        if (Array.isArray(data)) {
          this.updateResults(data);
        } else {
          this.updateResults([]);
        }
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <SearchInput
          searchQuery={this.state.searchQuery}
          handleInput={this.handleInput}
        />
        <SearchResults
          foundBooks={this.state.foundBooks}
          onBookChange={this.props.onBookChange}
        />
      </div>
    );
  }
}

export default SearchPage;
