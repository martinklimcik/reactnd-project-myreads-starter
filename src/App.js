import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// TODO: PropTypes

class BooksApp extends React.Component {
  state = {
    bookList: [],
  };

  updateBooks = () => {
    BooksAPI.getAll().then((result) => {
      this.setState({
        bookList: result,
      });
    });
  };

  handleBookChange = (book, toShelf) => {
    BooksAPI.update(book, toShelf);
    this.updateBooks();
  };

  componentDidMount() {
    this.updateBooks();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <MainPage
                bookList={this.state.bookList}
                onBookChange={this.handleBookChange}
              />
            </Route>
            <Route path="/search">
              <SearchPage
                onBookChange={this.handleBookChange}
                bookList={this.state.bookList}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
