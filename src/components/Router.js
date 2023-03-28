import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Write from "../routes/Write";
import Home2 from "../routes/Home2";
import Admin from "../routes/Admin";
import WriteSuccess from "../routes/WriteSuccess";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/assets/css/animate.min.css";
import "../components/assets/scss/light-bootstrap-dashboard-react.scss";
import "../components/assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "../routes/Admin.js";
import QNA from "routes/QNA";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/QNA">
          <QNA />
        </Route>
        <Route exact path="/admin/dashboard">
          {/* <Admin /> */}
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Route>
        <Route exact path="/home2">
          <Home2 />
        </Route>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route exact path="/writesuccess">
          <WriteSuccess />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
