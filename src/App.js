import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Nav from './components/Nav';
import Info from './components/Info';
import Recipe from './components/Recipe';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
        <Route exact path='/'>
          <Redirect to="/about" />
        </Route>
        <Route path='/about' component={Info} />
        <Route path='/recipe' component={Recipe} />
        

      </div>
    </Router>
  );
}

export default App;
