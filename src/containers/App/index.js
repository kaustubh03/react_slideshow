import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../components/Home";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {" "}
          {/* display Home at default path as of now */}{" "}
          <main>
            <Route exact path="/" component={Home} />{" "}
          </main>{" "}
        </div>
      </Router>
    );
  }
}

export default App;
