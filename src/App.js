import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './components/filter'
import SpaceList from './components/spaceList'

function App() {
  return (
    <div className="App">
      <Filter/>
      <SpaceList/>
    </div>
  );
}

export default App;
