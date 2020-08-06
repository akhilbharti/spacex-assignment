import React from 'react';
import './App.css';
import SpaceApp from './components/SpaceApp'
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
            <Route exact path="/" component={SpaceApp}>
            </Route>
            {/* <Route
              exact
              path="/launches/:luanch/:land/:year"
              component={SpaceApp}
            ></Route> */}
          </Switch>
          <footer className="footer">Developed by: Akhil Bharti</footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
