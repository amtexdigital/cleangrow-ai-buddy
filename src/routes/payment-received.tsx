import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ArrowLeft,
  ClipboardList,
  Clock,
  Send,
  HelpCircle,
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
          <img src={owIcon.url} alt="Order of Work" className="h-3.5 w-auto" />
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

      {/* Success content */}
      <main className="flex flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-2xl">
          {/* Top hero card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 text-center shadow-sm sm:p-12">
            {/* Decorative orbs */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />

            {/* Success icon */}
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 ring-4 ring-accent/10 sm:h-24 sm:w-24">
              <CheckCircle className="h-10 w-10 text-accent sm:h-12 sm:w-12" />
            </div>

            <h1 className="relative mt-6 text-4xl font-black uppercase tracking-[-0.03em] text-primary sm:text-5xl">
              Payment Received
            </h1>
            <p className="relative mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Thank you for joining{" "}
              <span className="font-semibold text-primary">CleaningBusiness.ai</span>.
              Your payment was successful and your AI Sales Assistant is being prepared.
            </p>
          </div>

          {/* Timeline / next steps */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-primary">Membership confirmation</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Your membership will be confirmed within{" "}
                  <span className="font-medium text-foreground">1 business day</span>.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Send className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-primary">Onboarding email</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Once confirmed, you will receive an onboarding email with next steps to complete and have your agent set up.
                </p>
              </div>
            </div>
          </div>

          {/* Prep checklist */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <ClipboardList className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-primary">
                While you wait, gather these items
              </h2>
            </div>
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
