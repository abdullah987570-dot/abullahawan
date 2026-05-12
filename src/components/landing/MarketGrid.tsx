import { motion } from "framer-motion";

const data = [
  { pair: "EUR/USD", price: "1.0842", chg: "+0.34%", spark: [40, 42, 41, 44, 46, 45, 48, 50, 49, 52], up: true },
  { pair: "GBP/USD", price: "1.2675", chg: "+0.18%", spark: [50, 48, 52, 51, 54, 53, 55, 54, 57, 56], up: true },
  { pair: "USD/JPY", price: "151.23", chg: "-0.21%", spark: [60, 58, 59, 56, 57, 54, 55, 52, 53, 50], up: false },
  { pair: "XAU/USD", price: "2,384.50", chg: "+1.12%", spark: [30, 35, 33, 40, 44, 48, 52, 56, 60, 64], up: true },
  { pair: "BTC/USD", price: "67,420", chg: "+2.84%", spark: [20, 28, 26, 35, 40, 38, 50, 55, 60, 70], up: true },
  { pair: "USD/CAD", price: "1.3712", chg: "-0.09%", spark: [55, 53, 54, 52, 50, 51, 49, 48, 50, 47], up: false },
  { pair: "AUD/USD", price: "0.6612", chg: "-0.09%", spark: [50, 49, 47, 48, 46, 45, 44, 46, 43, 42], up: false },
  { pair: "ETH/USD", price: "3,512", chg: "+1.62%", spark: [40, 44, 42, 48, 52, 50, 56, 60, 58, 65], up: true },
];

function Spark({ pts, up }: { pts: number[]; up: boolean }) {
  const w = 100, h = 30;
  const max = Math.max(...pts), min = Math.min(...pts);
  const pp = pts.map((p, i) => `${(i / (pts.length - 1)) * w},${h - ((p - min) / (max - min)) * h}`).join(" ");
  const color = up ? "var(--bull)" : "var(--bear)";
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-24 h-8">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={pp} />
    </svg>
  );
}

export function MarketGrid() {
  return (
    <section id="market" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-mono text-primary tracking-widest">LIVE MARKET</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Real-time forex dashboard</h2>
          </div>
          <a className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition" href="#">
            Open full dashboard →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((d, i) => (
            <motion.div
              key={d.pair}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass rounded-2xl p-5 hover:border-primary/40 hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold">{d.pair}</span>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-md"
                  style={{
                    color: d.up ? "var(--bull)" : "var(--bear)",
                    background: d.up
                      ? "color-mix(in oklab, var(--bull) 15%, transparent)"
                      : "color-mix(in oklab, var(--bear) 15%, transparent)",
                  }}
                >
                  {d.chg}
                </span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <span className="font-mono text-2xl font-bold">{d.price}</span>
                <Spark pts={d.spark} up={d.up} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
