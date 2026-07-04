import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Rudra Unisex Salon" },
      {
        name: "description",
        content:
          "Get in touch with Rudra Unisex Salon. Call +91 81729 31277 or book your grooming appointment online.",
      },
      { property: "og:title", content: "Contact & Booking | Rudra Unisex Salon" },
      { property: "og:description", content: "Book your appointment at Rudra Unisex Salon today." },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: Phone, label: "Phone", value: "+91 81729 31277" },
  { icon: Mail, label: "Email", value: "hello@rudrasalon.com" },
  { icon: MapPin, label: "Address", value: "Your City, India" },
  { icon: Clock, label: "Hours", value: "Mon–Sat 9AM–9PM" },
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Booking request sent!", {
        description: "We'll call you shortly to confirm your appointment.",
      });
    }, 800);
  };

  return (
    <Layout>
      <Toaster />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Get In Touch" title="Book Your Appointment" center />
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border/60 bg-card p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="John Doe" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." required />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Service</label>
                  <select
                    name="service"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                  >
                    <option value="">Select a service</option>
                    <option>Haircut</option>
                    <option>Beard & Shave</option>
                    <option>Hair Color</option>
                    <option>Styling & Beauty</option>
                  </select>
                </div>
                <Field label="Preferred Date" name="date" type="date" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Anything we should know?"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending..." : "Send Booking Request"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5">
              {info.map((i) => (
                <div key={i.label} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm uppercase tracking-wide text-muted-foreground">{i.label}</div>
                    <div className="mt-1 font-medium">{i.value}</div>
                  </div>
                </div>
              ))}
              <a
                href="tel:+918172931277"
                className="flex items-center justify-center gap-2 rounded-2xl border border-gold/40 bg-gold-gradient/10 p-6 text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Call Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
