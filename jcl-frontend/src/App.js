import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
