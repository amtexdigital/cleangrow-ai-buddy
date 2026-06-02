import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle, ArrowLeft, Mail, Sparkles } from "lucide-react";

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

function PaymentReceivedPage() {
  const search = Route.useSearch() as { session_id?: string };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Simple header */}
      <header className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <Wordmark className="text-lg sm:text-2xl" />
          </Link>
        </div>
      </header>

      {/* Success content */}
      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="mx-auto w-full max-w-lg text-center">
          {/* Success icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 sm:h-24 sm:w-24">
            <CheckCircle className="h-10 w-10 text-accent sm:h-12 sm:w-12" />
          </div>

          <h1 className="mt-6 text-3xl font-black uppercase tracking-[-0.025em] text-primary sm:text-4xl">
            Payment Received
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Thank you for joining CleaningBusiness.ai. Your payment was successful and your AI Sales Assistant is being prepared.
          </p>

          {/* Next steps */}
          <div className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6 text-left sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-primary">Check your email</p>
                <p className="text-sm text-muted-foreground">
                  We sent a confirmation to your inbox with your receipt and next steps.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-primary">Your assistant is being set up</p>
                <p className="text-sm text-muted-foreground">
                  Within the next 24 hours you will receive your onboarding call and AI assistant access.
                </p>
              </div>
            </div>
          </div>

          {/* Reference */}
          {search.session_id && (
            <p className="mt-6 text-xs text-muted-foreground">
              Reference: {search.session_id}
            </p>
          )}

          {/* Back link */}
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
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
