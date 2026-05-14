import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, PlayCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const cats = ["All", "Price Action", "Smart Money", "ICT", "Scalping", "Swing", "Risk Mgmt", "Gold", "Crypto"];

const courses = [
  {
    t: "SMC Full Course in Hindi | Smart Money Concepts Beginner to Pro",
    a: "YouTube Mentor",
    r: 4.9,
    s: 12400,
    p: "Free",
    lvl: "Smart Money",
    c: "from-emerald-500/30 to-teal-500/10",
    id: "aqyXBYVtfkk",
  },
  {
    t: "ICT Complete Course in Hindi | ICT Full Mentorship 2026",
    a: "YouTube Mentor",
    r: 4.9,
    s: 9800,
    p: "Free",
    lvl: "ICT",
    c: "from-fuchsia-500/30 to-violet-500/10",
    id: "M5ccjwutWEY",
  },
  {
    t: "Ultimate Price Action Course — 3 Hours Non-stop",
    a: "Trade with Purab",
    r: 4.8,
    s: 28100,
    p: "Free",
    lvl: "Price Action",
    c: "from-blue-500/30 to-cyan-500/10",
    id: "L2OochgcO3E",
  },
  {
    t: "Complete Risk Management in Trading 2026",
    a: "YouTube Mentor",
    r: 4.9,
    s: 15200,
    p: "Free",
    lvl: "Risk Mgmt",
    c: "from-pink-500/30 to-rose-500/10",
    id: "Cw8OOUlzJHY",
  },
];

export function Courses() {
  const [active, setActive] = useState<(typeof courses)[number] | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

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
            <motion.button
              key={c.t}
              type="button"
              onClick={() => setActive(c)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition block text-left"
            >
              <div className={`relative h-44 bg-gradient-to-br ${c.c} flex items-center justify-center overflow-hidden`}>
                <img
                  src={`https://i.ytimg.com/vi/${c.id}/hqdefault.jpg`}
                  alt={c.t}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-80 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <PlayCircle className="h-14 w-14 text-foreground group-hover:scale-110 group-hover:text-primary transition relative drop-shadow-lg" />
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-background/70 backdrop-blur">
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
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.t}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-xs text-muted-foreground">{active.a}</div>
                <h3 className="mt-1 font-display font-bold text-lg sm:text-xl leading-snug">{active.t}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
