import { motion } from "framer-motion";

// Static candlestick-style SVG mock with motion
const candles = Array.from({ length: 28 }, (_, i) => {
  const seed = Math.sin(i * 1.3) * 0.5 + Math.cos(i * 0.6) * 0.3;
  const open = 50 + seed * 15;
  const close = open + (Math.sin(i * 2.1) * 12);
  const high = Math.max(open, close) + Math.abs(Math.cos(i)) * 6 + 2;
  const low = Math.min(open, close) - Math.abs(Math.sin(i * 1.7)) * 6 - 2;
  return { open, close, high, low };
});

export function ChartViz() {
  const w = 560, h = 360;
  const cw = w / candles.length;
  const minV = Math.min(...candles.map((c) => c.low));
  const maxV = Math.max(...candles.map((c) => c.high));
  const scale = (v: number) => h - ((v - minV) / (maxV - minV)) * (h - 40) - 20;

  // line trend
  const linePts = candles.map((c, i) => `${i * cw + cw / 2},${scale((c.open + c.close) / 2)}`).join(" ");

  return (
    <div className="glass relative max-w-full overflow-hidden rounded-2xl p-3 shadow-card sm:rounded-3xl sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-base font-bold sm:text-lg">EUR/USD</span>
            <span className="text-xs font-mono text-muted-foreground">· 1H</span>
          </div>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-xl font-bold sm:text-2xl">1.0842</span>
            <span className="text-sm font-mono" style={{ color: "var(--bull)" }}>+0.34%</span>
          </div>
        </div>
        <div className="flex max-w-[7.5rem] flex-wrap justify-end gap-1 text-[10px] font-mono text-muted-foreground sm:max-w-none sm:text-xs">
          {["1m", "15m", "1H", "4H", "1D"].map((t) => (
            <span
              key={t}
              className={`rounded-md px-1.5 py-1 sm:px-2.5 ${
                t === "1H" ? "bg-primary/15 text-primary" : "text-muted-foreground"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${w} ${h}`} className="h-[210px] w-full sm:h-[320px]">
        <defs>
          <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.86 0.24 145)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.86 0.24 145)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.2 240)" />
            <stop offset="100%" stopColor="oklch(0.86 0.24 145)" />
          </linearGradient>
        </defs>

        {/* grid */}
        {[0.2, 0.4, 0.6, 0.8].map((y) => (
          <line key={y} x1="0" x2={w} y1={h * y} y2={h * y} stroke="oklch(1 0 0 / 0.05)" />
        ))}

        {/* area under trend */}
        <polygon
          points={`0,${h} ${linePts} ${w},${h}`}
          fill="url(#areaG)"
        />

        {/* candles */}
        {candles.map((c, i) => {
          const up = c.close >= c.open;
          const color = up ? "var(--bull)" : "var(--bear)";
          const x = i * cw + cw / 2;
          const bodyTop = scale(Math.max(c.open, c.close));
          const bodyBot = scale(Math.min(c.open, c.close));
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.02, duration: 0.3 }}
            >
              <line x1={x} x2={x} y1={scale(c.high)} y2={scale(c.low)} stroke={color} strokeWidth="1" />
              <rect
                x={x - cw * 0.3}
                width={cw * 0.6}
                y={bodyTop}
                height={Math.max(2, bodyBot - bodyTop)}
                fill={color}
                rx="1"
              />
            </motion.g>
          );
        })}

        {/* trend line */}
        <motion.polyline
          fill="none"
          stroke="url(#lineG)"
          strokeWidth="2"
          points={linePts}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* current price marker */}
        <circle cx={w - cw / 2} cy={scale(candles[candles.length - 1].close)} r="5" fill="oklch(0.86 0.24 145)">
          <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* floating prediction card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute right-3 top-24 w-32 rounded-xl glass p-2.5 animate-float sm:right-5 sm:top-20 sm:w-44 sm:rounded-2xl sm:p-3"
      >
        <div className="text-[10px] font-mono text-muted-foreground">AI SIGNAL</div>
        <div className="flex items-center justify-between mt-1">
          <span className="font-display font-bold text-primary">BUY</span>
          <span className="font-mono text-xs">87%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-gradient-primary" style={{ width: "87%" }} />
        </div>
        <div className="mt-2 text-[9px] text-muted-foreground sm:text-[10px]">Target: 1.0890 · SL: 1.0820</div>
      </motion.div>
    </div>
  );
}
