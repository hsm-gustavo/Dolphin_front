import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-900 h-screen">
      {/* TODO -> see react-router-dom v6.x */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
