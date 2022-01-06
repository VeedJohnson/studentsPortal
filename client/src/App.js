import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import StudentDashboard from "./components/StudentDashboard";

function App() {


  return (
    <div id="main">
      <div className="mt-4 container">
        <BrowserRouter>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={StudentDashboard} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>

            {/* <Route path="/register" component={Register} />
            <Route path="/dashboard" component={StudentDashboard} />
            <Route exact path="/" component={Login} /> */}
            {/* <Route path="/biodata" component={Biodata} /> */}
            {/* <Route path="/login" component={Login} /> */}
      </div>
    </div>
  );
}

export default App;
