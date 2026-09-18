import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"


import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


import Home from "./pages/Home"
import Services from "./pages/Services"
import Packages from "./pages/Packages"
import Booking from "./pages/Booking"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App