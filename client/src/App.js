import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import PlaceForm from './components/PlaceForm';
import Detail from './components/Detail';
import Edit from './components/Edit';
import { Link, Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <div className="container pt-5">
        <div className="tex-center">
          <div className="jumbotron">
            <h1>welcome to Places!</h1>
            <hr/>
            <h3>Add a Place you want to remember to return to...</h3>
          </div>
          <Link className="btn btn-warning btn-outline-dark mr-2" to="/">New Place</Link>
          <Link className="btn btn-warning btn-outline-dark" to="/places">Places List</Link>
        </div>
      </div>
        <Router>
          <PlaceForm path="/"/>
          <Display path="/places" />
          <Detail path="/place/:_id" />
          <Edit path="/place/update/:_id"/>
        </Router>
    </div>
  );
}

export default App;
