import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { ChartViz } from "./ChartViz";

export function Hero() {
  return (
    <section className="relative overflow-hidden overflow-x-clip">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute top-20 -right-20 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-28 sm:pt-20 lg:grid-cols-2 lg:gap-14">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-mono text-muted-foreground sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="truncate">LIVE · 38,420 traders online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 max-w-[12ch] break-words font-display text-4xl font-bold leading-[1.05] tracking-tight sm:mt-6 sm:max-w-xl sm:text-5xl md:text-6xl lg:text-7xl"
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
            className="mt-7 grid grid-cols-1 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3"
          >
            <button className="group inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition hover:scale-[1.02] sm:px-6 sm:py-3.5 sm:text-base">
              Start Learning
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </button>
            <button className="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 sm:px-6 sm:py-3.5 sm:text-base">
              <TrendingUp className="h-4 w-4 text-primary" /> Explore Market
            </button>
            <button className="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground/80 transition hover:text-foreground sm:px-6 sm:py-3.5 sm:text-base">
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
          className="relative min-w-0"
        >
          <ChartViz />
        </motion.div>
      </div>
    </section>
  );
}
