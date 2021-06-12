import React from 'react';
import Portada from './components/Portada';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Inicio from './pages/Inicio';
import Register from './pages/Register';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary: {main: "#4F934A"}
  }
})
function App() {
  const classes = useStyles();
  return (
      <Router>
            <MuiThemeProvider theme={theme}>

        <div className={classes.container}>
          <Portada className={classes.portada}/>
          <Switch>
            <Route path="/" exact>
              <Inicio/>
            </Route>
            <Route path="/register"  exact>
              <Register/>
            </Route>
            <Route path="/profile"  exact>
      
            </Route>
            <Route path="/verify"  exact>
      
            </Route>
          </Switch>
        </div>
        </MuiThemeProvider>

      </Router>
  )
}

const useStyles = makeStyles((theme) =>({
  container:{
    display:"flex"
  },
  portada:{
    width:"666px"
  }
}))


export default App;
