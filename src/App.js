import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import ActivitiesList from "./components/activitiesList";
import EditActivity from "./components/editActivity";
import CreateActivity from "./components/createActivity";
import CreateUser from "./components/createUser";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ActivitiesList} />
      <Route path="/edit/:id" component={EditActivity} />
      <Route path="/create" component={CreateActivity} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
