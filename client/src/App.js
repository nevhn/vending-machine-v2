import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { AddItem } from './pages/AddItem/AddItem'
import { Customer } from './pages/Customer/Customer'
import { Transactions } from './pages/Transactions/Transactions'
import { Vendor } from './pages/Vendor/Vendor'

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="vendor" element={<Vendor />} />
        <Route path="vendor/add" element={<AddItem />} />
        <Route path="vendor/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
