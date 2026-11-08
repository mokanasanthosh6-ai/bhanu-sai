import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050f0a] text-slate-400 border-t border-emerald-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-emerald-950/80">
          {/* Logo & Student Identity */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold text-sm tracking-wider">
              {PERSONAL_INFO.initials}
            </span>
            <div>
              <span className="font-heading font-semibold text-white text-base block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-emerald-400/90 font-mono">
                B.Tech CSE (AI) · Joy × NIAT
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#0b2117] text-slate-300 hover:text-emerald-400 hover:border-emerald-700/60 border border-emerald-900/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#0b2117] text-slate-300 hover:text-emerald-400 hover:border-emerald-700/60 border border-emerald-900/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent('Inquiry for J. Bhanu Sai')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose email to Bhanu Sai in Gmail"
              title="Open in Gmail (Chrome)"
              className="p-2 rounded-lg bg-[#0b2117] text-slate-300 hover:text-emerald-400 hover:border-emerald-700/60 border border-emerald-900/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-[#0b2117] text-slate-300 hover:text-emerald-400 hover:border-emerald-700/60 border border-emerald-900/50 transition-colors ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Automatic Dynamic Copyright Year & Credential */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Designed for recruiters, faculty &amp; collaborators</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-mono">Joy × NIAT (2026–Present)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
