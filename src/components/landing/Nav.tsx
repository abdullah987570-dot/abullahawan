import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Activity className="h-6 w-6 text-primary" />
            <div className="absolute inset-0 blur-md bg-primary/40 group-hover:bg-primary/60 transition" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
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
          <button className="bg-gradient-primary text-primary-foreground font-semibold text-sm px-4 py-2 rounded-lg shadow-neon hover:opacity-90 transition">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
