import React, { useState } from 'react';
import { Award, Trophy, Code2, Sparkles, CheckCircle2, Star, Bookmark, ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS_DATA, Achievement } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Academic' | 'Competition' | 'Coding Milestone' | 'Technical'>('All');

  const filteredAchievements = ACHIEVEMENTS_DATA.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'Competition':
        return <Trophy className="w-5 h-5 text-emerald-400" />;
      case 'Coding Milestone':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Academic':
        return <Award className="w-5 h-5 text-emerald-400" />;
      case 'Technical':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Bookmark className="w-5 h-5 text-emerald-400" />;
    }
  };

  const categories: Array<'All' | 'Academic' | 'Competition' | 'Coding Milestone' | 'Technical'> = [
    'All',
    'Competition',
    'Coding Milestone',
    'Academic',
    'Technical',
  ];

  return (
    <section id="achievements" className="py-20 bg-[#07160f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium mb-2">
              <span>Milestones &amp; Honors</span>
              <span aria-hidden="true">·</span>
              <span>03</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Achievements
            </h2>
            <p className="text-slate-300 text-base max-w-xl text-balance">
              Academic honors, coding milestones, and competition recognitions earned during my engineering journey at Joy × NIAT.
            </p>
          </div>

          {/* Interactive Filter Control (Buttons Allowed per Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0b2418] rounded-xl border border-emerald-900/60 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-emerald-500 text-[#07150e] font-semibold shadow-sm shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-emerald-950/50'
                }`}
              >
                {cat === 'All' ? `All (${ACHIEVEMENTS_DATA.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0a1e15] border border-emerald-800/40">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
              Problem Solving
            </span>
            <span className="font-heading text-2xl font-bold text-white block">
              150+
            </span>
            <span className="text-xs text-emerald-400">Algorithmic Problems</span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
              Tech Challenge
            </span>
            <span className="font-heading text-2xl font-bold text-white block">
              Top 10
            </span>
            <span className="text-xs text-emerald-400">Joy × NIAT Finalist</span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
              Academic Cohort
            </span>
            <span className="font-heading text-2xl font-bold text-white block">
              AI Track
            </span>
            <span className="text-xs text-emerald-400">Joy × NIAT Specialization</span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
              Active Focus
            </span>
            <span className="font-heading text-2xl font-bold text-white block">
              100%
            </span>
            <span className="text-xs text-emerald-400">Continuous Daily Practice</span>
          </div>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, index) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 bg-[#0b2117] border border-emerald-800/40 hover:border-emerald-500/60 hover:bg-[#0e2a1d] transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Card Header: Icon + Category and Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>

                  {/* Clean unboxed metadata per Section 1.A */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-emerald-400 font-semibold">{item.badge}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Organization as clean text */}
                <div className="text-xs text-emerald-300/90 font-medium mb-3">
                  {item.organization}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer Impact Marker */}
              {item.impact && (
                <div className="pt-4 border-t border-emerald-950/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.impact}</span>
                  </span>
                  <span className="font-mono text-slate-500">0{index + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
