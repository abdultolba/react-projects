import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // make the Redux store available to nested components wrapped in connect()
import { createStore, applyMiddleware, compose } from "redux"; // create a Redux store that will contain our state
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
