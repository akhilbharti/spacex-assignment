import React from 'react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './theme'
import Filter from './components/filter'
import SpaceList from './components/spaceList'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <header className="header">SpaceX Launch Programs</header>
      <div className="body-class">
      <Filter />
      <SpaceList />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
