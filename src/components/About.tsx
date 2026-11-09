import React from 'react';
import { BookOpen, Terminal, Rocket, CheckCircle2, User, Compass, Target } from 'lucide-react';
import { ABOUT_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#091a12] border-t border-b border-emerald-950/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium mb-2">
            <span>Profile</span>
            <span aria-hidden="true">·</span>
            <span>01</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed text-balance">
            A curious engineer driven by the possibilities of artificial intelligence and systems programming.
          </p>
        </div>

        {/* Narrative & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a first-year undergraduate student pursuing a Bachelor of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence at <strong className="text-emerald-300 font-semibold">{PERSONAL_INFO.location}</strong>.
            </p>
            <p>
              My journey into engineering began with simple curiosity: understanding how computers think, how complex data structures optimize memory, and how mathematical models enable software to make intelligent inferences. Rather than treating code as abstract syntax, I view it as an expressive toolkit to build solutions that matter.
            </p>
            <p>
              Every week, I balance theoretical foundations with hands-on implementation—exploring object-oriented programming, computational scripting, and algorithm design in Python, along with clean, accessible interfaces on the web. I believe the most effective engineers are those who love both foundational fundamentals and pragmatic shipping.
            </p>

            {/* Core Values / Philosophy inline highlights */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0d261b] border border-emerald-900/60 flex items-start gap-3">
                <Compass className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-slate-100 text-sm mb-1">Curious Mindset</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Questioning how things work behind abstractions—from bytecode execution to algorithm complexity.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0d261b] border border-emerald-900/60 flex items-start gap-3">
                <Target className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-slate-100 text-sm mb-1">Consistency</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Committing daily code, refining algorithms, and steadily advancing toward AI engineering excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic & Student Snapshot */}
          <div className="lg:col-span-5 bg-[#0d241a] rounded-2xl p-6 sm:p-7 border border-emerald-800/40 shadow-xl">
            <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" />
              <span>Snapshot & Focus</span>
            </h3>

            <div className="space-y-4 text-sm divide-y divide-emerald-950/80">
              <div className="pt-2 flex justify-between items-baseline gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-400">Current Standing</span>
                <span className="font-medium text-slate-200 text-right">First-Year Undergraduate (2026–Present)</span>
              </div>
              <div className="pt-3 flex justify-between items-baseline gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-400">Department</span>
                <span className="font-medium text-emerald-300 text-right">CSE (Artificial Intelligence)</span>
              </div>
              <div className="pt-3 flex justify-between items-baseline gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-400">Campus</span>
                <span className="font-medium text-slate-200 text-right">Joy × NIAT</span>
              </div>
              <div className="pt-3 flex justify-between items-baseline gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-400">Primary Languages</span>
                <span className="font-medium text-slate-200 text-right">Python</span>
              </div>
              <div className="pt-3 flex justify-between items-baseline gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-400">Aspiration</span>
                <span className="font-medium text-emerald-400 text-right">AI & Intelligent Systems Engineer</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-emerald-900/60">
              <p className="text-xs text-slate-400 leading-relaxed italic">
                &ldquo;Engineering is not merely about writing lines of code; it is about cultivating the clarity to solve problems methodically.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* The Three Core Highlights Required by User: Learn, Practice, Grow */}
        <div className="pt-6">
          <div className="text-center sm:text-left mb-8">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">Guiding Principles</span>
            <h3 className="font-heading text-2xl font-bold text-white mt-1">
              How I Approach My Engineering Craft
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_PILLARS.map((pillar, index) => {
              const icons = [
                <BookOpen className="w-5 h-5 text-emerald-400" key="learn" />,
                <Terminal className="w-5 h-5 text-emerald-400" key="practice" />,
                <Rocket className="w-5 h-5 text-emerald-400" key="grow" />,
              ];

              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-[#0b2016] border border-emerald-800/40 hover:border-emerald-500/50 hover:bg-[#0e2a1d] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-600/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      {icons[index]}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-heading text-xl font-bold text-white">
                        {pillar.title}
                      </span>
                      <span className="text-slate-600 text-sm font-mono">0{index + 1}</span>
                    </div>
                    <p className="font-heading font-medium text-sm text-emerald-300 mb-3">
                      {pillar.highlight}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-emerald-950/60 flex items-center gap-2 text-xs text-emerald-400/80 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
