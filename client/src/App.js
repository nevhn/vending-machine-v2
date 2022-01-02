import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { AddFunds } from './pages/AddFunds/AddFunds'
import { AddItem } from './pages/AddItem/AddItem'
import { Customer } from './pages/Customer/Customer'
import { DeleteItem } from './pages/DeleteItem/DeleteItem'
import { Funds } from './pages/Funds/Funds'
import { Transactions } from './pages/Transactions/Transactions'
import { UpdateItem } from './pages/UpdateItem/UpdateItem'
import { Vendor } from './pages/Vendor/Vendor'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="vendor" element={<Vendor />} />
        <Route path="vendor/add" element={<AddItem />} />
        <Route path="vendor/transactions" element={<Transactions />} />
        <Route path="vendor/update" element={<UpdateItem />} />
        <Route path="vendor/delete" element={<DeleteItem />} />
        <Route path="vendor/funds" element={<Funds />} />
        <Route path="vendor/addfunds" element={<AddFunds />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
