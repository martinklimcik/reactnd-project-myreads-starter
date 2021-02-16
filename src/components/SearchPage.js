import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookGrid from "./BookGrid";

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

const SearchResults = (props) => {
  return (
    <div className="search-books-results">
      <BookGrid books={props.books} />
    </div>
  );
};

class SearchPage extends React.Component {
  state = { searchQuery: "", foundBooks: [] };

  handleInput = (event) => {
    // TODO: make sure deleting input deletes all found - query arrives later and overwrites setState after first if
    const query = event.target.value.trim();
    this.setState({
      searchQuery: query,
    });
    if (query === "") {
      this.setState({ foundBooks: [] });
    } else {
      BooksAPI.search(query).then((data) => {
        if (Array.isArray(data)) {
          this.setState({ foundBooks: data });
        } else {
          this.setState({ foundBooks: [] });
        }
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <SearchInput searchQuery={this.state.searchQuery} />
        <SearchResults books={this.state.foundBooks} />
      </div>
    );
  }
}

export default SearchPage;
