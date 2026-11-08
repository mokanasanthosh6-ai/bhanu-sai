import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, FolderGit2, Sparkles, Info, Cpu, Terminal, Calculator } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'n8n-ai-news-summarizer':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'vote-eligibility-python':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'interactive-calculator':
        return <Calculator className="w-5 h-5 text-emerald-400" />;
      case 'upcoming-ai-agent':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#07160f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium mb-2">
            <span>Engineering Showcase</span>
            <span aria-hidden="true">·</span>
            <span>05</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Featured Projects
              </h2>
              <p className="text-slate-300 text-base max-w-2xl text-balance">
                Applied computational projects spanning automated AI workflows, Python logic, and interactive mathematical software.
              </p>
            </div>
            <a
              href="https://github.com/bhanu416-jbs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors self-start md:self-auto py-1"
            >
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS_DATA.map((project) => {
            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-[#0b2117] border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg ${
                  project.featured
                    ? 'border-emerald-700/60 hover:border-emerald-400/80 hover:shadow-emerald-950/40'
                    : 'border-emerald-900/50 hover:border-emerald-700/70'
                }`}
              >
                <div>
                  {/* Top card bar with custom project icon and status */}
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getProjectIcon(project.id)}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-700/50">
                          Featured
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    <div className="text-xs text-emerald-400/90 font-medium mb-1">
                      {project.subtitle}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-slate-300 bg-[#07160f] px-2.5 py-1 rounded border border-emerald-950"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 bg-[#091d14] border-t border-emerald-950/90 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-slate-200 hover:text-white inline-flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <Info className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View Details &amp; Sandbox</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-slate-400 hover:text-emerald-300 transition-colors p-1"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.liveDemoUrl && (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`${project.title} Interactive Demo`}
                        className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 text-xs font-medium p-1 cursor-pointer"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Projects Room / Academic Sandbox Box */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#091e15] border border-dashed border-emerald-800/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Incubating Next Projects</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Future Project Space &amp; AI Lab Prototypes
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              As I progress through my B.Tech CSE (AI) curriculum at Joy × NIAT, this space is dedicated to upcoming explorations in autonomous workflows, neural network models, and computational problem solving.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://github.com/bhanu416-jbs"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-slate-100 bg-[#0d281c] hover:bg-[#123626] border border-emerald-700/60 rounded-lg inline-flex items-center justify-center gap-2 transition-all"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>Watch on GitHub</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold text-[#07150e] bg-emerald-400 hover:bg-emerald-300 rounded-lg inline-flex items-center justify-center gap-2 transition-all"
            >
              <span>Suggest an Idea</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
