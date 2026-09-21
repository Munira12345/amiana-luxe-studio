import { Link } from "react-router-dom"


function Login() {
  return (
    <main className="auth-page">
      <section className="auth-card">

        <div className="auth-brand">
          <p>AMIANA</p>
          <span>LUXE STUDIO</span>
        </div>

        <div className="auth-header">
          <p className="eyebrow">WELCOME BACK</p>

          <h1>
            Sign
            <br />
            <span>In.</span>
          </h1>

          <p>
            Sign in to manage your Amiana Luxe Studio
            appointments and experience.
          </p>
        </div>

        <form className="auth-form">

          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>

            <input
              type="email"
              id="login-email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>

            <input
              type="password"
              id="login-password"
              placeholder="Enter your password"
            />
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="auth-submit">
            Sign In
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?
            <Link to="/signup"> Create one</Link>
          </p>
        </div>

      </section>
    </main>
  )
}

export default Login