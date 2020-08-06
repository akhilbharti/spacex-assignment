import React from 'react';
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
          <Switch>
            <Route exact path="/" component={SpaceApp}>
            </Route>
            {/* <Route
              exact
              path="/launches/:luanch/:land/:year"
              component={SpaceApp}
            ></Route> */}
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
