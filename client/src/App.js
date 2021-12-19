import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Customer } from "./pages/Customer/Customer";
import { Vendor } from "./pages/Vendor/Vendor";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/vendor" element={<Vendor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
