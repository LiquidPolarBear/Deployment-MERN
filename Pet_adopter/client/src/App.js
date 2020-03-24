import React from 'react';
import {Router} from '@reach/router'
import Home from './views/Home'
import PetDetails from './views/PetDetails'
import NewPet from './views/NewPet'
import EditPet from './views/EditPet'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <PetDetails path="/pets/:id" />
        <NewPet path="/pets/new" />
        <EditPet path="/pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
