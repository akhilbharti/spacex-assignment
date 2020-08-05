import React from 'react';
import './App.css';
import SpaceApp from './components/SpaceApp'
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <header className="header">SpaceX Launch Programs</header>
          <Switch>
            <Route exact path="/" >
              <Redirect to='/launches/:luanch/:land/:year?'/>
            </Route>
            <Route exact path="/launches/:luanch/:land/:year?" component={SpaceApp}></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
