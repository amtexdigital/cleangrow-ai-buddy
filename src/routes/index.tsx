import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Radar,
  FileText,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";
import owLogo from "@/assets/order-of-work.png.asset.json";
import ownerPortrait from "@/assets/owner-portrait.png";

const STRIPE_URL = "https://buy.stripe.com/dRm9AVgJigVObCyebt8bS05";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#why" },
  { label: "Pricing", href: "#pricing" },
];

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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <Wordmark className="text-xl sm:text-2xl" />
            <div className="hidden h-8 w-px bg-border md:block" />
            <div className="hidden items-center gap-2 md:flex">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Partnered with
              </span>
              <img src={issaLogo.url} alt="ISSA Canada" className="h-10 w-auto" />
            </div>
          </div>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-primary/80 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
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
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end">
          <img
            src={ownerPortrait}
            alt="Cleaning business owners"
            className="h-[110%] w-auto max-w-none object-contain object-bottom opacity-95 [mask-image:linear-gradient(to_left,black_60%,transparent_98%)]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--paper) 0%, color-mix(in oklab, var(--paper) 85%, transparent) 42%, transparent 72%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-36">
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
      </section>

      {/* VALUE STRIP */}
      <section id="why" className="relative overflow-hidden bg-primary text-primary-foreground">
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

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Radar,
              title: "AI that monitors your service area",
              body:
                "Your assistant watches your local market 24/7 — picking up postings, signals, and conversations from people looking for cleaning. So you can respond faster than the competition.",
              proof: "Be the first one in the door.",
            },
            {
              icon: MessageCircle,
              title: "Chat with your AI 24/7 on messenger",
              body:
                "Talk to your custom AI assistant any time, right from WhatsApp, Messenger, SMS, or Telegram. Ask for leads, draft a quote, or get follow-up advice — wherever you are.",
              proof: "Always on. Always in your pocket.",
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

      {/* PRICING — single card with discount inline */}
      <section id="pricing" className="bg-secondary/60">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <img src={issaLogo.url} alt="" className="h-5 w-auto" /> Exclusive ISSA Canada Member Offer
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              One price. Built for ISSA Canada members.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Save over 65% versus standard pricing — same AI assistant, same support.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border-2 border-accent bg-card shadow-[var(--shadow-accent)]">
            {/* Top banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-accent/30 bg-accent/10 px-7 py-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Sparkles className="h-4 w-4" /> Limited-Time Member Price
              </div>
              <div className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                Save 65%
              </div>
            </div>

            <div className="grid gap-8 p-8 md:grid-cols-5 md:p-10">
              {/* Price column */}
              <div className="md:col-span-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Monthly subscription
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-6xl font-black text-primary">$299</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Regular{" "}
                  <span className="line-through decoration-accent decoration-2">$875/mo</span>
                </div>

                <div className="mt-6 rounded-xl bg-secondary/80 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    One-time setup
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">$575</span>
                    <span className="text-xs text-muted-foreground line-through decoration-accent decoration-2">
                      $1,750
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <CTAButton size="xl" className="w-full">
                    Sign Up Today <ArrowRight className="h-5 w-5" />
                  </CTAButton>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Active ISSA Canada members only.
                  </p>
                </div>
              </div>

              {/* Features column */}
              <div className="md:col-span-3 md:border-l md:border-border md:pl-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  What's included
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "Daily AI-sourced sales opportunities in your service area",
                    "24/7 chat with your AI assistant on WhatsApp, Messenger, SMS & Telegram",
                    "Professional estimates backed by ISSA Canada expertise",
                    "Outreach & follow-up assistance",
                    "Your data stays yours — private by design",
                    "Onboarding & setup support included",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-primary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — styled to match Why section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 10% 0%, color-mix(in oklab, var(--brand-blue-bright) 60%, transparent), transparent 55%), radial-gradient(ellipse at 90% 100%, color-mix(in oklab, var(--brand-blue) 50%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Ready when you are
          </div>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Start Building Your{" "}
            <span className="italic text-accent">Sales Pipeline</span> Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/75 sm:text-lg">
            Get daily opportunities, professional estimates, and an AI sales assistant
            designed specifically for cleaning businesses.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
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
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6">
          <img src={issaLogo.url} alt="ISSA Canada" className="h-14 w-auto" />
          <Wordmark className="text-2xl" />
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <img src={owLogo.url} alt="Order of Work" className="h-7 w-7 rounded" />
            <span>Powered by Order of Work · In partnership with ISSA Canada</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Order of Work. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
