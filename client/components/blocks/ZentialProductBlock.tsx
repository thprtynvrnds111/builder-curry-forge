import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ZentialProductBlock() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = useMemo(() => Math.min(scrollY * 0.15, 18), [scrollY]);

  const features = [
    { icon: "⚡", label: "Microcurrent Lifting" },
    { icon: "✨", label: "LED Light Therapy" },
    { icon: "⏱️", label: "5 Minute Treatment" },
    { icon: "🌡️", label: "Thermal Therapy" },
  ];

  const transformStyle = `translateY(${isHovered ? -2 : 0}px) translateY(${parallaxOffset}px)`;

  return (
    <section id="zential-hero" className="relative overflow-hidden" aria-label="ZENTIAL Face & Neck Sculpt hero">
      {/* Background base: soft beige to white */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F5F5F3,white)]" />

      {/* Right-side radial brand glow (turquoise → lavender) */}
      <div
        className="pointer-events-none absolute -right-24 top-[-10%] h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 50%, #6FCF9799 0%, #9279FF00 70%), radial-gradient(35% 35% at 60% 60%, #9279FF80 0%, #ffffff00 70%)",
        }}
        aria-hidden
      />

      {/* Container */}
      <div className="relative mx-auto max-w-[1200px] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy column */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">Clinical-Grade Beauty Tech</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              ZENTIAL <span className="font-medium">Face &amp; Neck Sculpt</span>
            </h1>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-7 text-gray-600">
              Experience the convergence of clinical precision and luxury wellness. Our advanced
              microcurrent technology delivers salon-quality treatments in the comfort of your
              sanctuary.
            </p>

            {/* Feature pills */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-[2px]"
                >
                  <span aria-hidden className="text-base">{f.icon}</span>
                  <span className="text-sm text-gray-800">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Price + discount */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-extrabold text-gray-900">US$299</span>
              <span className="text-base text-gray-400 line-through">US$399</span>
              <Badge className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(16,185,129,0.25)]" style={{ backgroundColor: "#16E8D0" }}>
                25% OFF
              </Badge>
            </div>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                className="rounded-xl border border-gray-200 bg-white/70 px-5 py-3 font-semibold text-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9279FF]"
              >
                Add to Cart
              </Button>
              <Button variant="ghost" className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:bg-white/60">
                Learn More
              </Button>
            </div>

            {/* Trust line */}
            <p className="mt-3 text-xs text-gray-500">Free shipping · 30-day return · 2-year warranty</p>
          </div>

          {/* Media column */}
          <div className="relative">
            {/* Parallax wrapper */}
            <div
              className="relative rounded-3xl border border-gray-200/80 bg-white/70 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.08)] backdrop-blur"
              style={{ transform: transformStyle }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 -z-10 rounded-[inherit] opacity-25"
                style={{
                  backgroundImage: "linear-gradient(#00000010 1px, transparent 1px), linear-gradient(90deg, #00000010 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
                aria-hidden
              />

              {/* Ripple underlay */}
              <svg className="pointer-events-none absolute bottom-2 left-1/2 -z-10 h-28 w-[90%] -translate-x-1/2" viewBox="0 0 600 140" aria-hidden>
                <defs>
                  <radialGradient id="rg" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#9279FF33" />
                    <stop offset="100%" stopColor="#9279FF00" />
                  </radialGradient>
                </defs>
                <ellipse cx="300" cy="110" rx="240" ry="16" fill="url(#rg)" />
                <ellipse cx="300" cy="110" rx="160" ry="10" fill="url(#rg)" />
              </svg>

              {/* Device image */}
              <img
                src="/zential/face-neck-sculpt.jpg"
                alt="ZENTIAL Face & Neck Sculpt"
                className="block aspect-[4/5] w-full rounded-2xl object-cover"
                loading="lazy"
                width={960}
                height={1200}
                style={{ filter: "brightness(1.08) saturate(1.04)" }}
              />

              {/* FDA badge */}
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">FDA CLEARED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
