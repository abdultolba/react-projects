import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // make the Redux store available to nested components wrapped in connect() 
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
