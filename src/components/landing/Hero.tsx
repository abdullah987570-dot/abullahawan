import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { ChartViz } from "./ChartViz";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute top-20 -right-20 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-28 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-mono text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            LIVE · 38,420 traders online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Master Forex Trading{" "}
            <span className="text-gradient">With Real Traders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl"
          >
            Buy courses, share analysis, predict market trends with AI, and grow with
            the global forex community — all in one premium trading hub.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 sm:mt-8 flex flex-wrap gap-2 sm:gap-3"
          >
            <button className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-neon hover:scale-[1.02] transition text-sm sm:text-base">
              Start Learning
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </button>
            <button className="inline-flex items-center gap-2 glass text-foreground font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl hover:border-primary/40 transition text-sm sm:text-base">
              <TrendingUp className="h-4 w-4 text-primary" /> Explore Market
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 text-foreground/80 font-semibold px-6 py-3.5 rounded-xl hover:text-foreground transition">
              <Sparkles className="h-4 w-4 text-accent" /> Join Community
            </button>
          </motion.div>

          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            {[
              { v: "240k+", l: "Traders" },
              { v: "1,200+", l: "Courses" },
              { v: "92%", l: "AI Accuracy" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-xl sm:text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <ChartViz />
        </motion.div>
      </div>
    </section>
  );
}
