function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">AMIANA LUXE STUDIO</p>

          <h1>
            Your Radiance,
            <br />
            <span>Restored.</span>
          </h1>

          <p className="hero-description">
            Premium beauty services designed to help you
            look and feel like your best self.
          </p>

          <div className="hero-actions">
            <button className="primary-button">
              Book Appointment
            </button>

            <button className="secondary-button">
              Explore Services
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            AMIANA
          </div>
        </div>
      </section>

      <section className="experience">
        <p className="eyebrow">THE AMIANA EXPERIENCE</p>

        <h2>Beauty, curated around you.</h2>

        <p>
          From lashes and wigs to makeup, brows and nails,
          discover beauty services created with intention.
        </p>
      </section>
    </main>
  )
}

export default Home