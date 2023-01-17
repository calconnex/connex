import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Compare from './Compare.js';
import NotFound from './NotFound.js';
import ApplicantDetails from './ApplicantDetails.js'
import SignIn from './SignIn';
import "../css/index.css";
import AuthPage from '../../pages/auth';


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/compare">
              <Compare />
            </Route>
            <Route path="/applicants/:id">
              <ApplicantDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
