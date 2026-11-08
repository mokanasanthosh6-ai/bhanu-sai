import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookMarked, Cpu, Sparkles } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#07160f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium mb-2">
            <span>Academic Journey</span>
            <span aria-hidden="true">·</span>
            <span>02</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed text-balance">
            Building strong theoretical foundations and practical engineering skills at Joy × NIAT.
          </p>
        </div>

        {/* Featured Education Card */}
        <div className="rounded-2xl bg-[#0b2117] border border-emerald-800/40 p-6 sm:p-9 shadow-xl relative overflow-hidden">
          {/* Subtle accent corner highlight */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-[90px] pointer-events-none rounded-full"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Degree & Institution Meta */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Undergraduate Program
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-emerald-300 font-medium text-base sm:text-lg mt-1">
                    {EDUCATION_DATA.branch}
                  </p>
                </div>
              </div>

              {/* Institution & Period Badges as Clean Unboxed Text */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 pt-2 border-t border-emerald-950/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-medium text-white">{EDUCATION_DATA.institution}</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Period: <strong className="text-slate-100">{EDUCATION_DATA.academicPeriod}</strong></span>
                </div>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Standing: <strong className="text-emerald-300">{EDUCATION_DATA.year}</strong></span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a first-year student specializing in Computer Science and Engineering (Artificial Intelligence), my academic coursework is tailored around core engineering mathematics, computational algorithmic problem-solving, structured programming paradigms, and early explorations into machine learning and intelligent agent frameworks.
              </p>
            </div>

            {/* Right Column: Key Coursework & Focus Areas */}
            <div className="lg:col-span-5 bg-[#091a12] rounded-xl p-6 border border-emerald-900/60">
              <div className="flex items-center gap-2 mb-4 text-white font-heading font-semibold text-base">
                <BookMarked className="w-4 h-4 text-emerald-400" />
                <span>Core Academic Focus Areas</span>
              </div>

              <ul className="space-y-3">
                {EDUCATION_DATA.focusAreas.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-md bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-[11px] text-emerald-400 font-mono shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-emerald-950/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Joy × NIAT Curriculum</span>
                </span>
                <span className="text-emerald-400 font-mono">2026 Semester Sprint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
