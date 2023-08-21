import './App.css'
import Usersignup from './Components/Usersignup'
import Table from './Components/Table'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Usersignup />} />
        <Route path="/content" element={<Table />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
