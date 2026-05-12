import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
        <Link to="/" className="group flex min-w-0 items-center gap-2">
          <div className="relative">
            <Activity className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            <div className="absolute inset-0 blur-md bg-primary/40 group-hover:bg-primary/60 transition" />
          </div>
          <span className="truncate whitespace-nowrap font-display text-sm font-bold tracking-tight sm:text-lg">
            ForexVision<span className="text-primary"> Pro</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#market" className="hover:text-foreground transition">Market</a>
          <a href="#courses" className="hover:text-foreground transition">Courses</a>
          <a href="#ai" className="hover:text-foreground transition">AI Predictions</a>
          <a href="#community" className="hover:text-foreground transition">Community</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/auth" className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition">
            Sign in
          </Link>
          <Link to="/auth" className="whitespace-nowrap rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-neon transition hover:opacity-90 sm:px-4 sm:text-sm">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
