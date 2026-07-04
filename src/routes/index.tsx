import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Star, Users, Award, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal, SectionTitle } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import women from "@/assets/service-women.jpg";
import beard from "@/assets/service-beard.jpg";
import color from "@/assets/service-color.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { img: beard, title: "Haircut & Beard", desc: "Precision cuts and expert beard styling for the sharpest look." },
  { img: women, title: "Styling & Blow Dry", desc: "Salon-perfect finishes for every occasion and every mood." },
  { img: color, title: "Color & Treatment", desc: "Rich color, highlights and nourishing hair treatments." },
];

const stats = [
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Scissors, value: "20+", label: "Expert Services" },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Barber cutting hair at Rudra Unisex Salon"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Welcome to Rudra Unisex Salon
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[1.05] md:text-7xl">
              Best Salon For A <span className="text-gold">Professional Look</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Hair can be styled, hair can be crowned — come on in and let our
              experts change your crown.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 md:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <s.icon className="mx-auto h-8 w-8 text-gold" />
              <div className="mt-3 font-display text-4xl font-bold">{s.value}</div>
              <div className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="What We Offer" title="Our Signature Services" center />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="group overflow-hidden rounded-2xl border border-border/60 bg-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-gold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold hover:underline">
            <Sparkles className="h-4 w-4" /> View All Services
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <Reveal>
            <Clock className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-5 font-display text-4xl font-bold uppercase md:text-5xl">
              Ready For A Fresh Look?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Skip the wait — reserve your slot with our expert stylists and walk
              out looking your absolute best.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-gold-gradient px-10 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            >
              Book Your Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
