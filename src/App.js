import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";

import LandingPage from "./components/LandingPage.js";
import FillInfo from "./components/Forum.js";

axios.defaults.baseURL = "http://www.localhost:3030";

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/FillInfo" component={FillInfo}></Route>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
