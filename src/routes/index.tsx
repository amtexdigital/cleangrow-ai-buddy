import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Target,
  TrendingUp,
  Users,
  Compass,
  Sparkles,
  X,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";
import owLogo from "@/assets/order-of-work.png.asset.json";

const STRIPE_URL = "https://buy.stripe.com/dRm9AVgJigVObCyebt8bS05";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CleaningBusiness.ai — AI Sales Assistant for Canadian Cleaning Businesses" },
      {
        name: "description",
        content:
          "An AI sales assistant built for Canadian cleaning businesses. In partnership with ISSA Canada — find daily opportunities, know your competition, and close more deals.",
      },
      { property: "og:title", content: "CleaningBusiness.ai — AI Sales Assistant for Cleaning Businesses" },
      {
        property: "og:description",
        content:
          "Exclusive ISSA Canada member pricing. Daily sales opportunities, competitor insights, and outreach support — purpose-built for cleaning businesses.",
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

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2">
              <img src={owLogo.url} alt="Order of Work" className="h-9 w-9 rounded-md" />
              <span className="hidden text-base font-semibold tracking-tight sm:inline">
                CleaningBusiness<span className="text-accent">.ai</span>
              </span>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="hidden items-center gap-2 sm:flex">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                In partnership with
              </span>
              <img src={issaLogo.url} alt="ISSA Canada" className="h-8 w-auto" />
            </div>
          </div>
          <CTAButton size="lg">
            Sign Up <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              In partnership with ISSA Canada
            </div>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-primary sm:text-6xl lg:text-7xl xl:text-8xl">
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
              Assistant built to help you find more opportunities, understand your market,
              and close more deals.
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

          {/* Hero visual: mock AI dashboard */}
          <div className="relative">
            <div
              className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Today's Opportunities
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">Toronto, ON</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { name: "Maple Ridge Medical Centre", tag: "Janitorial · 12,000 sqft", score: 92 },
                  { name: "Riverside Office Tower", tag: "Daily cleaning · RFQ open", score: 87 },
                  { name: "Northgate School Board", tag: "Facility services", score: 81 },
                ].map((o) => (
                  <div
                    key={o.name}
                    className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-3"
                  >
                    <div>
                      <div className="text-sm font-semibold text-primary">{o.name}</div>
                      <div className="text-xs text-muted-foreground">{o.tag}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-accent">{o.score}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        match
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg p-3" style={{ background: "var(--gradient-brand)" }}>
                <div className="flex items-start gap-2 text-primary-foreground">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                  <div className="text-xs leading-relaxed">
                    <span className="font-semibold">AI Suggestion:</span> Draft an outreach email
                    to Maple Ridge — they renew contracts in Q3.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl border border-border bg-card shadow-[var(--shadow-accent)] sm:flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">65%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Member Savings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            More Leads. Better Follow-Up. More Wins.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-primary-foreground/70">
            Your AI Assistant works daily to uncover sales opportunities in your service area
            and help you take action faster.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "No more guessing where to look.",
              "No more missing potential contracts.",
              "No more trying to manage sales alone.",
            ].map((line) => (
              <div
                key={line}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <X className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Built to Help You Grow
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything you need to win more contracts
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Find New Sales Opportunities Daily",
              body:
                "Discover potential customers in your service area who may need cleaning, janitorial, or facility services.",
            },
            {
              icon: Users,
              title: "Know Your Competition",
              body:
                "Get insight into local competitors so you can position your business more effectively.",
            },
            {
              icon: TrendingUp,
              title: "Close Deals Faster",
              body:
                "Get help with outreach, follow-up, proposals, objections, and sales next steps.",
            },
            {
              icon: Compass,
              title: "Stay Focused",
              body:
                "Use your AI Assistant as a personal sales advisor to help you prioritize the right opportunities and move deals forward.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
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
                  "Competitor insights for your service area",
                  "Outreach, follow-up & proposal assistance",
                  "Personal AI sales advisor",
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
            Get daily opportunities, competitor insights, and sales support designed
            specifically for cleaning businesses.
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
              <div className="font-semibold text-primary">CleaningBusiness.ai</div>
              <div className="text-xs text-muted-foreground">
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
