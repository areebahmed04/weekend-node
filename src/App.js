import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Borrow from './components/Borrow';
import Return from './components/Return';
import Login from './components/Login';
import Register from './components/Register';

var loggedIn = true;
function App() {
  return (
    
    <Router>
      {loggedIn?
      <div className="App">
      <Header />
      <div className="main">
      <Switch> 
      <Route path="/" exact component={Home} />
        <Route path="/borrow" component={Borrow} />
        <Route path="/return" component={Return} />
        </Switch>
      </div>
    </div>:
    <>
    <Switch> 
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="*" component={Login} />
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;
