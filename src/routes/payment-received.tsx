import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ArrowLeft,
  Mail,
  Calendar,
  Video,
  Zap,
  HelpCircle,
  Sparkles,
  FileText,
  Clock,
  Check,
} from "lucide-react";

import issaLogo from "@/assets/issa-canada.png.asset.json";
import owIcon from "@/assets/ow-icon.png.asset.json";

export const Route = createFileRoute("/payment-received")({
  head: () => ({
    meta: [
      { title: "Payment Received — CleaningBusiness.ai" },
      {
        name: "description",
        content:
          "Thank you for signing up. Your payment has been received and your AI Sales Assistant is being prepared.",
      },
      { property: "og:title", content: "Payment Received — CleaningBusiness.ai" },
      {
        property: "og:description",
        content:
          "Thank you for signing up. Your payment has been received and your AI Sales Assistant is being prepared.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/payment-received" },
    ],
    links: [{ rel: "canonical", href: "/payment-received" }],
  }),
  component: PaymentReceivedPage,
});

const OW_URL = "https://orderofwork.com";
const ISSA_URL = "https://www.issa-canada.com/en/955-issa-canada-launches-innovative-new-member-benefit";

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

const ONBOARDING_DATE = "June 22nd, 2026";
const ONBOARDING_TIME = "Noon EST";

const TIMELINE_STEPS = [
  {
    icon: Mail,
    title: "Onboarding email arrives",
    body: "Within one business day, you'll receive an email with your personalized onboarding form. Set aside about an hour to complete it thoroughly — the more detail you provide, the better your AI Sales Assistant will perform.",
  },
  {
    icon: FileText,
    title: "Complete your onboarding form",
    body: "Share your service list, service areas, ideal customer profile, pricing approach, and any existing sales materials. This information trains your assistant to sound like you and sell like you.",
  },
  {
    icon: Video,
    title: "Join your onboarding call",
    body: `On ${ONBOARDING_DATE} at ${ONBOARDING_TIME}, join our live onboarding session. We'll walk through how to use your agent, where to find leads, how to create quotes, and how to get the most out of every feature.`,
    highlight: true,
  },
  {
    icon: Zap,
    title: "Your agent goes live",
    body: "After the call, your AI Sales Assistant will be activated and ready to monitor your service area, surface opportunities, and help you respond faster than the competition.",
  },
];

const PREP_ITEMS = [
  "Business logo",
  "Business website URL",
  "Google Business Profile link",
  "Service list",
  "Service area list",
  "Sales brochure or capability statement",
  "Best customer examples or case studies",
  "Competitor list with websites",
];

function PaymentReceivedPage() {
  const search = Route.useSearch() as { session_id?: string };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <Link to="/">
              <Wordmark className="text-lg sm:text-3xl" />
            </Link>
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
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero success section */}
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

        <div className="relative mx-auto max-w-3xl px-4 pt-14 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-blue-soft)]" />
            Welcome to CleaningBusiness.ai
          </div>

          <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/10 sm:h-24 sm:w-24">
            <CheckCircle className="h-10 w-10 text-[var(--brand-blue-soft)] sm:h-12 sm:w-12" />
          </div>

          <h1 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl">
            Payment Received
          </h1>
          <p className="mt-3 text-xl font-semibold text-[var(--brand-blue-soft)] sm:text-2xl">
            You're in. Let's get your AI Sales Assistant ready.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Thank you for joining{" "}
            <span className="font-semibold text-white">CleaningBusiness.ai</span>.
            Your payment was successful, your ISSA / CHHA membership is included, and your AI Sales Assistant is being prepared. Our team will be with you every step of the way.
          </p>
        </div>
      </section>

      {/* Next steps */}
      <main className="flex flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What happens next
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Your setup timeline
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Here's exactly what to expect now — and how to prepare for your onboarding call.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {TIMELINE_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-start gap-4 rounded-2xl border p-5 shadow-sm transition-all hover:-translate-y-0.5 sm:gap-5 sm:p-6 ${
                    step.highlight
                      ? "border-accent bg-accent/5 shadow-[var(--shadow-accent)]"
                      : "border-border bg-card hover:border-accent/40 hover:shadow-[var(--shadow-elegant)]"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${
                      step.highlight ? "bg-accent text-accent-foreground" : "bg-primary/10"
                    }`}
                  >
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${step.highlight ? "" : "text-primary"}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <p className="text-base font-semibold text-primary sm:text-lg">
                        {step.title}
                      </p>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Onboarding call highlight card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-accent bg-gradient-to-br from-accent/10 to-accent/5 p-6 shadow-[var(--shadow-accent)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Save the date
                </p>
                <p className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                  {ONBOARDING_DATE} at {ONBOARDING_TIME}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your onboarding call is the fastest way to get up and running. We'll cover how to find leads, write quotes, manage conversations, and customize your agent so it works the way you do.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N2JjajYzZTAyOWw4NnJzdnIxaTMxbjlramsgZnJhbmt6QG9yZGVyb2Z3b3JrLmNvbQ&tmsrc=frankz%40orderofwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Calendar className="h-3.5 w-3.5" /> Add to Google Calendar
                  </a>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-medium text-primary">
                    <Video className="h-3.5 w-3.5" /> Video link will be emailed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Prep checklist */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-primary">
                While you wait, gather these items
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Having these ready before you fill out the onboarding form will save you time and help us build a better agent for your business.
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {PREP_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-primary/5 px-4 py-2.5 text-sm font-medium text-foreground"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-primary">Have a question or need support?</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Contact{" "}
                <a
                  href="mailto:support@orderofwork.com"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent/80"
                >
                  Order of Work at support@orderofwork.com
                </a>
              </p>
            </div>
          </div>

          {/* Reference */}
          {search.session_id && (
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Reference: {search.session_id}
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <Wordmark className="text-3xl sm:text-4xl" withTagline />
            <p className="max-w-sm text-sm text-muted-foreground">
              Built with over a 100 years of industry expertise to help members grow
              profitable cleaning businesses.
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
