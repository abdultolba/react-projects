import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    );
  }
}

export default App;
