import React, { useState } from 'react';
import { CheckCircle2, Clock, Terminal, Globe, Brain, HelpCircle, Layers, Sparkles } from 'lucide-react';
import { SKILLS_DATA, Skill } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'acquired' | 'learning'>('all');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (filter === 'all') return true;
    return skill.status === filter;
  });

  const getCategoryIcon = (category: Skill['category'], skillId: string) => {
    if (skillId === 'ai') return <Brain className="w-5 h-5 text-emerald-400" />;
    if (skillId === 'problem-solving') return <HelpCircle className="w-5 h-5 text-emerald-400" />;
    if (category === 'Language') return <Terminal className="w-5 h-5 text-emerald-400" />;
    return <Globe className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-[#091a12] border-t border-b border-emerald-950/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium mb-2">
              <span>Technical Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>04</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Skills & Competencies
            </h2>
            <p className="text-slate-300 text-base max-w-xl text-balance">
              Transparent overview of languages and disciplines currently acquired versus areas under active study in my first year.
            </p>
          </div>

          {/* Interactive Filter Control (Buttons Allowed per Section 1.A) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0b2418] rounded-xl border border-emerald-900/60 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-emerald-500 text-[#07150e] font-semibold shadow-sm shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-emerald-950/50'
              }`}
            >
              All Skills ({SKILLS_DATA.length})
            </button>

            <button
              type="button"
              onClick={() => setFilter('acquired')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'acquired'
                  ? 'bg-emerald-500 text-[#07150e] font-semibold shadow-sm shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-emerald-950/50'
              }`}
            >
              Acquired ({SKILLS_DATA.filter((s) => s.status === 'acquired').length})
            </button>

            <button
              type="button"
              onClick={() => setFilter('learning')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'learning'
                  ? 'bg-emerald-500 text-[#07150e] font-semibold shadow-sm shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-emerald-950/50'
              }`}
            >
              Currently Learning ({SKILLS_DATA.filter((s) => s.status === 'learning').length})
            </button>
          </div>
        </div>

        {/* Status Legend Bar */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#0b2117] border border-emerald-900/40 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <strong className="text-white">Acquired:</strong> Practiced in projects and coursework
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-300" />
              <strong className="text-white">Currently Learning:</strong> Active curriculum sprint & deep dive
            </span>
          </div>
          <span className="text-slate-400 italic">No invented percentages · Genuine skill progression</span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const isAcquired = skill.status === 'acquired';

            return (
              <div
                key={skill.id}
                className="rounded-2xl p-6 bg-[#0b2218] border border-emerald-800/40 hover:border-emerald-500/60 hover:bg-[#0e2a1d] transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
                  {/* Top card bar: Icon + Category + Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(skill.category, skill.id)}
                    </div>

                    {/* Distinct Status Indicator */}
                    <div
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md border ${
                        isAcquired
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-600/40'
                          : 'bg-teal-950/60 text-teal-300 border-teal-600/40'
                      }`}
                    >
                      {isAcquired ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Acquired</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-teal-300" />
                          <span>Currently Learning</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Skill Title & Category */}
                  <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-xs text-slate-400 mb-3 flex items-center gap-2">
                    <span>{skill.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>CSE (AI) Track</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Key Concepts / Topics */}
                <div className="pt-4 border-t border-emerald-950/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Topics Practiced
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-300 bg-[#07160f] px-2.5 py-1 rounded border border-emerald-900/50"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
