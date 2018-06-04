import React, { Component } from "react";
import logo from "./logo.svg";
import FacebookLogin from "react-facebook-login";
import Facebook from "./components/Facebook";
import "./App.css";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";

class App extends Component {
  handleSelect = event => {};
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/darkly/bootstrap.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">
            Faceme
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Statistics
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a id="logout" href="#" onclick="logout()">
                    Logout
                  </a>
                </li>
              </ul>
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <div class="container">
          <div
            class="fb-login-button"
            id="fb-btn"
            data-max-rows="1"
            data-size="large"
            data-button-type="continue_with"
            data-show-faces="true"
            data-auto-logout-link="false"
            data-use-continue-as="false"
            scope="public_profile,user_posts,email,user_birthday,user_location,user_likes,user_status,user_tagged_places,user_hometown,user_gender,user_photos"
            onlogin="checkLoginState();"
          />

          <div id="profile" />
          <div id="averagelikes" />
          <div id="feed" />
          <div id="feed2" />
          <div id="pictures" />
        </div>
        <header className="App-header">
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://i.imgur.com/5vpm7xE.png"
          />

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Faceme</h1>
        </header>
        <Facebook />
      </div>
    );
  }
}

export default App;
