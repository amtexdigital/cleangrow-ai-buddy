import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Radar,
  FileText,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  GraduationCap,
  Library,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";
import owLogo from "@/assets/order-of-work-new.png.asset.json";
import owIcon from "@/assets/ow-icon.png.asset.json";

const OW_URL = "https://orderofwork.com";
const ISSA_URL = "https://www.issa-canada.com/en/955-issa-canada-launches-innovative-new-member-benefit";
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
      { title: "CleaningBusiness.ai · AI Sales Assistant for Canadian Cleaning Businesses" },
      {
        name: "description",
        content:
          "An AI sales assistant built for Canadian cleaning businesses. In partnership with ISSA Canada. Find daily opportunities, send professional estimates, and own your data.",
      },
      { property: "og:title", content: "CleaningBusiness.ai · AI Sales Assistant for Cleaning Businesses" },
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
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    lg: "px-5 py-2.5 text-sm sm:px-6 sm:py-3",
    xl: "px-6 py-3.5 text-base sm:px-8 sm:py-4",
  };
  return (
    <a
      href={STRIPE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap bg-accent text-accent-foreground shadow-[var(--shadow-accent)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}

function Wordmark({ className = "", withTagline = false }: { className?: string; withTagline?: boolean }) {
  return (
    <div className="inline-flex flex-col items-start gap-1">
      <span
        className={`font-black uppercase tracking-[-0.04em] leading-none ${className}`}
      >
        <span className="text-primary">Cleaning</span>
        <span className="text-primary/60">Business</span>
        <span className="italic text-accent">.ai</span>
      </span>
      {withTagline && (
        <a
          href={OW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition hover:opacity-80"
        >
          <img src={owIcon.url} alt="Order of Work" className="h-4 w-auto" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            An Order of Work Product
          </span>
        </a>
      )}
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <Wordmark className="text-2xl sm:text-3xl" withTagline />
            <div className="hidden h-8 w-px bg-border md:block" />
            <a
              href={ISSA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 md:flex"
            >
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Partnered with
              </span>
              <img src={issaLogo.url} alt="ISSA Canada" className="h-10 w-auto" />
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden items-center gap-5 lg:flex">
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
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--brand-navy)] text-paper">
        {/* Layered background: deep navy base, aurora glows, dot grid, diagonal sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 85% 10%, color-mix(in oklab, var(--brand-blue-bright) 55%, transparent), transparent 70%), radial-gradient(45% 60% at 10% 90%, color-mix(in oklab, var(--brand-blue) 45%, transparent), transparent 65%), linear-gradient(160deg, var(--brand-navy) 0%, oklch(0.18 0.10 258) 60%, var(--brand-navy) 100%)",
          }}
        />
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklab, var(--brand-blue-bright) 80%, transparent) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 80%)",
          }}
        />
        {/* Soft floating orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{ background: "color-mix(in oklab, var(--brand-blue-bright) 55%, transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-1/3 bottom-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "color-mix(in oklab, var(--brand-blue) 60%, transparent)" }}
        />
        {/* Diagonal sheen line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, color-mix(in oklab, white 6%, transparent) 50%, transparent 65%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--brand-navy) 70%, transparent))",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pb-24">
          {/* Copy */}
          <div className="relative z-10 lg:col-span-7 xl:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[var(--brand-blue-soft)]" />
              In partnership with ISSA Canada
            </div>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Turn Local Cleaning Opportunities Into{" "}
              <span className="text-[var(--brand-blue-soft)] italic font-black">
                New Contracts
              </span>
            </h1>
            <p className="mt-5 text-lg font-medium text-white/85 sm:text-xl">
              Your AI Sales Assistant for Cleaning Business Growth
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Active ISSA Canada members can now access a specialized Cleaning Business
              AI Assistant. It monitors your service area, surfaces real opportunities,
              and helps you respond faster than anyone else.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton size="xl">
                Sign Up Today <ArrowRight className="h-5 w-5" />
              </CTAButton>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-[var(--brand-blue-soft)]"
              >
                See what's included →
              </a>
            </div>
            <p className="mt-5 text-xs text-white/60">
              Limited-time offer for active ISSA Canada members.
            </p>
          </div>


          {/* Image column, stays right of copy on desktop, below on mobile. Flush to bottom so feet touch next section. */}
          <div className="relative z-0 -mb-16 self-end lg:col-span-5 lg:-mb-56 xl:-mb-64 xl:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-2xl sm:max-w-xl lg:ml-auto lg:max-w-none lg:scale-[1.6] xl:scale-[1.85] lg:origin-bottom-right">
              <img
                src={ownerPortrait}
                alt="Professional cleaner reviewing opportunities on her phone"
                className="relative h-full w-full scale-110 object-contain object-bottom object-center drop-shadow-2xl sm:scale-100 sm:translate-x-[18%] sm:object-right lg:translate-x-[28%]"
              />
            </div>
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
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Why CleaningBusiness.ai
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              More Leads.{" "}
              <span className="italic text-accent">Better Follow-Up.</span>{" "}
              More Wins.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/75 sm:text-lg">
              Your AI Assistant works daily to uncover sales opportunities in your service
              area and help you take action faster.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3">
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
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
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

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Radar,
              title: "AI that monitors your service area",
              body:
                "Your assistant watches your local market 24/7, picking up postings, signals, and conversations from people looking for cleaning. Respond faster than the competition.",
              proof: "Be the first one in the door.",
            },
            {
              icon: MessageCircle,
              title: "Chat with your AI 24/7 on messenger",
              body:
                "Talk to your custom AI assistant any time, right from your preferred channel. Ask for leads, draft a quote, or get follow-up advice wherever you are.",
              proof: "Always on. Always in your pocket.",
            },
            {
              icon: FileText,
              title: "Professional, profitable estimates",
              body:
                "Generate clean, professional estimates priced for your business, backed by ISSA Canada expertise on scope, productivity rates, and margin standards.",
              proof: "Quote with confidence, every time.",
            },
            {
              icon: ShieldCheck,
              title: "Your data stays your own",
              body:
                "This is an AI you own. Your opportunities, your customers, and your pricing never get pooled, resold, or shared with competitors.",
              proof: "Private by design. Yours by default.",
            },
            {
              icon: GraduationCap,
              title: "Daily Support Calls",
              body:
                "Join live sessions designed to help you tune, prompt, and improve your AI assistant. Learn best practices from other cleaning business owners and get hands-on guidance from our team.",
              proof: "Keep your assistant sharp.",
            },
            {
              icon: Library,
              title: "Up skill your assistant",
              body:
                "Unlock a members-only library of skills, prompts, and workflows updated weekly. Add new capabilities to your assistant as your business grows and your needs change.",
              proof: "New skills, every week.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-elegant)] sm:p-7"
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
      <section
        id="pricing"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, var(--paper) 0%, color-mix(in oklab, var(--brand-blue-soft) 75%, var(--paper)) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 12% 18%, color-mix(in oklab, var(--brand-blue-bright) 22%, transparent), transparent 45%), radial-gradient(circle at 88% 82%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 50%)",
          }}
        />
        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <a
              href={ISSA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card/80 px-3 py-1 text-base font-semibold uppercase tracking-wider text-accent backdrop-blur transition hover:bg-card"
            >
              <img src={issaLogo.url} alt="" className="h-5 w-auto" /> Exclusive ISSA Canada Member Offer
            </a>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              One price. Built for ISSA Canada members.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Save over 65% versus standard pricing. Same AI assistant, same support.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border-2 border-accent bg-card shadow-[var(--shadow-accent)] sm:mt-12">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-accent/30 bg-accent/10 px-6 py-4 sm:px-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Sparkles className="h-4 w-4" /> Limited-Time Member Price
              </div>
              <div className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                Save 65%
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-5 md:p-10">
              <div className="md:col-span-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Monthly subscription
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-primary sm:text-6xl">$299</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <div className="mt-2 text-lg font-bold text-muted-foreground">
                  Regularly $875/month
                </div>

                <div className="mt-6 rounded-xl bg-secondary/80 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    One-time setup
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-primary sm:text-6xl">$575</span>
                  </div>
                  <div className="mt-1 text-lg font-bold text-muted-foreground">
                    Regularly $1,750
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

              <div className="md:col-span-3 md:border-l md:border-border md:pl-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  What's included
                </div>
                <ul className="mt-4 space-y-4 text-base sm:text-lg">
                  {[
                    "Daily AI-sourced sales opportunities in your service area",
                    "Professional estimates backed by ISSA Canada expertise",
                    "Outreach and follow-up assistance",
                    "Your data stays yours. Private by design.",
                    "Onboarding and setup support included",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-primary">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 10% 0%, color-mix(in oklab, var(--brand-blue-bright) 60%, transparent), transparent 55%), radial-gradient(ellipse at 90% 100%, color-mix(in oklab, var(--brand-blue) 50%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Ready when you are
          </div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Start Building Your{" "}
            <span className="italic text-accent">Sales Pipeline</span> Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/75 sm:text-lg">
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

      {/* FOOTER — 2 columns */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
          {/* Left column: brand */}
          <div className="flex flex-col items-start gap-4">
            <Wordmark className="text-3xl sm:text-4xl" withTagline />
            <p className="max-w-sm text-sm text-muted-foreground">
              The AI sales assistant built for Canadian cleaning businesses. Powered
              by Order of Work.
            </p>
            <a
              href={OW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition hover:text-primary"
            >
              <img src={owLogo.url} alt="Order of Work" className="h-10 w-auto" />
            </a>
          </div>

          {/* Right column: partnership */}
          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              In partnership with
            </div>
            <a href={ISSA_URL} target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
              <img src={issaLogo.url} alt="ISSA Canada" className="h-14 w-auto" />
            </a>
            <p className="max-w-sm text-sm text-muted-foreground">
              Built with industry expertise from ISSA Canada to help members grow
              profitable cleaning businesses.
            </p>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
            © {new Date().getFullYear()} Order of Work. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
