import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Customer } from "./pages/Customer/Customer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element = {<Customer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
