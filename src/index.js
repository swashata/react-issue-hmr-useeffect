import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mountNode = document.querySelector("#root");
ReactDOM.render(<App />, mountNode);

if (module.hot) {
  module.hot.accept("./App.js", () => {
    // eslint-disable-next-line global-require
    const NewApp = require("./App.js").default;
    const mountNode = document.querySelector("#root");
    ReactDOM.render(<NewApp />, mountNode);
  });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
