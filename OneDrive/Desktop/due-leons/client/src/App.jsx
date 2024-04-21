import { Route, Routes } from "react-router-dom"
import Prenotazione from "./pages/Prenotazione"
import Home from "./pages/Home"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/prenotazione" element={<Prenotazione/>} />
    </Routes>
    </>
  )
}

export default App
