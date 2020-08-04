import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './components/filter'
import SpaceList from './components/spaceList'

function App() {
  return (
    <div className="App">
      <header className="header">SpaceX Launch Programs</header>
      <div className="body-class">
      <Filter />
      <SpaceList />
      </div>
    </div>
  );
}

export default App;
