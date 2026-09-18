import { Link } from "react-router-dom"

function Signup() {
  return (
    <main className="auth-page">
      <section className="auth-card">

        <div className="auth-brand">
          <p>AMIANA</p>
          <span>LUXE STUDIO</span>
        </div>

        <div className="auth-header">
          <p className="eyebrow">JOIN AMIANA</p>

          <h1>
            Create
            <br />
            <span>Account.</span>
          </h1>

          <p>
            Create your account to book appointments
            and manage your beauty experiences.
          </p>
        </div>

        <form className="auth-form">

          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>

            <input
              type="text"
              id="signup-name"
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">Email Address</label>

            <input
              type="email"
              id="signup-email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-phone">Phone Number</label>

            <input
              type="tel"
              id="signup-phone"
              placeholder="+254..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">Password</label>

            <input
              type="password"
              id="signup-password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-confirm-password">
              Confirm Password
            </label>

            <input
              type="password"
              id="signup-confirm-password"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="auth-submit">
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Already have an account?
            <Link to="/login"> Sign in</Link>
          </p>
        </div>

      </section>
    </main>
  )
}

export default Signup