import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={StreamList} />
              <Route path="/streams/new" component={StreamCreate} />
              <Route path="/streams/edit" component={StreamEdit} />
              <Route path="/streams/delete" component={StreamDelete} />
              <Route path="/streams/show" component={StreamShow} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
