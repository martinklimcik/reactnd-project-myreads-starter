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
  componentDidMount() {
    // Update book list
    BooksAPI.getAll().then((result) => {
      this.setState({
        bookList: result,
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <MainPage bookList={this.state.bookList} />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
