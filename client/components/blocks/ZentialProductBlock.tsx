import React, { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, FlameKindling, Sparkles } from "lucide-react";

const currency = (n: number) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function ZentialProductBlock() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxOffset = useMemo(() => scrollY * 0.15, [scrollY]);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-amber-50/50 to-white text-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-1/3 -left-1/4 h-[120vh] w-[120vw] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,245,200,0.75),rgba(255,255,255,0)_60%)] blur-2xl" />
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className={`absolute -inset-1 bg-[conic-gradient(from_45deg,_rgba(255,237,213,0.25),rgba(255,255,255,0)_30%,rgba(254,215,170,0.25)_60%,rgba(255,255,255,0)_85%)] ${isHovered ? "animate-ray-slow" : "animate-none"}`} />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:py-28">
        <div className="relative order-2 max-md:order-2 md:order-1">
          <p className="mb-2 text-sm tracking-[0.18em] text-amber-700/90">Clinical-Grade Beauty Tech</p>
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">ZENTIAL</span>
            <span className="block text-2xl font-medium text-neutral-600 sm:inline sm:text-3xl lg:text-4xl">Face & Neck Sculpt</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            Experience the convergence of clinical precision and luxury wellness. Our advanced microcurrent technology delivers salon-quality treatments in the comfort of your sanctuary.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {[
              { icon: CheckCircle2, label: "Microcurrent Lifting" },
              { icon: Sparkles, label: "LED Light Therapy" },
              { icon: Zap, label: "5 Minute Treatment" },
              { icon: FlameKindling, label: "Thermal Therapy" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2.5 shadow-sm ring-1 ring-black/5 backdrop-blur">
                <Icon className="h-4 w-4 text-amber-600" />
                <span className="text-neutral-700">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-end gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-neutral-900">{currency(299)}</span>
              <span className="text-lg text-neutral-500 line-through">{currency(399)}</span>
              <Badge className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: 'rgba(22,232,208,1)' }}>25% OFF</Badge>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-12 rounded-full bg-neutral-900 px-7 text-white shadow-lg shadow-amber-200/30 hover:bg-neutral-800">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full border-neutral-300 bg-white/70 px-7 text-neutral-800 backdrop-blur hover:bg-white">
              Learn More
            </Button>
          </div>
          <p className="mt-4 text-sm text-neutral-500">Free shipping • 30-day return • 2-year warranty</p>
        </div>

        <div className="relative order-1 flex items-center justify-center md:order-2">
          <div className={`absolute -inset-10 -z-10 rounded-full bg-amber-300/30 blur-3xl ${isHovered ? "animate-glow" : ""}`} />

          <div className="relative aspect-[3/4] w-full max-w-md rounded-[28px] border border-white/40 bg-white/60 p-4 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl sm:p-5 md:p-6">
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.35)_100%)] opacity-70" />

            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F59783fb837cc428591fe3cc9e5426c31%2F3a5f999c4b0145718583bb004b1afceb"
              alt="Zential Face & Neck Sculpt device"
              className="relative z-10 mx-auto w-full max-w-[92%] select-none object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-transform duration-500 will-change-transform"
              style={{ transform: `translateY(${parallaxOffset}px)` }}
            />

            <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-60 [background:radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_60%)]" />

            <div className="absolute -top-3 left-6">
              <Badge className="animate-float rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-emerald-300/30" style={{ backgroundColor: 'rgba(90,250,214,1)' }}>
                FDA CLEARED
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
