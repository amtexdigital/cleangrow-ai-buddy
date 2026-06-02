import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Radar,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";
import owLogo from "@/assets/order-of-work.png.asset.json";
import ownerPortrait from "@/assets/owner-portrait.png";
import handshakeImg from "@/assets/handshake.jpg";

const STRIPE_URL = "https://buy.stripe.com/dRm9AVgJigVObCyebt8bS05";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CleaningBusiness.ai — AI Sales Assistant for Canadian Cleaning Businesses" },
      {
        name: "description",
        content:
          "An AI sales assistant built for Canadian cleaning businesses. In partnership with ISSA Canada — find daily opportunities, send professional estimates, and own your data.",
      },
      { property: "og:title", content: "CleaningBusiness.ai — AI Sales Assistant for Cleaning Businesses" },
      {
        property: "og:description",
        content:
          "Exclusive ISSA Canada member pricing. AI monitors your service area for new cleaning opportunities so you can respond faster and win more contracts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function CTAButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "lg" | "xl";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap";
  const sizes = {
    lg: "px-6 py-3 text-sm",
    xl: "px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:brightness-110 shadow-[var(--shadow-accent)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-primary-foreground border border-white/30 hover:bg-white/10",
  };
  return (
    <a
      href={STRIPE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-black uppercase tracking-[-0.04em] leading-none ${className}`}
    >
      <span className="text-primary">Cleaning</span>
      <span className="text-primary/60">Business</span>
      <span className="italic text-accent">.ai</span>
    </span>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2.5">
              <img src={owLogo.url} alt="Order of Work" className="h-9 w-9 rounded-md" />
              <Wordmark className="hidden text-xl sm:inline sm:text-2xl" />
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="hidden items-center gap-2 sm:flex">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                In partnership with
              </span>
              <img src={issaLogo.url} alt="ISSA Canada" className="h-7 w-auto" />
            </div>
          </div>
          <CTAButton size="lg">
            Sign Up <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </header>

      {/* HERO — owner as full background */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Owner background image */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end">
          <img
            src={ownerPortrait}
            alt="Smiling cleaning business owner"
            className="h-[105%] w-auto max-w-none object-contain object-bottom opacity-90 [mask-image:linear-gradient(to_left,black_55%,transparent_95%)]"
          />
        </div>
        {/* Soft paper wash on the left to keep copy legible */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--paper) 0%, color-mix(in oklab, var(--paper) 85%, transparent) 38%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              In partnership with ISSA Canada
            </div>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-[-0.035em] text-primary sm:text-6xl lg:text-7xl xl:text-[5.75rem]">
              Turn Local Cleaning Opportunities Into{" "}
              <span className="text-accent italic font-black">
                New Contracts
              </span>
            </h1>
            <p className="mt-5 text-xl font-medium text-primary/80">
              Your AI Sales Assistant for Cleaning Business Growth
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Active ISSA Canada members can now access a specialized Cleaning Business AI
              Assistant — built to monitor your service area, surface real opportunities,
              and help you respond faster than anyone else.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton size="xl">
                Sign Up Today <ArrowRight className="h-5 w-5" />
              </CTAButton>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
              >
                See what's included →
              </a>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Limited-time offer for active ISSA Canada members.
            </p>
          </div>
        </div>

        {/* Lower hero image: handshake */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="ml-auto w-full max-w-md overflow-hidden rounded-2xl border-4 border-background bg-card shadow-[var(--shadow-elegant)]">
            <img
              src={handshakeImg}
              alt="Cleaner shaking hands with a new customer"
              width={1280}
              height={896}
              loading="lazy"
              className="h-56 w-full object-cover sm:h-64"
            />
          </div>
        </div>
      </section>

      {/* VALUE STRIP — redesigned */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 10% 0%, color-mix(in oklab, var(--brand-blue-bright) 60%, transparent), transparent 55%), radial-gradient(ellipse at 90% 100%, color-mix(in oklab, var(--brand-blue) 50%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Why CleaningBusiness.ai
            </div>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              More Leads.{" "}
              <span className="italic text-accent">Better Follow-Up.</span>{" "}
              More Wins.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/75 sm:text-lg">
              Your AI Assistant works daily to uncover sales opportunities in your service
              area and help you take action faster.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                strike: "Guessing where to look.",
                replace: "AI scans your service area every day.",
              },
              {
                strike: "Missing potential contracts.",
                replace: "Real-time alerts on new opportunities.",
              },
              {
                strike: "Managing sales alone.",
                replace: "A full AI sales assistant in your corner.",
              },
            ].map((item) => (
              <div
                key={item.strike}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.07]"
              >
                <div className="text-sm uppercase tracking-wider text-primary-foreground/40 line-through decoration-accent decoration-2">
                  {item.strike}
                </div>
                <div className="mt-3 flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <p className="text-lg font-semibold leading-snug">
                    {item.replace}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Built for cleaning businesses
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Find opportunities. Win them professionally.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            An AI assistant that knows your market, knows your industry, and works only for you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Radar,
              title: "AI that monitors your service area",
              body:
                "Your assistant watches your local market 24/7 — picking up postings, signals, and conversations from people looking for cleaning. So you can respond faster than the competition.",
              proof: "Be the first one in the door.",
            },
            {
              icon: FileText,
              title: "Professional, profitable estimates",
              body:
                "Generate clean, professional estimates priced for your business — backed by ISSA Canada's industry expertise on scope, productivity rates, and margin standards.",
              proof: "Quote with confidence, every time.",
            },
            {
              icon: ShieldCheck,
              title: "Your data stays your own",
              body:
                "This is an AI you own. Your opportunities, your customers, and your pricing never get pooled, resold, or shared with competitors.",
              proof: "Private by design. Yours by default.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              <div className="mt-5 flex items-start gap-2 border-t border-border pt-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-primary">{f.proof}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <img src={issaLogo.url} alt="" className="h-4 w-auto" /> Exclusive ISSA Canada Member Offer
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Save over 65% as an active member
            </h2>
            <p className="mt-3 text-muted-foreground">
              Same product, same AI assistant — exclusive pricing for the ISSA Canada community.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Regular price */}
            <div className="rounded-2xl border border-border bg-card/60 p-8 opacity-80">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Regular Price
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-muted-foreground line-through decoration-accent/60 decoration-2">
                  $875
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground line-through">
                $1,750 setup fee
              </div>
              <div className="mt-6 h-px bg-border" />
              <p className="mt-6 text-sm text-muted-foreground">
                Standard CleaningBusiness.ai pricing for non-members.
              </p>
            </div>

            {/* Member price */}
            <div
              className="relative rounded-2xl border-2 border-accent bg-card p-8 shadow-[var(--shadow-accent)]"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                Limited-Time Member Price
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                ISSA Canada Members
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-primary">$299</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <div className="mt-2 text-sm font-medium text-primary">$575 setup fee</div>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Daily AI-sourced sales opportunities",
                  "Professional estimates backed by ISSA expertise",
                  "Outreach & follow-up assistance",
                  "Your data stays yours — always",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CTAButton size="xl" className="w-full">
                  Sign Up Today <ArrowRight className="h-5 w-5" />
                </CTAButton>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Active ISSA Canada members only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Start Building Your Sales Pipeline Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">
            Get daily opportunities, professional estimates, and an AI sales assistant
            designed specifically for cleaning businesses.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <CTAButton size="xl">
              Sign Up Today <ArrowRight className="h-5 w-5" />
            </CTAButton>
            <p className="text-xs text-primary-foreground/70">
              Limited-time offer for active ISSA Canada members.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={owLogo.url} alt="Order of Work" className="h-8 w-8 rounded" />
            <div className="text-sm">
              <Wordmark className="text-base" />
              <div className="mt-1 text-xs text-muted-foreground">
                Powered by Order of Work · In partnership with ISSA Canada
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={issaLogo.url} alt="ISSA Canada" className="h-9 w-auto" />
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Order of Work. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
