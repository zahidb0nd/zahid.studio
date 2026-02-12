"use client";

import { useEffect } from "react";
import { Zap, Box, Cpu } from "lucide-react";
import gsap from "gsap";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Home() {
  useEffect(() => {
    // Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    // GSAP fade-in on load
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to("#page", {
      opacity: 1,
      y: 0,
      duration: 0.9,
    })
      .from(
        "header .rounded-2xl",
        {
          opacity: 0,
          y: -10,
          duration: 0.8,
        },
        "-=0.8"
      )
      .from(
        "main section:first-of-type .hero-card",
        {
          opacity: 0,
          y: 14,
          duration: 0.9,
        },
        "-=0.6"
      )
      .from(
        "section:nth-of-type(2) .service-card",
        {
          opacity: 0,
          y: 18,
          duration: 0.8,
          stagger: 0.12,
        },
        "-=0.5"
      );
  }, []);

  return (
    <>
      {/* Background FX - Replaced with ShaderAnimation */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <ShaderAnimation />
        <div className="absolute inset-0 gridlines opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 noise mix-blend-overlay"></div>
      </div>

      {/* Page Wrapper */}
      <div id="page" className="opacity-0 translate-y-3">
        {/* Top Bar */}
        <header className="sticky top-0 z-40">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-glow">
                    <div
                      className="absolute inset-0 opacity-80"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, #A855F7 0%, rgba(168,85,247,0) 60%), radial-gradient(circle at 70% 70%, #22D3EE 0%, rgba(34,211,238,0) 55%)",
                      }}
                    ></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-wide">
                      Zahid Digital
                    </p>
                    <p className="text-xs text-white/60">
                      Premium Web Design Studio
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_18px_rgba(34,211,238,.8)]"></span>
                  Available for new projects
                  <span className="text-white/60 group-hover:text-white/90 transition">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="mx-auto max-w-6xl px-4">
          <section className="pt-12 sm:pt-16">
            <div className="hero-card rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-glow overflow-hidden">
              <div className="px-6 py-12 sm:px-10 sm:py-16 relative">
                <div
                  className="absolute inset-0 pointer-events-none opacity-60"
                  style={{
                    background:
                      "radial-gradient(900px 380px at 20% 20%, rgba(168,85,247,.22), transparent 60%), radial-gradient(900px 380px at 80% 35%, rgba(34,211,238,.18), transparent 60%)",
                  }}
                ></div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/70">
                    <span className="h-2 w-2 rounded-full bg-[#A855F7] shadow-[0_0_18px_rgba(168,85,247,.8)]"></span>
                    Futuristic • Clean • Premium
                  </div>

                  <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                    We Build Digital Revenue Engines for{" "}
                    <span className="bg-gradient-to-r from-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
                      Bengaluru&apos;s Elite.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
                    Specialized Web Design for{" "}
                    <span className="text-white/90 font-semibold">
                      Real Estate
                    </span>
                    ,{" "}
                    <span className="text-white/90 font-semibold">Medical</span>
                    , and{" "}
                    <span className="text-white/90 font-semibold">
                      Education
                    </span>{" "}
                    sectors.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/91"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold text-sm sm:text-base bg-gradient-to-r from-[#A855F7] to-[#22D3EE] text-black shadow-glow hover:brightness-110 transition"
                    >
                      Discuss Your Project
                      <span aria-hidden="true">→</span>
                    </a>

                    <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-sm text-white/70">
                      <p className="font-semibold text-white/90">
                        Trusted by local businesses
                      </p>
                      <p className="mt-1">Indiranagar & Whitefield</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-white/60">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      Fast load times
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      Conversion-focused UX
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      Premium visuals
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      Mobile-perfect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mt-10 sm:mt-14 pb-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Services
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white/65 max-w-2xl">
                  Premium deliverables designed to turn attention into trust—and
                  trust into revenue.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="service-card group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-black/30 grid place-items-center">
                    <Zap className="h-6 w-6 text-[#A855F7]" />
                  </div>
                  <span className="text-xs text-white/55 border border-white/10 bg-black/30 px-3 py-1 rounded-full">
                    Core
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  High-Performance Websites
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  Lightning-fast, SEO-ready, conversion-focused sites built for
                  premium brands that demand results.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]"></span>
                  Speed • UX • SEO
                </div>
              </div>

              {/* Card 2 */}
              <div className="service-card group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-black/30 grid place-items-center">
                    <Box className="h-6 w-6 text-[#22D3EE]" />
                  </div>
                  <span className="text-xs text-white/55 border border-white/10 bg-black/30 px-3 py-1 rounded-full">
                    Premium
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  3D Interactive Models
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  Showcase properties, campuses, or facilities with immersive 3D
                  experiences that wow and convert.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]"></span>
                  WebGL • Motion • Engagement
                </div>
              </div>

              {/* Card 3 */}
              <div className="service-card group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-black/30 grid place-items-center">
                    <Cpu className="h-6 w-6 text-[#A855F7]" />
                  </div>
                  <span className="text-xs text-white/55 border border-white/10 bg-black/30 px-3 py-1 rounded-full">
                    Scale
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">AI & Automation</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  Automate lead capture, follow-ups, and workflows to reduce
                  manual work and grow faster.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]"></span>
                  CRM • Chat • Integrations
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-glow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    Trusted by local businesses in Indiranagar & Whitefield
                  </h3>
                  <p className="mt-2 text-sm text-white/65 max-w-2xl">
                    Built for Bengaluru brands that want premium positioning,
                    faster conversions, and a website that feels expensive.
                  </p>
                </div>
                <a
                  href="https://wa.me/91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold text-sm sm:text-base border border-white/10 bg-black/30 hover:bg-white/10 transition"
                >
                  Discuss Your Project
                  <span aria-hidden="true" className="text-white/70">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 pb-10 text-center text-xs text-white/50">
              <p>
                © <span id="year"></span> Zahid Digital. Premium web experiences
                for Bengaluru’s top brands.
              </p>
            </footer>
          </section>
        </main>
      </div>
    </>
  );
}
