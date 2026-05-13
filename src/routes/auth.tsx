import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Activity, Mail, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

async function handleGoogle() {
  const result = await lovable.auth.signInWithOAuth("google", {
    redirect_uri: window.location.origin,
  });
  if (result.error) toast.error(result.error.message ?? "Google sign-in failed");
}

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — ForexVision Pro" },
      { name: "description", content: "Sign in to ForexVision Pro using a passwordless magic link." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/` },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setSent(true);
    toast.success("Magic link sent! Check your inbox.");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 py-10 sm:px-6">
        <Link to="/" className="group mb-8 flex items-center gap-2">
          <div className="relative">
            <Activity className="h-6 w-6 text-primary" />
            <div className="absolute inset-0 blur-md bg-primary/40" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            ForexVision<span className="text-primary"> Pro</span>
          </span>
        </Link>

        <div className="w-full rounded-2xl border border-border/60 bg-card/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-neon">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a secure magic link sent to your email — no password needed.
            </p>
          </div>

          {sent ? (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
              <Mail className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h2 className="font-semibold">Check your inbox</h2>
              <p className="mt-1 text-sm text-muted-foreground break-words">
                We sent a magic link to <span className="text-foreground">{email}</span>. Click the link to sign in.
              </p>
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="mt-4 text-xs text-primary hover:underline"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border/60 bg-background/60 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-neon transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending magic link…" : "Send magic link"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                By continuing you agree to our Terms & Privacy Policy.
              </p>
            </form>
          )}
        </div>

        <Link to="/" className="mt-6 text-xs text-muted-foreground hover:text-foreground transition">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
