import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">AMIANA</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shop">Shop</Link>
      </div>

      <Link to="/booking">
        Book Appointment
      </Link>
    </nav>
  )
}

export default Navbar