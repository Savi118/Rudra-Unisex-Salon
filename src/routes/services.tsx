import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal, SectionTitle } from "@/components/Reveal";
import women from "@/assets/service-women.jpg";
import beard from "@/assets/service-beard.jpg";
import color from "@/assets/service-color.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | Rudra Unisex Salon" },
      {
        name: "description",
        content:
          "Explore Rudra Unisex Salon services — haircuts, beard grooming, hair color, styling, facials and more with transparent pricing.",
      },
      { property: "og:title", content: "Services & Pricing | Rudra Unisex Salon" },
      { property: "og:description", content: "Haircuts, beard grooming, coloring, styling and more." },
    ],
  }),
  component: Services,
});

const categories = [
  {
    img: hero,
    title: "Hair Cutting",
    items: [
      { name: "Men's Haircut", price: "₹250" },
      { name: "Women's Haircut", price: "₹500" },
      { name: "Kids Haircut", price: "₹200" },
      { name: "Fade / Beard Trim", price: "₹150" },
    ],
  },
  {
    img: beard,
    title: "Beard & Shave",
    items: [
      { name: "Beard Styling", price: "₹150" },
      { name: "Clean Shave", price: "₹120" },
      { name: "Royal Shave", price: "₹250" },
      { name: "Beard Color", price: "₹300" },
    ],
  },
  {
    img: color,
    title: "Color & Treatment",
    items: [
      { name: "Global Hair Color", price: "₹1200" },
      { name: "Highlights", price: "₹1800" },
      { name: "Hair Spa", price: "₹700" },
      { name: "Keratin Treatment", price: "₹3000" },
    ],
  },
  {
    img: women,
    title: "Styling & Beauty",
    items: [
      { name: "Blow Dry", price: "₹400" },
      { name: "Hair Straightening", price: "₹900" },
      { name: "Facial", price: "₹600" },
      { name: "Bridal Makeup", price: "₹5000" },
    ],
  },
];

function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Our Menu" title="Services & Pricing" center />
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Premium grooming for men and women — quality you can see and feel.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 to-transparent p-6">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-gold">
                      {c.title}
                    </h3>
                  </div>
                </div>
                <ul className="divide-y divide-border/60 p-6">
                  {c.items.map((it) => (
                    <li key={it.name} className="flex items-center justify-between py-3">
                      <span className="text-sm text-foreground">{it.name}</span>
                      <span className="font-display text-lg font-semibold text-gold">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-gold-gradient px-10 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Book Your Slot
          </Link>
        </div>
      </section>
    </Layout>
  );
}
