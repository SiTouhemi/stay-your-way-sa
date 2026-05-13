import { createFileRoute } from "@tanstack/react-router";
import {
  Search, ShieldCheck, Calendar, Lock, MessageCircle, LayoutDashboard,
  Smartphone, Globe, MapPin, Check, Apple, Play, Mail, Phone,
  ChevronDown, Star, TrendingUp, Building2, Users, Headphones,
} from "lucide-react";
import { useState } from "react";
import heroPhone from "@/assets/manam-mobile-hero.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const cities = ["Riyadh", "Jeddah", "Mecca", "Dammam"];

const features = [
  { icon: Search, title: "Smart Search & Discovery", body: "Filter by city, price, room type, and amenities to find the right monthly accommodation instantly." },
  { icon: ShieldCheck, title: "Reviewed Listings", body: "Every property goes through our listing review process before going live — so you see accurate, honest listings." },
  { icon: Calendar, title: "Easy Booking", body: "Send a booking request and confirm your monthly stay in minutes, with a clear cancellation policy." },
  { icon: Lock, title: "Secure Payments", body: "All payments are processed through the platform. No cash, no off-platform transfers — your money is protected." },
  { icon: MessageCircle, title: "Direct Messaging", body: "Chat with hosts before and during your stay. All communication is kept on-platform for transparency and safety." },
  { icon: LayoutDashboard, title: "Host Dashboard", body: "Hosts manage listings, reservations, and earnings from a dedicated dashboard — web or mobile." },
  { icon: Smartphone, title: "iOS & Android Apps", body: "A smooth native experience on both platforms. Search, book, and manage your stay from anywhere." },
  { icon: Globe, title: "Web Version", body: "Prefer a browser? Access the full Manam experience at manam.sa — no app required." },
];

const steps = [
  { n: "01", title: "Discover", body: "Search for monthly accommodation in your city. Filter by price, room type, and amenities to find the right fit." },
  { n: "02", title: "Choose", body: "View detailed property pages with photos, pricing, host information, and accurate location." },
  { n: "03", title: "Book", body: "Submit a booking request and complete secure payment — all on-platform. Your confirmation arrives instantly." },
  { n: "04", title: "Manage", body: "Track your stay, message your host, request renewals, or manage your listings — from the app or website." },
];

const trust = [
  { icon: Lock, title: "Secure Payments", body: "All booking payments are processed on-platform through trusted payment providers. No off-platform transfers." },
  { icon: ShieldCheck, title: "Listing Review Process", body: "Every listing is reviewed before publication. Hosts must provide accurate property information, photos, and pricing." },
  { icon: Users, title: "Privacy First", body: "Your personal data is handled with care. We collect only what is needed to operate your account and bookings." },
  { icon: Calendar, title: "Clear Booking Rules", body: "Our cancellation policy is displayed upfront, so you know exactly what to expect before you confirm." },
  { icon: Headphones, title: "Support When You Need It", body: "Have a question or a problem? Reach our support team by email or phone — we are here to help." },
  { icon: Check, title: "Transparent Process", body: "From booking to check-in to renewals, every step is handled through the platform with a clear audit trail." },
];

const hostFeatures = [
  { title: "List Your Property", body: "Create a detailed listing with photos, pricing, and room information. Your property reaches active monthly renters across Saudi Arabia." },
  { title: "Manage Reservations", body: "Accept or decline booking requests, view your calendar, and handle renewals — all from one place." },
  { title: "Communicate with Renters", body: "Built-in messaging keeps all conversations on-platform. Stay in touch with bookers and occupants easily." },
  { title: "Track Earnings", body: "See booking totals, commission breakdowns, and payout history in your host dashboard." },
  { title: "Access from Anywhere", body: "Manage everything through the Manam app (iOS & Android) or the web dashboard." },
];

const faqs = [
  { q: "What is Manam?", a: "Manam is a digital marketplace for monthly accommodation in Saudi Arabia. We connect renters, employers, and property owners on one platform for flexible monthly stays in Riyadh, Jeddah, Mecca, and Dammam." },
  { q: "Is Manam available as a mobile app and a website?", a: "Yes. Manam is available as native apps on iOS and Android, and as a full web experience at manam.sa." },
  { q: "How do I book a property on Manam?", a: "Search for a listing, view its details, and submit a booking request. Once approved, complete secure payment on-platform and your confirmation arrives instantly." },
  { q: "Are the listings verified?", a: "Every listing is reviewed before publication. Hosts must provide accurate property information, photos, and pricing." },
  { q: "Are payments secure?", a: "Yes. All booking payments are processed on-platform through trusted payment providers. No off-platform transfers are permitted." },
  { q: "How can hosts list their properties on Manam?", a: "Create a host account, add a detailed listing with photos and pricing, and start receiving booking requests from monthly renters across Saudi Arabia." },
  { q: "What is the cancellation policy?", a: "Our cancellation policy is displayed upfront on every listing, so you know exactly what to expect before you confirm a booking." },
  { q: "How can I contact Manam support?", a: "Reach our support team by email at chiefs-ad@outlook.com or by phone at 0502577980. We are here to help." },
];

function StoreButtons({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const base = variant === "dark"
    ? "bg-foreground text-background hover:bg-foreground/90"
    : "bg-background text-foreground hover:bg-muted border border-border";
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-smooth ${base}`}>
        <Apple className="h-6 w-6" />
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-70">Download on the</div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </a>
      <a href="#" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-smooth ${base}`}>
        <Play className="h-6 w-6" />
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-70">Get it on</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">م</div>
          <span className="font-display font-bold text-lg text-foreground">Manam</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-smooth">Features</a>
          <a href="#how" className="hover:text-primary transition-smooth">How It Works</a>
          <a href="#about" className="hover:text-primary transition-smooth">About</a>
          <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
        </nav>
        <a href="#" className="inline-flex items-center rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 text-sm font-semibold transition-smooth shadow-soft">
          Open App
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <Star className="h-3.5 w-3.5 fill-primary" /> Trusted by renters & hosts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
            Find Your Monthly Stay in <span className="text-primary">Saudi Arabia</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Manam connects renters and hosts for flexible monthly accommodation — verified listings, secure payments, and seamless booking across Riyadh, Jeddah, Mecca, and Dammam.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <StoreButtons />
          </div>
          <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-smooth">
            Browse the Web App →
          </a>
          <div className="mt-10">
            <div className="text-xs uppercase tracking-wider text-light-text font-semibold mb-3">Available in</div>
            <div className="flex flex-wrap gap-2">
              {cities.map(c => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroPhone}
              alt="Manam mobile app showing monthly apartment listings in Riyadh and Jeddah"
              width={520}
              height={620}
              className="relative w-[320px] md:w-[420px] lg:w-[480px] h-auto drop-shadow-2xl"
            />
            <div className="hidden md:flex absolute -left-8 top-20 items-center gap-3 rounded-2xl bg-background shadow-elegant p-4 border border-border">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Booking Confirmed</div>
                <div className="text-sm font-semibold text-foreground">Al Narjis, Riyadh</div>
              </div>
            </div>
            <div className="hidden md:block absolute -right-4 bottom-32 rounded-2xl bg-background shadow-elegant p-4 border border-border">
              <div className="text-xs text-muted-foreground">Al Olaya, Riyadh</div>
              <div className="text-lg font-bold text-foreground">SAR 2,800</div>
              <div className="text-xs text-light-text">2BR · Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { v: "4+", l: "Major Cities" },
    { v: "100+", l: "Verified Listings" },
    { v: "24/7", l: "Customer Support" },
  ];
  const cards = [
    { emoji: "🏠", title: "What is Manam?", body: "Manam is a digital marketplace for monthly accommodation in Saudi Arabia. From private apartments to shared staff housing, we give you one platform to search, compare, and book." },
    { emoji: "👤", title: "Who is it for?", body: "Individuals relocating for work, employers booking accommodation for staff, and property owners looking to earn from long-term monthly rentals." },
    { emoji: "✅", title: "Why choose Manam?", body: "Every listing is reviewed before publication. Payments flow through the platform — no cash, no confusion. Support is available if anything goes wrong." },
  ];
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Manam</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Monthly Stays, Made Simple</h2>
          <p className="mt-4 text-lg text-muted-foreground">Finding quality monthly accommodation in Saudi Arabia shouldn't be complicated. Manam makes it easy, safe, and transparent for renters and hosts alike.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          {stats.map(s => (
            <div key={s.l} className="text-center rounded-2xl bg-soft-surface border border-border p-6">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(c => (
            <div key={c.title} className="rounded-2xl border border-border bg-background p-8 hover:shadow-soft hover:-translate-y-1 transition-smooth">
              <div className="text-4xl mb-4">{c.emoji}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 bg-soft-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Everything You Need in One Place</h2>
          <p className="mt-4 text-lg text-muted-foreground">From discovery to check-in, Manam is built to make monthly accommodation straightforward for both renters and hosts.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(f => (
            <div key={f.title} className="rounded-2xl bg-background border border-border p-6 hover:border-primary/40 hover:shadow-soft transition-smooth">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">From Search to Check-In in Four Steps</h2>
          <p className="mt-4 text-lg text-muted-foreground">Manam is designed for speed and clarity. No unnecessary steps, no confusing flows.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.n} className="relative rounded-2xl bg-gradient-hero border border-border p-7">
              <div className="text-xs font-bold text-primary tracking-widest mb-4">STEP {s.n}</div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-extrabold mb-5 shadow-soft">
                {parseInt(s.n)}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3.5 font-semibold transition-smooth shadow-elegant">
            Start Searching
          </a>
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  const items = [
    { icon: Apple, title: "iOS App", body: "Available on the App Store for iPhone and iPad.", cta: "App Store" },
    { icon: Play, title: "Android App", body: "Available on Google Play for all Android devices.", cta: "Google Play" },
    { icon: Globe, title: "Web App", body: "No installation needed. Use Manam directly in your browser.", cta: "Open Web App" },
  ];
  return (
    <section className="py-24 bg-soft-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Available on all platforms</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Use Manam Anywhere</h2>
          <p className="mt-4 text-lg text-muted-foreground">Whether you prefer a native mobile experience or the convenience of a browser, Manam works seamlessly on iOS, Android, and the web.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="rounded-2xl bg-background border border-border p-8 text-center hover:shadow-soft transition-smooth">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-5">
                <i.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{i.title}</h3>
              <p className="text-muted-foreground mb-6">{i.body}</p>
              <a href="#" className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-smooth">
                {i.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Trust & Safety</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Built on Trust</h2>
          <p className="mt-4 text-lg text-muted-foreground">We take the safety of every transaction and interaction on Manam seriously. These are the safeguards we have in place.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trust.map(t => (
            <div key={t.title} className="rounded-2xl bg-soft-surface border border-border p-6 hover:shadow-soft transition-smooth">
              <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center mb-4 shadow-soft">
                <t.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-light-text max-w-3xl mx-auto">
          Manam is operated by Rawad alnitaq almithali Company (UNN 7053780404), registered in Riyadh, Kingdom of Saudi Arabia. Use of the platform is governed by our Terms and Conditions.
        </p>
      </div>
    </section>
  );
}

function ForHosts() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">For Hosts & Property Owners</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">List Your Property. Reach Monthly Renters.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Whether you own a single apartment or manage a portfolio of units, Manam gives you the tools to list, manage, and grow.</p>
          <div className="mt-8 space-y-4">
            {hostFeatures.map(h => (
              <div key={h.title} className="flex gap-4">
                <div className="h-7 w-7 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{h.title}</div>
                  <div className="text-sm text-muted-foreground">{h.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#" className="inline-flex rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 font-semibold transition-smooth shadow-soft">Start Listing</a>
            <a href="#contact" className="inline-flex rounded-xl bg-background border border-border text-foreground px-6 py-3 font-semibold hover:border-primary transition-smooth">Talk to Us</a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl bg-background border border-border p-8 shadow-elegant">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-muted-foreground">Monthly Earnings</div>
                <div className="text-3xl font-extrabold text-foreground">SAR 8,400</div>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-accent text-primary px-3 py-1 text-xs font-bold">
                <TrendingUp className="h-3.5 w-3.5" /> +12%
              </div>
            </div>
            <div className="h-32 rounded-xl bg-gradient-to-tr from-accent to-soft-surface flex items-end p-2 gap-1.5">
              {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-md bg-gradient-primary" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {[
                { name: "Al Olaya Studio", status: "Active", color: "text-primary bg-accent" },
                { name: "Al Narjis 2BR", status: "Pending", color: "text-foreground bg-soft-surface" },
              ].map(r => (
                <div key={r.name} className="flex items-center justify-between rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="font-semibold text-foreground">{r.name}</div>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${r.color}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to know before getting started with Manam.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-border bg-background overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-soft-surface transition-smooth"
              >
                <span className="font-semibold text-foreground">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-muted-foreground">
          Still have questions? <a href="#contact" className="text-primary font-semibold hover:underline">Contact us</a>
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-background blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center text-primary-foreground">
        <h2 className="text-3xl md:text-5xl font-extrabold">Ready to Find Your Next Monthly Stay?</h2>
        <p className="mt-4 text-lg opacity-90">Join renters and hosts across Saudi Arabia on the platform built for monthly accommodation.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-5 py-3 font-semibold hover:bg-muted transition-smooth">
            <Apple className="h-5 w-5" /> App Store
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-5 py-3 font-semibold hover:bg-muted transition-smooth">
            <Play className="h-5 w-5" /> Google Play
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 text-primary-foreground px-5 py-3 font-semibold hover:bg-primary-foreground/10 transition-smooth">
            <Globe className="h-5 w-5" /> Open Web App
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center font-bold">م</div>
            <span className="font-display font-bold text-lg">Manam</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed mb-5">Manam is a digital marketplace for monthly accommodation and staff housing in Saudi Arabia. We connect renters and hosts for flexible, verified monthly stays.</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-md border border-background/20 px-2.5 py-1">App Store</span>
            <span className="rounded-md border border-background/20 px-2.5 py-1">Google Play</span>
            <span className="rounded-md border border-background/20 px-2.5 py-1">Web App</span>
          </div>
        </div>
        <div>
          <div className="font-bold mb-4">Platform</div>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#features" className="hover:opacity-100">Features</a></li>
            <li><a href="#how" className="hover:opacity-100">How It Works</a></li>
            <li><a href="#" className="hover:opacity-100">For Hosts</a></li>
            <li><a href="#" className="hover:opacity-100">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">Company</div>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#about" className="hover:opacity-100">About</a></li>
            <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
            <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">Contact</div>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> chiefs-ad@outlook.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0502577980</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Al Narjis District<br />Riyadh, Kingdom of Saudi Arabia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs opacity-60 text-center">
          © 2026 Rawad alnitaq almithali Company. All rights reserved. UNN: 7053780404
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Platforms />
        <Trust />
        <ForHosts />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
