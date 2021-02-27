import React from "react";
import App from "./App";
import RecipeDetail from "./RecipeDetail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/:id" component={RecipeDetail}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routing;
