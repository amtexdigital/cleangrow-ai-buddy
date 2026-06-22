import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Radar,
  FileText,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  GraduationCap,
  Library,
  ArrowRight,
  Zap,
  MapPin,
  Users,
  Tag,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";
import owIcon from "@/assets/ow-icon.png.asset.json";
import ownerPortrait from "@/assets/owner-portrait.png";


const SIGNUP_URL = "https://orderofwork.com/cleaningbusinessai";
const OW_URL = "https://orderofwork.com";
const ISSA_URL = "https://www.issa-canada.com/en/955-issa-canada-launches-innovative-new-member-benefit";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#why" },
  { label: "FAQs", href: "#faq" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CleaningBusiness.ai · Invite-Only AI Sales Agent for Canadian Cleaning Businesses" },
      {
        name: "description",
        content:
          "An invite-only AI sales agent for Canadian cleaning businesses, in partnership with ISSA Canada. One member per municipality. Apply to join.",
      },
      { property: "og:title", content: "CleaningBusiness.ai · Invite-Only AI Sales Agent for Cleaning Businesses" },
      {
        property: "og:description",
        content:
          "One cleaning company per municipality. Get an AI sales agent, exclusive resources, supplier discounts, and a peer group of operators. Apply to join.",
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
      href={SIGNUP_URL}
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

const FAQS: { q: string; a: string }[] = [
  {
    q: "Why is the program invite-only?",
    a: "We work with one cleaning company per municipality so the AI agent, the leads it surfaces, and the peer expertise stay exclusive to you in your market. Spots are limited and reviewed on a rolling basis.",
  },
  {
    q: "What do I actually get as a member?",
    a: "Your own AI sales agent trained on ISSA & CHHA expertise, an AI Company working closely with you to ensure success, access to a private library of resources and playbooks, supplier discounts on products and equipment, and a peer group of other cleaning business owners in the program.",
  },
  {
    q: "What does \"one company per municipality\" mean?",
    a: "Once a cleaning business in a given municipality is accepted, we close that area to new applicants. If your area is still open, you're early, if it isn't, you can request to be added to the waitlist.",
  },
  {
    q: "Who is this built for?",
    a: "Established Canadian cleaning business owners who want to grow with structured sales support, modern AI tooling, and a community of operators, not solo experimenters looking for a generic chatbot.",
  },
  {
    q: "How do I apply?",
    a: "Tap Apply to Join and complete the short application. We review every submission, confirm your municipality is still open, and follow up with next steps.",
  },
  {
    q: "What happens after I apply?",
    a: "You'll hear back from our team within 1 business day to confirm fit, walk through what's included, and get you onboarded with your AI agent, your resources, and your peer group.",
  },
  {
    q: "How much does it cost?",
    a: "The program is $299 CAD per month with a one-time setup fee of $875. There's no contract, so you can stay as long as it's working for you.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <Wordmark className="text-lg sm:text-3xl" />
            <div className="hidden h-8 w-px bg-border md:block" />
            <a
              href={ISSA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 md:flex"
            >
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                In Partnership With
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
            <CTAButton size="lg">Apply to Join</CTAButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--brand-navy)] text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 85% 10%, color-mix(in oklab, var(--brand-blue-bright) 55%, transparent), transparent 70%), radial-gradient(45% 60% at 10% 90%, color-mix(in oklab, var(--brand-blue) 45%, transparent), transparent 65%), linear-gradient(160deg, var(--brand-navy) 0%, oklch(0.18 0.10 258) 60%, var(--brand-navy) 100%)",
          }}
        />
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, color-mix(in oklab, white 6%, transparent) 50%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--brand-navy) 70%, transparent))",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pb-24">
          <div className="relative z-10 lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[var(--brand-blue-soft)]" />
              Invite-only · In partnership with ISSA Canada
            </div>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
              AI Sales Agent for{" "}
              <span className="text-[var(--brand-blue-soft)] italic font-black">
                Cleaning Businesses
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              AI Assistant program for Canadian cleaning business owners.
              <br />
              <span className="font-semibold text-white">Now accepting applications.</span>
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton size="xl">Apply to Join</CTAButton>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-[var(--brand-blue-soft)]"
              >
                See what's included →
              </a>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/70">
              <MapPin className="h-3.5 w-3.5 text-[var(--brand-blue-soft)]" />
              Limited to one cleaning business per municipality · Applications reviewed weekly
            </p>
          </div>

          <div className="relative z-0 -mb-16 self-end lg:col-span-6 lg:-mb-56 xl:-mb-64 xl:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg lg:ml-auto lg:max-w-none lg:scale-[1.47] xl:scale-[1.58] lg:origin-bottom-right lg:translate-x-[28%] xl:translate-x-[32%]">
              <img
                src={ownerPortrait}
                alt="Professional cleaner reviewing opportunities on her phone"
                className="relative h-full w-full scale-110 object-contain object-bottom drop-shadow-2xl sm:scale-100 lg:object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="why" />

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What members get
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Your Own AI, Working Only For{" "}
            <span
              className="relative inline-block"
            >
              <span className="relative z-10">Your</span>
              <svg
                aria-hidden
                viewBox="0 0 120 14"
                preserveAspectRatio="none"
                className="absolute left-0 right-0 -bottom-2 h-3 w-full text-accent"
              >
                <path
                  d="M2 8 C 25 2, 60 12, 118 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Cleaning Business.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Knows your market, knows your industry, and only works in your municipality.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Radar,
              title: "Monitors your service area",
              body:
                "Your AI agent watches your local market 24/7, picking up postings, signals, and conversations from people looking for cleaning. Respond faster than the competition.",
              proof: "Be the first one in the door.",
            },
            {
              icon: MessageCircle,
              title: "An AI Company in your corner",
              body:
                "You don't just get software. You get an AI Company working closely with you to ensure success, onboarding, tuning, and ongoing strategy from people who know cleaning.",
              proof: "Real humans + real AI, on your side.",
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
                "Your AI uses publicly available market information combined with ISSA/CHHA industry expertise. We don't collect private business data, only what you choose to share, to find opportunities, suggest pricing, and draft emails and phone scripts based on proven sales expertise.",
              proof: "Private by design. Yours by default.",
            },
            {
              icon: Tag,
              title: "Supplier discounts & resources",
              body:
                "Members unlock product and equipment supplier discounts, plus a private library of skills, playbooks, and workflows updated regularly so your AI keeps getting sharper.",
              proof: "Exclusive perks, members only.",
            },
            {
              icon: Users,
              title: "A peer group of operators",
              body:
                "Join a private group of other cleaning business owners in the program, share what's working, swap tactics, and learn from operators who've already grown.",
              proof: "You're not building alone.",
            },
            {
              icon: GraduationCap,
              title: "Live support calls",
              body:
                "Join live sessions designed to help you tune, prompt, and improve your AI agent. Hands-on guidance from our team and the wider member group.",
              proof: "Keep your AI sharp.",
            },
            {
              icon: Library,
              title: "Members-only library",
              body:
                "Tap into a growing library of cleaning-specific sales scripts, pricing models, and AI skills built from ISSA & CHHA expertise.",
              proof: "New skills, every week.",
            },
            {
              icon: MapPin,
              title: "One per municipality",
              body:
                "We accept only one cleaning company per municipality. Once your area is taken, it's closed, so being early matters.",
              proof: "Exclusive market access.",
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

      {/* APPLY BANNER + FAQ */}
      <section
        id="apply"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, var(--paper) 0%, color-mix(in oklab, var(--brand-blue-soft) 75%, var(--paper)) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 12% 18%, color-mix(in oklab, var(--brand-blue-bright) 22%, transparent), transparent 45%), radial-gradient(circle at 88% 82%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 50%)",
          }}
        />
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

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          {/* CONVERSION BANNER */}
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-accent/20 bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 0%, color-mix(in oklab, var(--brand-blue-bright) 55%, transparent), transparent 55%), radial-gradient(ellipse at 20% 100%, color-mix(in oklab, var(--accent) 45%, transparent), transparent 55%)",
              }}
            />
            <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-blue-soft)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-blue-soft)]" />
                </span>
                Now Accepting Applications
              </div>
              <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Don't Let This Opportunity{" "}
                <span className="italic text-accent">Pass You By</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                Apply to join and get your own AI sales agent, an AI Company working closely with you, supplier discounts, members-only resources, and a peer group of other cleaning operators helping you grow your business.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 sm:px-9 sm:py-4 sm:text-lg"
                >
                  <Zap className="h-5 w-5" />
                  Apply to Join
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="text-xs font-medium text-primary-foreground/70">
                  Applications reviewed weekly · Spots close as municipalities fill
                </p>
              </div>
            </div>
          </div>

          {/* FAQS */}
          <div id="faq" className="mx-auto mt-14 max-w-3xl sm:mt-16">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Frequently Asked
              </div>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                What members usually ask first
              </h3>
            </div>

            <div className="mt-10 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/40 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="text-base font-semibold text-primary sm:text-lg">
                      {f.q}
                    </span>
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <CTAButton size="xl">Apply to Join</CTAButton>
              <p className="mt-3 text-xs text-muted-foreground">
                One company per municipality · Reviewed weekly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY / VALUE STRIP */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 10% 0%, color-mix(in oklab, var(--brand-blue-bright) 60%, transparent), transparent 55%), radial-gradient(ellipse at 90% 100%, color-mix(in oklab, var(--brand-blue) 50%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
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
              Your AI agent and AI Company work together to uncover opportunities in your service area and help you act faster than anyone else in your market.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3">
            {[
              {
                strike: "Guessing where to look.",
                replace: "AI scans your service area for new opportunities.",
              },
              {
                strike: "Missing potential contracts.",
                replace: "Real-time alerts on new opportunities.",
              },
              {
                strike: "Selling alone.",
                replace: "An AI Company + peer group in your corner.",
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

          <div className="mt-12 flex flex-col items-center gap-3">
            <CTAButton size="xl">Apply to Join</CTAButton>
            <p className="text-xs text-primary-foreground/70">
              Invite-only · One cleaning company per municipality.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <Wordmark className="text-3xl sm:text-4xl" withTagline />
            <p className="max-w-sm text-sm text-muted-foreground">
              An invite-only program built with over 100 years of industry expertise to help members grow profitable cleaning businesses.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              In partnership with
            </div>
            <a href={ISSA_URL} target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
              <img src={issaLogo.url} alt="ISSA Canada" className="h-14 w-auto" />
            </a>
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
