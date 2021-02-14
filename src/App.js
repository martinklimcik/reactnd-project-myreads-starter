import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage";

// TODO: PropTypes
// TODO: URL navigation

class BooksApp extends React.Component {
  state = {
    bookList: [],
    showSearchPage: false,
  };
  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      console.log(result);
      this.setState({
        bookList: result,
      });
    });
  }

  // TODO: Use Routes instead of this
  switchView = () => {
    this.setState((prevState) => {
      return { showSearchPage: !prevState.showSearchPage };
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage switchView={this.switchView} />
        ) : (
          <MainPage
            bookList={this.state.bookList}
            switchView={this.switchView}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
