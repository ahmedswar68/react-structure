import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const routesList = [];

/**
 * add new route to routes list
 * @param path
 * @param component
 */
function addRouter(path, component) {
  routesList.push({path, component});
}

function Routes() {
  const routes = routesList.map((route,index) => {
    return (
      <Route path={route.path} key={index} exact={true} component={route.component}></Route>
    )
  });
  return (
    <Router>
      <Switch>
        {routes}
      </Switch>
    </Router>
  )
}

function scan() {
  ReactDOM.render(<Routes/>, document.getElementById('root'));
}

export default {
  scan,
  provider: {
    name: 'route', //the name that will be used from the reactor object in any module service provider
    call: addRouter
  }
}