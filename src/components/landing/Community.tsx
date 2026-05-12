import { motion } from "framer-motion";
import { Heart, MessageCircle, Repeat2, BadgeCheck, Trophy } from "lucide-react";

const posts = [
  {
    u: "Liam Carter", h: "@liam_fx", v: true, t: "2h", acc: 91,
    body: "EUR/USD just tapped the 4H order block at 1.0820. Expecting a sweep into 1.0890 liquidity before any real bearish move. Sniper long active.",
    pair: "EUR/USD", side: "LONG", likes: 482, comments: 64,
  },
  {
    u: "Aisha Khan", h: "@goldsniper", v: true, t: "5h", acc: 88,
    body: "Gold doing exactly what we mapped — broke structure, retested premium zone. Targeting 2,420 next. Patience pays.",
    pair: "XAU/USD", side: "LONG", likes: 1240, comments: 188,
  },
  {
    u: "Daniel Wolfe", h: "@danwolfe", v: true, t: "1d", acc: 84,
    body: "DXY losing momentum, JPY catching a bid. Watching USD/JPY for a clean reversal off 151.50. Risk: 30 pips.",
    pair: "USD/JPY", side: "SHORT", likes: 720, comments: 112,
  },
];

const leaders = [
  { u: "Maria Chen", acc: 94, w: 312 },
  { u: "Yuki Tanaka", acc: 91, w: 280 },
  { u: "Tomás Rivera", acc: 89, w: 264 },
  { u: "Liam Carter", acc: 87, w: 251 },
];

export function Community() {
  return (
    <section id="community" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <div className="text-xs font-mono text-primary tracking-widest">COMMUNITY</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            A live feed of <span className="text-gradient">trader minds</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {posts.map((p, i) => (
              <motion.article
                key={p.h}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                    {p.u[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold">{p.u}</span>
                      {p.v && <BadgeCheck className="h-4 w-4 text-accent" />}
                      <span className="text-xs text-muted-foreground">{p.h} · {p.t}</span>
                      <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded bg-primary/15 text-primary">
                        {p.acc}% accuracy
                      </span>
                    </div>
                    <p className="mt-2 text-foreground/90 text-[15px] leading-relaxed">{p.body}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono px-2.5 py-1 rounded-md bg-muted/60">
                      <span className="text-muted-foreground">{p.pair}</span>
                      <span style={{ color: p.side === "LONG" ? "var(--bull)" : "var(--bear)" }}>{p.side}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1.5 hover:text-primary transition">
                        <Heart className="h-4 w-4" /> {p.likes}
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-foreground transition">
                        <MessageCircle className="h-4 w-4" /> {p.comments}
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-foreground transition">
                        <Repeat2 className="h-4 w-4" /> Repost
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="glass rounded-2xl p-6 h-fit sticky top-24">
            <div className="flex items-center gap-2 mb-5">
              <Trophy className="h-4 w-4 text-primary" />
              <h3 className="font-display font-bold">Top analysts this week</h3>
            </div>
            <ul className="space-y-4">
              {leaders.map((l, i) => (
                <li key={l.u} className="flex items-center gap-3">
                  <span className="w-5 text-center font-mono text-sm text-muted-foreground">{i + 1}</span>
                  <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
                    {l.u[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">{l.u}</div>
                    <div className="text-[11px] font-mono text-muted-foreground">{l.w} winning calls</div>
                  </div>
                  <span className="text-xs font-mono text-primary">{l.acc}%</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full text-sm font-semibold py-2.5 rounded-lg glass hover:border-primary/40 transition">
              View leaderboard
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
