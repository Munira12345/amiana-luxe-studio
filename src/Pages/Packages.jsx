const packages = [
  {
    name: "The Glow",
    services: "Classic lashes + Henna brows",
    price: "KSh 2,000",
    saving: "Save KSh 400",
  },
  {
    name: "Weekend Ready",
    services: "Hybrid lashes + Brows",
    price: "KSh 2,900",
    saving: "Save KSh 400",
  },
  {
    name: "Bridal Prep",
    services: "Soft glam + Wig installation",
    price: "KSh 4,000",
    saving: "Save KSh 500",
  },
  {
    name: "Event Queen",
    services: "Full glam + Wig installation",
    price: "KSh 5,500",
    saving: "Save KSh 1,000",
  },
  {
    name: "Luxury",
    services: "Volume lashes + Brows + Soft glam",
    price: "KSh 5,500",
    saving: "Save KSh 1,200",
  },
]

function Packages() {
  return (
    <main>
      <section>
        <p className="eyebrow">CURATED EXPERIENCES</p>

        <h1>Beauty Packages</h1>

        <p>
          More beauty. More value. One beautifully curated experience.
        </p>
      </section>

      <section>
        {packages.map((pkg) => (
          <article key={pkg.name}>
            <p>{pkg.name}</p>

            <h2>{pkg.price}</h2>

            <p>{pkg.services}</p>

            <small>{pkg.saving}</small>

            <br />

            <button>Book Package</button>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Packages