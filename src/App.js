import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    bookList: [],
  };

  updateBookList = () => {
    BooksAPI.getAll().then((result) => {
      this.setState({
        bookList: result,
      });
    });
  };

  handleBookChange = (book, toShelf) => {
    BooksAPI.update(book, toShelf).then(() => {
      this.updateBookList();
    });
  };

  componentDidMount() {
    this.updateBookList();
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
