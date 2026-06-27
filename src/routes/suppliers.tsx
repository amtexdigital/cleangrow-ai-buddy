import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Sparkles,
  ArrowRight,
  Zap,
  Users,
  Megaphone,
  GraduationCap,
  Handshake,
  TrendingUp,
  Building2,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";
import owIcon from "@/assets/ow-icon.png.asset.json";

const SUPPLIER_SIGNUP_URL = "https://orderofwork.com/cleaningbusinessaisuppliers.html";
const OW_URL = "https://orderofwork.com";
const ISSA_URL = "https://www.issa-canada.com/en/955-issa-canada-launches-innovative-new-member-benefit";

const SITE_URL = "https://cleaningbusiness.ai";
const META_DESCRIPTION =
  "Share your cleaning industry expertise with Canadian cleaning companies through AI. Partner with CleaningBusiness.ai to help operators grow using your knowledge and product guidance.";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is this for?",
    a: "Canadian cleaning industry experts, product manufacturers, equipment makers, chemical suppliers, distributors, and service vendors with knowledge to share with commercial and residential cleaning operators.",
  },
  {
    q: "What does it mean to be a supplier partner?",
    a: "Your expertise, product knowledge, training materials, and recommended use cases are shared with cleaning businesses in the program through their AI assistant, so the right guidance reaches the right operator at the right time.",
  },
  {
    q: "How is my knowledge used?",
    a: "We integrate your approved materials so member AI assistants can reference your expertise and product recommendations when building quotes, product mixes, and staff guidance. Your IP stays yours, and members see attribution to your brand.",
  },
  {
    q: "Do members get supplier discounts?",
    a: "Yes. Many partners offer member-only pricing, sample programs, or bundled offers that we promote inside the program.",
  },
  {
    q: "What's expected of me as a supplier?",
    a: "Share your expertise, current product info, member offers, training and safety docs (SDS, WHMIS), and a point of contact for member questions. We handle the AI integration.",
  },
  {
    q: "How do I apply?",
    a: "Tap Apply to Partner and complete the short supplier application. We review every submission and follow up within 1 business day.",
  },
];

export const Route = createFileRoute("/suppliers")({
  head: () => ({
    meta: [
      { title: "Suppliers · CleaningBusiness.ai — Partner with Canadian Cleaning Operators" },
      { name: "description", content: META_DESCRIPTION },
      { property: "og:title", content: "Suppliers · CleaningBusiness.ai" },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/suppliers` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/suppliers` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: SuppliersPage,
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
      href={SUPPLIER_SIGNUP_URL}
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
      <a href="/" className={`font-black uppercase tracking-[-0.04em] leading-none ${className}`}>
        <span className="text-primary">Cleaning</span>
        <span className="text-primary/60">Business</span>
        <span className="italic text-accent">.ai</span>
      </a>
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

const BENEFITS = [
  {
    icon: Megaphone,
    title: "Share expertise where operators need it",
    body: "Your knowledge and product guidance show up when member AI assistants build quotes, recommend product mixes, and answer staff questions, right at the point of decision.",
    proof: "Featured where decisions are made.",
  },
  {
    icon: GraduationCap,
    title: "Train the industry with your knowledge",
    body: "Share spec sheets, SDS, WHMIS, dilution charts, and best-use guidance. Members learn from your expertise and apply it correctly in their operations.",
    proof: "Knowledge that actually gets used.",
  },
  {
    icon: TrendingUp,
    title: "Shape smarter product choices",
    body: "Member operators run regular product mix reviews with our team. Your expertise helps guide which products get evaluated, recommended, and standardized across their accounts.",
    proof: "From insight to standard.",
  },
  {
    icon: Handshake,
    title: "Exclusive member offers",
    body: "Promote member-only pricing, sample programs, bundles, or rebates to a curated group of Canadian cleaning operators actively growing their business.",
    proof: "Exclusive deals, qualified buyers.",
  },
  {
    icon: Users,
    title: "Direct line to operators",
    body: "Join peer calls, contribute to playbooks, and answer member questions. Build relationships with the operators who rely on your category expertise.",
    proof: "Conversations, not cold outreach.",
  },
  {
    icon: Building2,
    title: "Industry-backed",
    body: "Built in partnership with ISSA Canada and powered by Order of Work. Your expertise sits alongside the standards and knowledge members already trust.",
    proof: "Credible by association.",
  },
];

function SuppliersPage() {
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
              <a href="/" className="text-sm font-semibold text-primary/80 transition-colors hover:text-accent">
                For Cleaners
              </a>
              <a href="#benefits" className="text-sm font-semibold text-primary/80 transition-colors hover:text-accent">
                Benefits
              </a>
              <a href="#faq" className="text-sm font-semibold text-primary/80 transition-colors hover:text-accent">
                FAQs
              </a>
            </nav>
            <CTAButton size="lg">Apply to Partner</CTAButton>
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
        <div className="relative mx-auto max-w-4xl px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-24 sm:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-blue-soft)]" />
            For Canadian cleaning industry suppliers
          </div>
          <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Put Your Products{" "}
            <span className="text-[var(--brand-blue-soft)] italic font-black">
              Where Buyers Decide
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Partner with CleaningBusiness.ai to share your expertise with Canadian cleaning operators using AI to grow.
            <br />
            <span className="font-semibold text-white">Now accepting supplier applications.</span>
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CTAButton size="xl">Apply to Partner</CTAButton>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-[var(--brand-blue-soft)]"
            >
              See partner benefits →
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why partner with us
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Your products,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">recommended</span>
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
            by the AI cleaners trust.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Reach operators where decisions get made, inside their AI assistant, their playbooks, and their product mix.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((f) => (
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

      {/* HOW IT WORKS */}
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
              How it works
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.025em] sm:text-5xl">
              Three steps to becoming a{" "}
              <span className="italic text-accent">partner</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Apply",
                body: "Tell us about your company, your product categories, and what you'd like to offer members.",
              },
              {
                step: "02",
                title: "Onboard",
                body: "We collect your product info, training docs, member offers, and recommended use cases, then integrate them into the program.",
              },
              {
                step: "03",
                title: "Get recommended",
                body: "Your products show up in member AI assistants, quotes, product mix reviews, and supplier directories.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.07]"
              >
                <div className="text-sm font-black uppercase tracking-wider text-accent">
                  {s.step}
                </div>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3">
            <CTAButton size="xl">Apply to Partner</CTAButton>
            <p className="text-xs text-primary-foreground/70">
              Applications reviewed weekly
            </p>
          </div>
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

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
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
                Now Accepting Supplier Partners
              </div>
              <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                Be the supplier our{" "}
                <span className="italic text-accent">AI recommends</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                Get your products, training, and offers in front of Canadian cleaning operators at the exact moment they're making buying decisions.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={SUPPLIER_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 sm:px-9 sm:py-4 sm:text-lg"
                >
                  <Zap className="h-5 w-5" />
                  Apply to Partner
                  <ArrowRight className="h-5 w-5" />
                </a>
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
                Supplier partner questions
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
              <CTAButton size="xl">Apply to Partner</CTAButton>
              <p className="mt-3 text-xs text-muted-foreground">
                Reviewed weekly · Questions? cleaningbusinessai@orderofwork.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <Wordmark className="text-3xl sm:text-4xl" withTagline />
            <p className="max-w-sm text-sm text-muted-foreground">
              AI for Canadian Cleaning Business built with over 100 years of industry expertise to help members grow faster.
            </p>
            <a href="/" className="text-sm font-semibold text-accent hover:underline">
              ← For cleaning businesses
            </a>
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
