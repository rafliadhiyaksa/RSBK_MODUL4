import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

import State from "./useState/Counter";
import Effect from "./useEffect/Index";
import Context from "./useContext/Index";
import Callback from "./useCallback/Index";
import ReducerRef from "./useReducerRef/Index";

function App() {
  return (
    <Router>
    <div className="App-header">
      <nav className="NavBar">
        <ul className="ul">
          <li className="li">
            <Link to="/">Use State</Link>
          </li>
          <li className="li">
            <Link to="/effect">Use Effect</Link>
          </li>
          <li className="li">
            <Link to="/context">Use Context</Link>
          </li>
          <li className="li">
            <Link to="/callback">Use Callback</Link>
          </li>
          <li className="li">
            <Link to="/reducerref">Use Reducer & Use Ref</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={State} />
        <Route path="/effect" exact component={Effect} />
        <Route path="/context" exact component={Context} />
        <Route path="/callback" exact component={Callback} />
        <Route path="/reducerref" exact component={ReducerRef} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;