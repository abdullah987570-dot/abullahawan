import { Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Free", price: "$0", desc: "Start exploring the markets.",
    feats: ["Community feed access", "Basic market dashboard", "3 free starter courses", "Limited AI signals"],
    cta: "Get started", featured: false,
  },
  {
    name: "Pro Trader", price: "$29", desc: "For serious learners and traders.",
    feats: ["Everything in Free", "Full course library", "Advanced AI predictions", "Trading journal", "Priority community"],
    cta: "Go Pro", featured: true,
  },
  {
    name: "VIP Signals", price: "$79", desc: "Live signals & private rooms.",
    feats: ["Everything in Pro", "Real-time VIP signals", "Private trading rooms", "Live webinars", "1:1 mentor sessions"],
    cta: "Join VIP", featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono text-primary tracking-widest">MEMBERSHIP</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Trade <span className="text-gradient">smarter</span>, not harder
          </h2>
          <p className="mt-4 text-muted-foreground">Cancel anytime. Crypto, card and PayPal accepted.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-3xl p-7 ${
                t.featured
                  ? "glass border-primary/50 shadow-neon"
                  : "glass hover:border-primary/30"
              } transition`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="font-display font-bold text-xl">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{t.price}</span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <button
                className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
                  t.featured
                    ? "bg-gradient-primary text-primary-foreground shadow-neon hover:opacity-90"
                    : "glass hover:border-primary/40"
                }`}
              >
                {t.cta}
              </button>
              <ul className="mt-6 space-y-3 text-sm">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
