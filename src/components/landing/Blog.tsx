import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 sm:p-10"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-primary tracking-widest">
            <BookOpen className="h-4 w-4" /> BLOG
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Forex Trading: Understanding the{" "}
            <span className="text-gradient">Global Currency Market</span>
          </h2>
          <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              Forex trading, also known as foreign exchange trading, is the process of buying and
              selling currencies to earn profit from price changes. It is the largest financial
              market in the world, with trillions of dollars traded daily. Traders exchange currency
              pairs such as EUR/USD or GBP/USD, aiming to buy low and sell high.
            </p>
            <p>
              The forex market operates 24 hours a day, five days a week, making it highly flexible
              for traders worldwide. Success in forex trading requires knowledge of market analysis,
              including technical analysis (charts and patterns) and fundamental analysis (economic
              news and events).
            </p>
            <p>
              Risk management is essential because forex prices can change rapidly. Smart traders
              use stop-loss orders, proper planning, and disciplined strategies to reduce losses.
              Beginners should start with demo accounts to practice without real risk.
            </p>
            <p>
              Forex trading offers great opportunities, but it demands patience, continuous
              learning, and emotional control to achieve long-term success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
