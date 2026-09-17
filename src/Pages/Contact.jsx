import { Link } from "react-router-dom"

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-heading">
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>
            Let's create
            <br />
            your <span>look.</span>
          </h1>
        </div>

        <div className="contact-intro">
          <p>
            Have a question, need help choosing a service,
            or ready to book your appointment?
          </p>

          <p>
            Reach out to Amiana Luxe Studio and let's create
            something beautiful.
          </p>
        </div>
      </section>

      <section className="contact-details">
        <div className="contact-card">
          <span>01</span>
          <h2>Call Us</h2>
          <p>+254 XXX XXX XXX</p>
        </div>

        <div className="contact-card">
          <span>02</span>
          <h2>WhatsApp</h2>
          <p>Chat with Amiana Luxe Studio</p>
        </div>

        <div className="contact-card">
          <span>03</span>
          <h2>Book</h2>
          <p>Choose your service and appointment time.</p>
        </div>
      </section>

      <section className="contact-cta">
        <p className="eyebrow">READY WHEN YOU ARE</p>

        <h2>Your next beauty experience starts here.</h2>

            <Link to="/booking" className="contact-cta-button">
        Book Appointment
      </Link>
      </section>
    </main>
  )
}

export default Contact