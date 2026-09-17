const services = [
  {
    number: "01",
    name: "Lash Services",
    description:
      "Classic, hybrid, volume and cluster lash services tailored to your desired look.",
  },
  {
    number: "02",
    name: "Wig Services",
    description:
      "Installation, styling, revamps and custom wig making designed around you.",
  },
  {
    number: "03",
    name: "Makeup Services",
    description:
      "Soft glam, full glam, bridal and event makeup for every occasion.",
  },
  {
    number: "04",
    name: "Brow Services",
    description:
      "Brow shaping, henna tint and brow styling to frame your features.",
  },
  {
    number: "05",
    name: "Nail Services",
    description:
      "Manicures, pedicures, gel and acrylic services for polished hands and feet.",
  },
]

function Services() {
  return (
    <main className="services-page">
      <section className="page-header">
        <p className="eyebrow">WHAT WE OFFER</p>

        <h1>Our Services</h1>

        <p>
          Beauty services designed for every age, every gender,
          and every occasion.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.name}>
            <span className="service-number">{service.number}</span>

            <h2>{service.name}</h2>

            <p>{service.description}</p>

            <button>Explore Service</button>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Services