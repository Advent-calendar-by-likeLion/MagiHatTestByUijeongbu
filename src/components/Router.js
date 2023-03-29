import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Write from "../routes/Write";
import Home2 from "../routes/Home2";
import Admin from "../routes/Admin";
import WriteSuccess from "../routes/WriteSuccess";
import Analytics from "routes/Analytics";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/assets/css/animate.min.css";
import "../components/assets/scss/light-bootstrap-dashboard-react.scss";
import "../components/assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "../routes/Admin.js";
import Question from "routes/Question";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/analytics">
          <Analytics />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route component={Question} path='/question/:id'  />
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
