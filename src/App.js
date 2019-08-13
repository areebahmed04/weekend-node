import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Available from './components/Available';
import Borrowed from './components/Borrowed';
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
        <Route path="/borrow" component={Available} />
        <Route path="/return" component={Borrowed} />
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
