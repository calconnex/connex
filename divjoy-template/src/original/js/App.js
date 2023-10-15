import Home from './Home';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Compare from './Compare.js';
import NotFound from './NotFound.js';
import ApplicantDetails from './ApplicantDetails.js'
import SignIn from './SignIn';
import "../css/index.css";
import AuthPage from '../../pages/auth';
import { AuthProvider } from "../../util/auth";
import { QueryClientProvider } from "../../util/db";
import CoffeeChatsApplicant6 from './Partners';
import Chong from './Landing';
import ApplicantList from './ApplicantList';
import Dashboard from './Dashboard';


function App() {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Router>
          <div className="App">
        
            <Switch>
              {/**
              <Route exact path="/">
                <Chong />
              </Route>
              <Route exact path="/auth/:type" component={AuthPage}/>
              */}
              <Route exact path = "/">
                <Chong />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>

              <Route exact path="/auth/:type" component={AuthPage}/>
              
              <Route path = "/dashboard">
                <Dashboard />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path ="/profile">
                <Profile />
                </Route>
              <Route path="/compare">
                <Compare />
              </Route>
              <Route path="/applicants/:id">
                <ApplicantDetails />
              </Route>
              
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
