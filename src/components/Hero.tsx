import React from 'react';
import { ArrowDown, Github, Linkedin, Sparkles, Code2, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle organic green background gradients for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-emerald-600/10 blur-[130px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-32 w-[400px] h-[400px] bg-emerald-800/10 blur-[140px] rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet contextual kicker without pill box */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400/90 font-medium mb-4">
              <span>First-Year Engineering Student</span>
              <span aria-hidden="true">·</span>
              <span>Joy × NIAT</span>
            </div>

            {/* Main Greeting Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 text-balance leading-[1.12]">
              {PERSONAL_INFO.heroHeadline}
            </h1>

            {/* Tagline / Subtitle */}
            <p className="font-heading text-xl sm:text-2xl text-emerald-300/95 font-medium mb-6">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl text-balance">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 text-sm font-semibold text-[#07150e] bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg shadow-md shadow-emerald-500/20 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/40 hover:border-emerald-700/70 transition-all rounded-lg inline-flex items-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links & Profiles */}
            <div className="flex items-center gap-5 text-sm text-slate-400 pt-2 border-t border-emerald-950/60">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Connect</span>
              <span className="text-slate-700">|</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">GitHub</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Technical Developer Card (No photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Subtle ambient emerald glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-600/20 via-emerald-400/10 to-teal-500/5 rounded-2xl blur-lg opacity-70 pointer-events-none"
              />

              <div className="relative rounded-2xl overflow-hidden bg-[#0a1c14] border border-emerald-800/50 shadow-2xl shadow-black/60">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#07160f] border-b border-emerald-900/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-700/60 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-700/60 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-700/60 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/90">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>bhanu_sai.py</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Python 3.12</span>
                </div>

                {/* Code Terminal Content */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-1">
                  <div className="text-slate-500 italic"># B.Tech CSE (Artificial Intelligence) Student</div>
                  <div>
                    <span className="text-emerald-400 font-semibold">student</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-slate-200">&#123;</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-emerald-300">&quot;name&quot;</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-teal-200">&quot;J. Bhanu Sai&quot;</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-emerald-300">&quot;institution&quot;</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-teal-200">&quot;Joy × NIAT&quot;</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-emerald-300">&quot;specialization&quot;</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-teal-200">&quot;Computer Science &amp; AI&quot;</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-emerald-300">&quot;academic_year&quot;</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-teal-200">&quot;First Year (2026–Present)&quot;</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-emerald-300">&quot;languages&quot;</span>
                    <span className="text-slate-400">: [</span>
                    <span className="text-emerald-300">&quot;Python&quot;</span>
                    <span className="text-slate-200">]</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-emerald-300">&quot;core_mindset&quot;</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-teal-200">&quot;Learn · Practice · Grow&quot;</span>
                  </div>

                  <div>
                    <span className="text-slate-200">&#125;</span>
                  </div>

                  <div className="pt-2 text-slate-500 italic">
                    # Focus: Algorithms, intelligent agents, and web software
                  </div>
                </div>

                {/* Console Output Bar */}
                <div className="px-5 py-3 bg-[#081710] border-t border-emerald-950 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="text-slate-500">&gt;</span>
                    <span className="text-slate-300">Ready to build &amp; collaborate</span>
                  </div>
                  <span className="text-[11px] text-emerald-400/80 font-medium">status: active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Highlights Strip below the hero split (per reference §2.B) */}
        <div className="mt-14 pt-8 border-t border-emerald-950/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">Institution</span>
            <span className="font-heading font-semibold text-slate-100 text-sm sm:text-base">Joy × NIAT</span>
            <span className="text-xs text-slate-400">Engineering Campus</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">Degree & Major</span>
            <span className="font-heading font-semibold text-slate-100 text-sm sm:text-base">B.Tech in CSE</span>
            <span className="text-xs text-emerald-400">Artificial Intelligence</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">Academic Stage</span>
            <span className="font-heading font-semibold text-slate-100 text-sm sm:text-base">First Year</span>
            <span className="text-xs text-slate-400">Period: 2026–Present</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">Technical Focus</span>
            <span className="font-heading font-semibold text-slate-100 text-sm sm:text-base">Python &amp; AI</span>
            <span className="text-xs text-slate-400">Web &amp; Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
};
