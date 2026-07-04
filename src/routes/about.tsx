import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Heart, Scissors, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal, SectionTitle } from "@/components/Reveal";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Rudra Unisex Salon" },
      {
        name: "description",
        content:
          "Learn about Rudra Unisex Salon — our story, our expert stylists and our commitment to premium grooming for men and women.",
      },
      { property: "og:title", content: "About Us | Rudra Unisex Salon" },
      { property: "og:description", content: "Our story and our commitment to premium unisex grooming." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Scissors, title: "Expert Stylists", desc: "A team trained in the latest cuts, styles and techniques." },
  { icon: Heart, title: "Client First", desc: "Personalised service tailored to your look and comfort." },
  { icon: Sparkles, title: "Premium Products", desc: "Only trusted, high-quality products touch your hair and skin." },
];

const points = [
  "Modern, hygienic and welcoming studio",
  "Unisex services for the whole family",
  "Flexible appointments and walk-ins",
  "Affordable premium experience",
];

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Who We Are" title="About Rudra Unisex Salon" />
        </Reveal>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <img
                src={about}
                alt="Interior of Rudra Unisex Salon"
                loading="lazy"
                width={1200}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At <span className="text-gold">Rudra Unisex Salon</span>, we believe
              grooming is an experience, not just a service. From sharp haircuts to
              relaxing treatments, our passionate team blends craft and care to make
              every visit memorable.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you're here for a quick trim or a complete makeover, we bring
              precision, style and warmth to everything we do — for men and women alike.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-9 inline-block rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            >
              Book An Appointment
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal>
            <SectionTitle eyebrow="Our Promise" title="Why Choose Us" center />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
