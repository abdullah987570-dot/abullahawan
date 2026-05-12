import { motion } from "framer-motion";
import { Star, Users, PlayCircle } from "lucide-react";

const cats = ["All", "Price Action", "Smart Money", "ICT", "Scalping", "Swing", "Risk Mgmt", "Gold", "Crypto"];

const courses = [
  { t: "Smart Money Concepts Mastery", a: "Liam Carter", r: 4.9, s: 12400, p: "$129", lvl: "Advanced", c: "from-emerald-500/30 to-teal-500/10" },
  { t: "Price Action Foundations", a: "Maria Chen", r: 4.8, s: 28100, p: "Free", lvl: "Beginner", c: "from-blue-500/30 to-cyan-500/10" },
  { t: "ICT Strategy Deep Dive", a: "Daniel Wolfe", r: 4.9, s: 9300, p: "$199", lvl: "Pro", c: "from-fuchsia-500/30 to-violet-500/10" },
  { t: "Gold (XAU/USD) Sniper Setups", a: "Aisha Khan", r: 4.7, s: 6700, p: "$89", lvl: "Intermediate", c: "from-yellow-500/30 to-orange-500/10" },
  { t: "Risk & Money Management", a: "Tomás Rivera", r: 4.9, s: 15200, p: "$59", lvl: "All levels", c: "from-pink-500/30 to-rose-500/10" },
  { t: "Crypto Swing Trading 2025", a: "Yuki Tanaka", r: 4.8, s: 8800, p: "$149", lvl: "Intermediate", c: "from-indigo-500/30 to-blue-500/10" },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono text-primary tracking-widest">MARKETPLACE</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Learn from <span className="text-gradient">elite traders</span>
            </h2>
          </div>
          <a className="text-sm text-muted-foreground hover:text-foreground transition">Browse all courses →</a>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {cats.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-1.5 rounded-full text-xs font-mono border transition ${
                i === 0
                  ? "bg-primary/15 text-primary border-primary/30"
                  : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition"
            >
              <div className={`relative h-44 bg-gradient-to-br ${c.c} flex items-center justify-center`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <PlayCircle className="h-14 w-14 text-foreground/80 group-hover:scale-110 group-hover:text-primary transition relative" />
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-background/60 backdrop-blur">
                  {c.lvl}
                </span>
                <span className="absolute top-3 right-3 text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-background/70 backdrop-blur text-primary">
                  {c.p}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-xs text-muted-foreground">{c.a}</div>
                <h3 className="mt-1 font-display font-bold text-lg leading-snug">{c.t}</h3>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" /> {c.r}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> {c.s.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
