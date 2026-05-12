import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <span className="font-display font-bold">ForexVision <span className="text-primary">Pro</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            The premium forex education and trading community. Learn, share, predict, and grow with elite traders.
          </p>
        </div>
        {[
          { h: "Product", l: ["Market", "Courses", "AI Predictions", "Community"] },
          { h: "Company", l: ["About", "Careers", "Contact", "Press"] },
        ].map((c) => (
          <div key={c.h}>
            <h4 className="font-display font-bold text-sm mb-3">{c.h}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.l.map((i) => (
                <li key={i}><a className="hover:text-foreground transition" href="#">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} ForexVision Pro · Trading involves risk.
      </div>
    </footer>
  );
}
