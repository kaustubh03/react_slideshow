import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import {store} from "./redux/store";

const target = document.querySelector("#root");
render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </div>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
