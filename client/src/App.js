import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";

const App = () => {
  /**TODO: Header -> Vending Machine -> item components */
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/">
          Home
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
