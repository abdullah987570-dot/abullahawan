const pairs = [
  { s: "EUR/USD", p: "1.0842", c: "+0.34%" },
  { s: "GBP/USD", p: "1.2675", c: "+0.18%" },
  { s: "USD/JPY", p: "151.23", c: "-0.21%" },
  { s: "XAU/USD", p: "2,384.50", c: "+1.12%" },
  { s: "BTC/USD", p: "67,420", c: "+2.84%" },
  { s: "AUD/USD", p: "0.6612", c: "-0.09%" },
  { s: "USD/CAD", p: "1.3712", c: "+0.05%" },
  { s: "ETH/USD", p: "3,512", c: "+1.62%" },
];

export function TickerTape() {
  const all = [...pairs, ...pairs];
  return (
    <div className="ticker-mask overflow-hidden border-y border-border/60 bg-background/40 py-3 backdrop-blur">
      <div className="flex w-max animate-ticker gap-10 font-mono text-sm">
        {all.map((t, i) => {
          const up = t.c.startsWith("+");
          return (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-muted-foreground">{t.s}</span>
              <span className="text-foreground">{t.p}</span>
              <span style={{ color: up ? "var(--bull)" : "var(--bear)" }}>{t.c}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
