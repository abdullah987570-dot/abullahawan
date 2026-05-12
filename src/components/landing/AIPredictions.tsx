import { motion } from "framer-motion";
import { Brain, TrendingDown, TrendingUp } from "lucide-react";

const preds = [
  { pair: "EUR/USD", signal: "BUY", conf: 87, target: "1.0890", sl: "1.0820", trend: "Bullish continuation" },
  { pair: "XAU/USD", signal: "BUY", conf: 92, target: "2,420", sl: "2,360", trend: "Strong bullish momentum" },
  { pair: "USD/JPY", signal: "SELL", conf: 78, target: "150.10", sl: "151.90", trend: "Reversal setup" },
  { pair: "BTC/USD", signal: "BUY", conf: 81, target: "70,500", sl: "65,800", trend: "Breakout pending" },
  { pair: "GBP/USD", signal: "SELL", conf: 64, target: "1.2580", sl: "1.2730", trend: "Bearish divergence" },
  { pair: "AUD/USD", signal: "SELL", conf: 71, target: "0.6540", sl: "0.6660", trend: "Range rejection" },
];

export function AIPredictions() {
  return (
    <section id="ai" className="relative py-16 sm:py-24">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent tracking-widest">
              <Brain className="h-3.5 w-3.5" /> AI ENGINE · LIVE
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Future market predictions, <span className="text-gradient">powered by AI</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Sentiment, technicals, and macro news fused into actionable signals with confidence scores.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {preds.map((p, i) => {
            const buy = p.signal === "BUY";
            const color = buy ? "var(--bull)" : "var(--bear)";
            return (
              <motion.div
                key={p.pair}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass group relative overflow-hidden rounded-2xl p-4 transition hover:border-primary/40 sm:p-6"
              >
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition"
                  style={{ background: color }}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-display font-bold text-lg">{p.pair}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{p.trend}</div>
                  </div>
                  <div
                    className="flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-mono text-xs font-bold sm:px-3 sm:text-sm"
                    style={{
                      color,
                      background: `color-mix(in oklab, ${color} 18%, transparent)`,
                    }}
                  >
                    {buy ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                    {p.signal}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-muted-foreground">Confidence</span>
                    <span style={{ color }}>{p.conf}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.conf}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                      className="h-full rounded-full"
                      style={{ background: color }}
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="rounded-lg bg-muted/40 p-2.5">
                    <div className="text-muted-foreground">TARGET</div>
                    <div className="text-foreground font-semibold mt-0.5">{p.target}</div>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-2.5">
                    <div className="text-muted-foreground">STOP LOSS</div>
                    <div className="text-foreground font-semibold mt-0.5">{p.sl}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
