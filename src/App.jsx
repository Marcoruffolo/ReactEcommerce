import styles from './styles/App.module.css'

import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
