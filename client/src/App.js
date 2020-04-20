import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Home, MovieDetail, PersonDetail } from './components';


class App extends React.Component {
  render () {
    return (
      <Router>
      <div className="app">
        <Link to="/" title="Home"><h1>Lattice Movie Database</h1></Link>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/person/:id" component={PersonDetail} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
