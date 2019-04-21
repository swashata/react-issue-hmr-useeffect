import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mountNode = document.querySelector("#root");
let AppToMount = App;
ReactDOM.render(<AppToMount />, mountNode);

let rendered = true;

if (module.hot) {
  module.hot.accept("./App.js", () => {
    // eslint-disable-next-line global-require
    AppToMount = require("./App.js").default;
    ReactDOM.render(<AppToMount />, mountNode);
    rendered = true;
  });
}


const rerenderButton = document.querySelector('#re-render');

rerenderButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (rendered) {
    ReactDOM.render(null, mountNode);
    rendered = false;
  } else {
    ReactDOM.render(<AppToMount />, mountNode);
    rendered = true;
  }
});
