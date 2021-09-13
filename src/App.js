import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/LandingPage.js'

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage}></Route>
    </Router>
  );
}

export default App;
