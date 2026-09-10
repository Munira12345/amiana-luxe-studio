function Booking() {
  return (
    <main>
      <section>
        <p className="eyebrow">YOUR APPOINTMENT</p>

        <h1>Book Your Appointment</h1>

        <p>
          Select your service and preferred appointment details.
        </p>
      </section>

      <section>
        <h2>Choose a service</h2>

        <button>Lash Services</button>
        <button>Wig Services</button>
        <button>Makeup Services</button>
        <button>Brow Services</button>
        <button>Nail Services</button>
      </section>

      <section>
        <h2>Your details</h2>

        <input placeholder="Full name" />
        <input placeholder="Phone number" />

        <button>Continue</button>
      </section>
    </main>
  )
}

export default Booking