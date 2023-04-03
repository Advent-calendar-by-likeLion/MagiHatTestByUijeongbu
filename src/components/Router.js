import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "routes/Home";
import Result from "routes/Result";
import Admin from "../routes/Admin";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/assets/css/animate.min.css";
import "../components/assets/scss/light-bootstrap-dashboard-react.scss";
import "../components/assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "../routes/Admin.js";
import Question from "routes/Question";
import AllBusiness from "routes/AllBusiness";
import AllBusiness2 from "routes/AllBusiness2";
import Story from "routes/Story";
import CharChoice from '../routes/CharChoice';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/story">
          <Story />
        </Route>
        <Route exact path="/charchoice">
          <CharChoice />
        </Route>
        <Route component={Question} path='/question'  />
        <Route component={Result} path='/result/:id'  />
        <Route exact path="/allbusiness">
          <AllBusiness />
        </Route>
        <Route exact path="/allbusiness2">
          <AllBusiness2 />
        </Route>
        <Route exact path="/admin/dashboard">
          {/* <Admin /> */}
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
