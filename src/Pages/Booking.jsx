function Booking() {
  return (
    <main className="booking-page">
      <section className="booking-header">
        <p className="eyebrow">RESERVE YOUR EXPERIENCE</p>

        <h1>
          Your beauty
          <br />
          <span>starts here.</span>
        </h1>

        <p>
          Choose your service, preferred date and time,
          and we'll take care of the rest.
        </p>
      </section>

      <section className="booking-form-section">
        <form className="booking-form">

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+254..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select id="service">
              <option value="">Select a service</option>
              <option value="lashes">Lash Services</option>
              <option value="wig">Wig Services</option>
              <option value="makeup">Makeup Services</option>
              <option value="brows">Brow Services</option>
              <option value="nails">Nail Services</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" />
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input type="time" id="time" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Anything we should know?</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell us anything that may help us prepare..."
            ></textarea>
          </div>

          <button type="submit" className="booking-submit">
            Request Appointment
          </button>

        </form>
      </section>
    </main>
  )
}

export default Booking