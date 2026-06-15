import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
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
  Loader2,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";

import owIcon from "@/assets/ow-icon.png.asset.json";
import { submitContactApplication } from "@/lib/contact.functions";

const OW_URL = "https://orderofwork.com";
const ISSA_URL = "https://www.issa-canada.com/en/955-issa-canada-launches-innovative-new-member-benefit";
import ownerPortrait from "@/assets/owner-portrait.png";

const APPLY_ANCHOR = "#apply";

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
      href={APPLY_ANCHOR}
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
            <CTAButton size="lg">
              Apply to Join <ArrowRight className="h-4 w-4" />
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
          <div className="relative z-10 lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[var(--brand-blue-soft)]" />
              Early Access Program · In partnership with ISSA Canada
            </div>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
              AI Sales Agent for{" "}
              <span className="text-[var(--brand-blue-soft)] italic font-black">
                Cleaning Businesses
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Find local leads, create profitable estimates, and close more cleaning contracts — with an AI agent built for the cleaning industry.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton size="xl">
                Apply to Join <ArrowRight className="h-5 w-5" />
              </CTAButton>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-[var(--brand-blue-soft)]"
              >
                See what's included →
              </a>
            </div>
            <p className="mt-5 text-xs text-white/60">
              Early Access Program · Limited-time ISSA Canada member offer: $299/month + setup.
            </p>

          </div>


          {/* Image column, stays right of copy on desktop, below on mobile. Flush to bottom so feet touch next section. */}
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

      {/* (Why section moved below Pricing) */}
      <div id="why" />


      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Built for cleaning businesses
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Your Own AI Assistant for Your Cleaning Business.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Knows your market, knows your industry, and works only for you to grow your business.
          </p>

        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Radar,
              title: "Monitors your service area",
              body:
                "Your assistant watches your local market 24/7, picking up postings, signals, and conversations from people looking for cleaning. Respond faster than the competition.",
              proof: "Be the first one in the door.",
            },
            {
              icon: MessageCircle,
              title: "Available 24/7 through Chat",
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
              <img src={issaLogo.url} alt="" className="h-5 w-auto" /> In partnership with ISSA Canada
            </a>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Apply to join the Early Access Program
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell us about your cleaning business and we'll be in touch to confirm your spot. Includes your AI sales assistant, ISSA-backed estimates, and a 1-year ISSA / CHHA membership.
            </p>
          </div>

          <div id="apply" className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border-2 border-accent bg-card shadow-[var(--shadow-accent)] sm:mt-12">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-accent/30 bg-accent/10 px-6 py-4 sm:px-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Sparkles className="h-4 w-4" /> Early Access Program
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-5 md:p-10">
              <div className="md:col-span-3 md:flex md:flex-col md:pr-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Apply to join
                </div>
                <h3 className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                  Tell us about your business
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Spots in the Early Access Program are limited. Share a few details and our team will reach out to confirm next steps.
                </p>
                <ApplyForm />
              </div>

              <div className="md:col-span-2 md:border-l md:border-border md:pl-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  What's Included
                </div>
                <h3 className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                  Everything to win more contracts
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "AI hunts down daily cleaning opportunities in your service area",
                    "Competitor intel on who's bidding around you",
                    "Smarter quotes powered by ISSA & CHHA expertise",
                    "Create client winning quotes faster and close more deals",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-primary">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl bg-secondary/80 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Program cost
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-3xl font-black text-primary">$299</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <div className="mt-1 text-xs font-medium text-muted-foreground line-through">
                      Regularly $875/month
                    </div>
                  </div>

                  <div className="rounded-xl border border-accent/30 bg-accent/5 p-4">
                    <p className="text-sm text-primary">
                      <span className="font-semibold text-accent">One-time setup:</span>{" "}
                      $875 (includes 1-year ISSA / CHHA membership)
                    </p>
                    <p className="mt-2 text-xs text-primary/80">
                      Active ISSA Canada member? Ask us for your promo code to reduce the setup fee from $875 to $575.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHY / VALUE STRIP (below pricing) */}
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

          <div className="mt-12 flex flex-col items-center gap-3">
            <CTAButton size="xl">
              Apply to Join <ArrowRight className="h-5 w-5" />
            </CTAButton>
            <p className="text-xs text-primary-foreground/70">
              Early Access Program · Limited spots for active ISSA Canada members.
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
              The AI sales assistant built for Canadian cleaning businesses.{" "}
              <a
                href={OW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition hover:text-primary"
              >
                Powered by Order of Work
              </a>
              .
            </p>
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

type ApplyFormState = {
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  cities_serviced: string;
  number_of_employees: string;
  why_consider: string;
};

const INITIAL_FORM: ApplyFormState = {
  business_name: "",
  contact_name: "",
  email: "",
  phone: "",
  cities_serviced: "",
  number_of_employees: "",
  why_consider: "",
};

function ApplyForm() {
  const submit = useServerFn(submitContactApplication);
  const [form, setForm] = useState<ApplyFormState>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof ApplyFormState>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      await submit({ data: form });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 rounded-2xl border border-accent/40 bg-accent/10 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-6 w-6" strokeWidth={3} />
        </div>
        <h4 className="mt-4 text-lg font-bold text-primary">Application received</h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks! We'll review your application and reach out shortly to confirm next steps.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-primary shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={onSubmit} className="mt-5 grid gap-3 sm:grid-cols-2">
      <Field label="Business name" required>
        <input
          required
          maxLength={200}
          value={form.business_name}
          onChange={update("business_name")}
          className={inputClass}
        />
      </Field>
      <Field label="Your name" required>
        <input
          required
          maxLength={200}
          value={form.contact_name}
          onChange={update("contact_name")}
          className={inputClass}
        />
      </Field>
      <Field label="Your email" required>
        <input
          required
          type="email"
          maxLength={255}
          value={form.email}
          onChange={update("email")}
          className={inputClass}
        />
      </Field>
      <Field label="Your phone" required>
        <input
          required
          type="tel"
          maxLength={40}
          value={form.phone}
          onChange={update("phone")}
          className={inputClass}
        />
      </Field>
      <Field label="Canadian cities you service" required className="sm:col-span-2">
        <input
          required
          maxLength={500}
          value={form.cities_serviced}
          onChange={update("cities_serviced")}
          placeholder="e.g. Toronto, Mississauga, Hamilton"
          className={inputClass}
        />
      </Field>
      <Field label="Number of employees" required>
        <input
          required
          maxLength={50}
          value={form.number_of_employees}
          onChange={update("number_of_employees")}
          placeholder="e.g. 12"
          className={inputClass}
        />
      </Field>
      <div className="hidden sm:block" />
      <Field label="Why we should consider you" required className="sm:col-span-2">
        <textarea
          required
          maxLength={2000}
          rows={4}
          value={form.why_consider}
          onChange={update("why_consider")}
          className={inputClass}
        />
      </Field>

      {error && (
        <p className="text-sm text-destructive sm:col-span-2">{error}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-all hover:brightness-110 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Submitting…
            </>
          ) : (
            <>
              Apply to Join <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          We'll only use your details to follow up about the Early Access Program.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-semibold text-primary">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
