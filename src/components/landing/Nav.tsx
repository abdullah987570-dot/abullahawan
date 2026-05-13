import { Link } from "@tanstack/react-router";
import { Activity, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { User } from "@supabase/supabase-js";

export function Nav() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    void supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Signed out");
  }

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
          {user ? (
            <>
              <span className="hidden sm:inline-flex max-w-[160px] truncate text-sm text-muted-foreground" title={user.email ?? ""}>
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-background sm:px-4 sm:text-sm"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition">
                Sign in
              </Link>
              <Link to="/auth" className="whitespace-nowrap rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-neon transition hover:opacity-90 sm:px-4 sm:text-sm">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
