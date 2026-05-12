import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Activity className="h-6 w-6 text-primary" />
            <div className="absolute inset-0 blur-md bg-primary/40 group-hover:bg-primary/60 transition" />
          </div>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
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
          <button className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition">
            Sign in
          </button>
          <button className="bg-gradient-primary text-primary-foreground font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg shadow-neon hover:opacity-90 transition whitespace-nowrap">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
