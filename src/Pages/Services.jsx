const services = [
  {
    name: "Lash Services",
    description: "Classic, hybrid, volume and cluster lash services.",
  },
  {
    name: "Wig Services",
    description: "Installation, styling, revamps and custom wig making.",
  },
  {
    name: "Makeup Services",
    description: "Soft glam, full glam, bridal and event makeup.",
  },
  {
    name: "Brow Services",
    description: "Brow shaping, henna tint and brow styling.",
  },
  {
    name: "Nail Services",
    description: "Manicures, pedicures, gel and acrylic services.",
  },
]

function Services() {
  return (
    <main>
      <section>
        <p className="eyebrow">WHAT WE OFFER</p>

        <h1>Our Services</h1>

        <p>
          Beauty services designed for every age, every gender,
          and every occasion.
        </p>
      </section>

      <section>
        {services.map((service) => (
          <article key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>

            <button>View Services</button>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Services