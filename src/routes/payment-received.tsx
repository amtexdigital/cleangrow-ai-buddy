import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ArrowLeft,
  ClipboardList,
  Mail,
  Zap,
  HelpCircle,
  Sparkles,
  FileText,
} from "lucide-react";

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

import owIcon from "@/assets/ow-icon.png.asset.json";

function Wordmark({ className = "", withTagline = false }: { className?: string; withTagline?: boolean }) {
  return (
    <div className="inline-flex flex-col items-center gap-1">
      <span
        className={`font-black uppercase tracking-[-0.04em] leading-none ${className}`}
      >
        <span className="text-primary">Cleaning</span>
        <span className="text-primary/60">Business</span>
        <span className="italic text-accent">.ai</span>
      </span>
      {withTagline && (
        <a
          href="https://orderofwork.com"
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

const TIMELINE_STEPS = [
  {
    icon: Mail,
    title: "Onboarding email",
    body: "You will receive a detailed questionnaire by email. Set aside about an hour to complete it thoroughly — the more detail you provide, the better your custom agent will perform.",
    accent: "bg-[var(--brand-blue-bright)]/10 text-[var(--brand-blue-soft)]",
  },
  {
    icon: FileText,
    title: "We build & train your agent",
    body: "Once you submit your questionnaire, our team will configure and train your custom AI Sales Assistant. This takes up to 2 business days.",
    accent: "bg-[var(--brand-blue)]/10 text-[var(--brand-blue-soft)]",
  },
  {
    icon: Zap,
    title: "Your agent goes live",
    body: "Your AI Sales Assistant is ready to engage. It will start monitoring your service area, surfacing opportunities, and helping you respond faster than the competition.",
    accent: "bg-white/10 text-[var(--brand-blue-soft)]",
  },
];

function PaymentReceivedPage() {
  const search = Route.useSearch() as { session_id?: string };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 sm:px-6 sm:py-6">
          <Link to="/">
            <Wordmark className="text-3xl sm:text-5xl" withTagline />
          </Link>
        </div>
      </header>

      {/* Hero success section — matches main site hero colour scheme */}
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

        <div className="relative mx-auto max-w-3xl px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-16">
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
            What to expect next
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Thank you for joining{" "}
            <span className="font-semibold text-white">CleaningBusiness.ai</span>.
            Your payment was successful, your ISSA / CHHA membership is included, and your AI Sales Assistant is being prepared.
          </p>
        </div>
      </section>

      {/* Timeline / next steps */}
      <main className="flex flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="text-center text-2xl font-bold text-primary">
            Your setup timeline
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
            Here is exactly what happens now — and how long each step takes.
          </p>

          <div className="mt-8 space-y-6">
            {TIMELINE_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:gap-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
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

          {/* Prep checklist */}
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <ClipboardList className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-primary">
                While you wait, gather these items
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              You will need these details for the onboarding questionnaire. Having them ready will save you time.
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
              <p className="font-semibold text-primary">Have a Question or Need Support?</p>
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

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground sm:px-6">
          &copy; {new Date().getFullYear()} CleaningBusiness.ai. In partnership with ISSA Canada.
        </div>
      </footer>
    </div>
  );
}
