import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Groups from './pages/Groups'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: pink,
  },
});


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div>
        <Switch>
          
          <Route path="/">
            <Groups></Groups>
          </Route>
          <Route exact path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/groups">
            <Groups></Groups>
          </Route>
        </Switch>      
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
