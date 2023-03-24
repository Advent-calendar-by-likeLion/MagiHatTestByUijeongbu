import { HashRouter as Router, Route, Switch /*, Redirect*/ } from "react-router-dom";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Write from "../routes/Write";
import Home2 from "../routes/Home2";
import AdminPage from "../routes/AdminPage";
import WriteSuccess from "../routes/WriteSuccess";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
        <Route exact path="/home2">
          <Home2 />
        </Route>
        <Route exact path="/home">
          <Home />
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
