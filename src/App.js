import React from "react";
import "./App.css";
import Ralph from "./components/giphy.gif";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Blogdata from "./components/blogposts.js";
import Blogshow from "./components/blogshow.js";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-MidContainer">
          <div className="App-MainArea">
            <Switch>
              <Route path="/blog0">
                <Blogshow id="0" />
              </Route>
              <Route path="/blog1">
                <Blogshow id="1" />
              </Route>
              <Route path="/blog2">
                <Blogshow id="2" />
              </Route>
              <Route path="/">
                <h1>Hello there!</h1>
                <img className="ralph" src={Ralph} />
              </Route>
            </Switch>
          </div>
          <div className="App-NavArea">
            <ul>
              <Link
                to="/"
                style={{ color: "white" }}
                activeStyle={{ color: "red" }}
              >
                <li>
                  <h3>Homepage</h3>
                </li>
              </Link>

              <Link
                to="/blog0"
                style={{ color: "white" }}
                activeStyle={{ color: "red" }}
              >
                <li>
                  <h3>{Blogdata[0].title}</h3>
                </li>
              </Link>

              <Link
                to="/blog1"
                style={{ color: "white" }}
                activeStyle={{ color: "red" }}
              >
                <li>
                  <h3>{Blogdata[1].title}</h3>
                </li>
              </Link>

              <Link
                to="/blog2"
                style={{ color: "white" }}
                activeStyle={{ color: "red" }}
              >
                <li>
                  <h3>{Blogdata[2].title}</h3>
                </li>
              </Link>
            </ul>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="positivebiscuit"
              options={{ width: 300, height: 400 }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
