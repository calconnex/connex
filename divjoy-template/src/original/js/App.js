import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Compare from './Compare.js';
import NotFound from './NotFound.js';
import ApplicantDetails from './ApplicantDetails.js'
import SignIn from './SignIn';
import { useState } from "react";
import "../css/index.css";


function App() {
  const [signedIn, setSignedIn] = useState(false)
  const toggleSignedIn = () => {
    setSignedIn(!signedIn);
  }

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => !signedIn ?<SignIn toggleSignedIn={toggleSignedIn}/>:<Home toggleSignedIn={toggleSignedIn}/>}/>
            <Route path="/home">
              <Home toggleSignedIn={toggleSignedIn}/>
            </Route>
            <Route path="/compare">
              <Compare toggleSignedIn={toggleSignedIn}/>
            </Route>
            <Route path="/applicants/:id">
              <ApplicantDetails toggleSignedIn={toggleSignedIn}/>
            </Route>
            <Route path="*">
              <NotFound toggleSignedIn={toggleSignedIn}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
