import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ZentialProductBlock() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTestimonialIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const parallaxOffset = useMemo(() => Math.min(scrollY * 0.15, 18), [scrollY]);

  const features = [
    { icon: "⚡", label: "Microcurrent Lifting", desc: "Tightens and tones facial muscles." },
    { icon: "✨", label: "LED Light Therapy", desc: "Boosts collagen and skin radiance." },
    { icon: "⏱️", label: "5 Minute Treatment", desc: "Quick daily sessions with visible results." },
    { icon: "🌡️", label: "Thermal Therapy", desc: "Soothing warmth to enhance absorption." },
  ];

  const benefits = [
    {
      title: "Lift & Tone",
      text: "Clinically-backed microcurrent contours and firms skin — visible after weeks of consistent use.",
    },
    {
      title: "Collagen Boost",
      text: "LED wavelengths stimulate fibroblasts for improved texture and elasticity.",
    },
    {
      title: "Rapid Ritual",
      text: "Short treatments that fit daily routines — fast results, minimal time.",
    },
    {
      title: "Comfort & Safety",
      text: "Built-in thermal control and FDA clearance for peace of mind.",
    },
  ];

  const steps = [
    { title: "Use", caption: "Prep with cleanser and conductive gel.", img: "/zential/face-neck-sculpt.jpg" },
    { title: "Sculpt", caption: "Run microcurrent along jawline and neck for 5 minutes.", img: "/zential/face-neck-sculpt.jpg" },
    { title: "Glow", caption: "Finish with LED therapy and hydrating serum.", img: "/zential/face-neck-sculpt.jpg" },
  ];

  const testimonials = [
    {
      name: "Ava M., 38",
      quote: "My jawline is more defined and my skin feels plumper. This is my daily ritual.",
      stars: 5,
      img: "/zential/face-neck-sculpt.jpg",
    },
    {
      name: "Jordan K., 45",
      quote: "Clinical results without the clinic — convenient and effective.",
      stars: 5,
      img: "/zential/face-neck-sculpt.jpg",
    },
    {
      name: "Priya S., 29",
      quote: "Noticeable tightening and glow after a month of use.",
      stars: 5,
      img: "/zential/face-neck-sculpt.jpg",
    },
  ];

  const faqs = [
    { q: "Is ZENTIAL safe?", a: "Yes — FDA cleared, with thermal control and safety cutoffs." },
    { q: "When will I see results?", a: "Many customers report improvements within 3–6 weeks with consistent use." },
    { q: "How often should I use it?", a: "Daily sessions of 5–10 minutes are recommended for best results." },
    { q: "What is the warranty?", a: "2-year limited warranty covering manufacturing defects." },
    { q: "Shipping & returns?", a: "Free shipping, 30-day returns — see our policy for details." },
  ];

  const transformStyle = `translateY(${isHovered ? -2 : 0}px) translateY(${parallaxOffset}px)`;

  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#F5F5F3,white)] text-[#1F2937]">
      {/* HERO */}
      <section id="zential-hero" className="relative">
        <div className="absolute -right-24 top-[-10%] h-[480px] w-[480px] rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(45% 45% at 50% 50%, #6FCF9799 0%, #9279FF00 70%), radial-gradient(35% 35% at 60% 60%, #9279FF80 0%, #ffffff00 70%)" }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">Clinical-Grade Beauty Tech</p>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
                ZENTIAL <span className="font-medium">Face &amp; Neck Sculpt</span>
              </h1>
              <p className="mt-4 max-w-[52ch] text-[15.5px] leading-7 text-gray-600">
                Experience the convergence of clinical precision and luxury wellness. Our advanced microcurrent technology delivers salon-quality treatments in the comfort of your sanctuary.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white/55 px-3 py-2 shadow-sm backdrop-blur-[2px]">
                    <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white/40 text-lg">{f.icon}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{f.label}</div>
                      <div className="text-xs text-gray-500">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-extrabold text-gray-900">US$299</span>
                <span className="text-base text-gray-400 line-through">US$399</span>
                <Badge className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(16,185,129,0.25)]" style={{ backgroundColor: "#16E8D0" }}>
                  25% OFF
                </Badge>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Button className="rounded-xl border border-[#E5E7EB] bg-white/80 px-5 py-3 font-semibold text-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9279FF]">
                  Add to Cart
                </Button>
                <Button variant="ghost" className="rounded-xl border border-[#E5E7EB] px-5 py-3 text-gray-800 hover:bg-white/60">Learn More</Button>
              </div>

              <p className="mt-3 text-xs text-gray-500">Free shipping · 30-day return · 2-year warranty</p>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl border border-[#E5E7EB] bg-white/70 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.08)] backdrop-blur" style={{ transform: transformStyle }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="absolute inset-0 -z-10 rounded-[inherit] opacity-25" style={{ backgroundImage: "linear-gradient(#00000010 1px, transparent 1px), linear-gradient(90deg, #00000010 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden />

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

                <div className="relative">
                  {/* Purple orb glow behind image */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(45% 45% at 50% 50%, #9279FF99 0%, #9279FF55 30%, #ffffff00 70%)" }} />

                  <div className="overflow-hidden rounded-[16px]">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F59783fb837cc428591fe3cc9e5426c31%2F3a5f999c4b0145718583bb004b1afceb" alt="ZENTIAL Face & Neck Sculpt" className="block aspect-[4/5] w-full rounded-[16px] object-cover" loading="lazy" width={960} height={1200} style={{ filter: "brightness(1.08) saturate(1.04)" }} />
                    <div className="pointer-events-none absolute inset-0 rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0))] opacity-60 mix-blend-screen" />
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[16px] [background:linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_20%)]" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full rounded-b-[16px] bg-gradient-to-t from-black/6 to-transparent" />
                  </div>

                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">FDA CLEARED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative mt-12">
        <div className="mx-auto max-w-[1200px] px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Benefits</h2>
          <p className="mt-2 text-gray-600 max-w-[70ch]">Clinical results, elegantly delivered — targeted improvements across lifting, collagen, and radiance.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="relative rounded-2xl border border-[#E5E7EB] bg-white/60 p-5 shadow-sm backdrop-blur">
                <div className="absolute -left-6 -top-6 h-36 w-36 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle at 30% 30%, #6FCF97, #9279FF00)" }} />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-white/50">
        <div className="mx-auto max-w-[1200px] px-4 py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="font-semibold text-gray-800">FDA Cleared</span>
            <span className="h-4 w-px bg-[#E9E3FF]" />
            <span>Dermatologist Approved</span>
            <span className="h-4 w-px bg-[#E9E3FF]" />
            <span>Trusted by 10,000+ customers</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500">★★★★★</div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID - How it works */}
      <section className="mt-10">
        <div className="mx-auto max-w-[1200px] px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">How it works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
                <div className="h-44 overflow-hidden rounded-lg bg-gray-50">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-12 bg-gray-50">
        <div className="mx-auto max-w-[900px] px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">What customers say</h2>
          <div className="mt-6 relative">
            <div className="flex overflow-hidden">
              {testimonials.map((t, i) => (
                <figure key={t.name} className={`min-w-full transform transition-transform duration-500 ${i === testimonialIndex ? "translate-x-0" : "-translate-x-full opacity-0"}`}>
                  <div className="rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-4">
                      <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                      <div>
                        <strong className="block">{t.name}</strong>
                        <div className="text-xs text-gray-500">{Array.from({ length: t.stars }).map((_, idx) => (<span key={idx} className="text-amber-400">★</span>))}</div>
                      </div>
                    </div>
                    <blockquote className="mt-4 text-gray-700">“{t.quote}”</blockquote>
                  </div>
                </figure>
              ))}
            </div>

            <div className="absolute right-2 top-2 flex gap-2">
              <button onClick={() => setTestimonialIndex((s) => (s - 1 + testimonials.length) % testimonials.length)} className="rounded-full bg-white/80 p-2 shadow">‹</button>
              <button onClick={() => setTestimonialIndex((s) => (s + 1) % testimonials.length)} className="rounded-full bg-white/80 p-2 shadow">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <div className="mx-auto max-w-[800px] px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Frequently asked</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f, idx) => (
              <AccordionItem key={f.q} value={`faq-${idx}`}>
                <AccordionTrigger className="bg-white/60 rounded-lg border border-[#E5E7EB] px-4 py-3">{f.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </main>
  );
}
