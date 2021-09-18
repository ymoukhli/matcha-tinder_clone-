import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/LandingPage.js'
import FillInfo from './components/Forum.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/FillInfo" component={FillInfo}></Route>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
