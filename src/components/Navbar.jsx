import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        AMIANA
        <span>LUXE STUDIO</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/login">Sign In</Link>
      </div>

      <Link to="/booking" className="nav-button">
        Book Appointment
      </Link>
    </nav>
  )
}

export default Navbar