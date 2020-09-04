import React from 'react';
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import NotFound from './components/NotFound';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
 // Store data to state
 const [users, setUsers] = useState([]);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home users={users} setUsers={setUsers} />
        </Route>
        <Route path="/home">
          <Home users={users} setUsers={setUsers} />
        </Route>
        <Route path="/user/:uuid">
          <UserDetails users={users} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
