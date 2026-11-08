import React, { useEffect, useState } from 'react';
import { X, Github, ArrowUpRight, Check, Play, RefreshCw, Calculator, ShieldCheck, Cpu, Terminal } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Calculator state
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState('');

  // Vote Eligibility state
  const [voterAge, setVoterAge] = useState<number | ''>(19);
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // n8n workflow simulation state
  const [n8nStep, setN8nStep] = useState<number>(0);
  const [isN8nRunning, setIsN8nRunning] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Reset simulator states on open
      setCalcInput('');
      setCalcResult('');
      setVoterResult(null);
      setN8nStep(0);
      setIsN8nRunning(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Calculator logic
  const handleCalcBtn = (val: string) => {
    if (val === 'C') {
      setCalcInput('');
      setCalcResult('');
    } else if (val === '=') {
      try {
        // Safe evaluation for basic arithmetic only
        if (!/^[0-9+\-*/. ()]+$/.test(calcInput)) {
          setCalcResult('Error');
          return;
        }
        // eslint-disable-next-line no-eval
        const res = Function(`"use strict"; return (${calcInput})`)();
        setCalcResult(String(Number(res.toFixed(4))));
      } catch {
        setCalcResult('Error');
      }
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  // Vote eligibility checker logic
  const runVoteEligibilityCheck = () => {
    if (voterAge === '' || isNaN(Number(voterAge))) {
      setVoterResult('Error: Please enter a valid numerical age.');
      return;
    }
    const ageNum = Number(voterAge);
    if (ageNum < 0 || ageNum > 125) {
      setVoterResult('Validation Failed: Age must be a positive realistic human age (0–125).');
    } else if (ageNum >= 18) {
      setVoterResult(`Eligible! At ${ageNum} years old, you meet the legal minimum voting age (18+). Status: Registered to Vote.`);
    } else {
      const remaining = 18 - ageNum;
      setVoterResult(`Not Yet Eligible: At ${ageNum} years old, you are ${remaining} year${remaining > 1 ? 's' : ''} away from reaching the voting age threshold (18).`);
    }
  };

  // n8n pipeline runner simulation
  const runN8nWorkflow = () => {
    setIsN8nRunning(true);
    setN8nStep(1);
    setTimeout(() => setN8nStep(2), 700);
    setTimeout(() => setN8nStep(3), 1400);
    setTimeout(() => {
      setN8nStep(4);
      setIsN8nRunning(false);
    }, 2100);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a1e15] border border-emerald-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-emerald-950/60 border border-transparent hover:border-emerald-800/40 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
          <span>Project Spotlight</span>
          <span aria-hidden="true">·</span>
          <span>{project.status}</span>
        </div>

        <h3 id="modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-emerald-300 font-medium text-sm sm:text-base mb-6">
          {project.subtitle}
        </p>

        {/* Description & Full Details */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          <p>{project.description}</p>
          {project.fullDetails && <p>{project.fullDetails}</p>}
        </div>

        {/* INTERACTIVE SIMULATION WIDGETS BASED ON PROJECT */}
        
        {/* 1. Calculator Live Interactive Demo */}
        {project.id === 'interactive-calculator' && (
          <div className="mb-6 p-5 rounded-xl bg-[#07160f] border border-emerald-800/60">
            <div className="flex items-center justify-between mb-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Calculator className="w-4 h-4" />
                <span>Live Calculator Sandbox</span>
              </span>
              <span className="text-slate-400 lowercase font-mono">interactive test</span>
            </div>

            <div className="max-w-xs mx-auto p-4 rounded-xl bg-[#0a1f16] border border-emerald-900 shadow-inner">
              <div className="mb-3 p-3 rounded-lg bg-[#06120b] border border-emerald-950 text-right">
                <div className="text-xs text-slate-400 font-mono min-h-[1.2rem] overflow-x-auto">
                  {calcInput || '0'}
                </div>
                <div className="text-xl font-bold font-mono text-emerald-300 min-h-[1.75rem]">
                  {calcResult || (calcInput ? '=' : '0')}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 font-mono text-sm">
                {['C', '(', ')', '/'].map((btn) => (
                  <button
                    key={btn}
                    type="button"
                    onClick={() => handleCalcBtn(btn)}
                    className="p-2.5 rounded-lg bg-[#0e2c1e] hover:bg-emerald-800/50 text-emerald-300 font-bold transition-colors cursor-pointer"
                  >
                    {btn}
                  </button>
                ))}
                {['7', '8', '9', '*'].map((btn) => (
                  <button
                    key={btn}
                    type="button"
                    onClick={() => handleCalcBtn(btn)}
                    className="p-2.5 rounded-lg bg-[#071710] hover:bg-[#0c2419] text-white transition-colors cursor-pointer"
                  >
                    {btn}
                  </button>
                ))}
                {['4', '5', '6', '-'].map((btn) => (
                  <button
                    key={btn}
                    type="button"
                    onClick={() => handleCalcBtn(btn)}
                    className="p-2.5 rounded-lg bg-[#071710] hover:bg-[#0c2419] text-white transition-colors cursor-pointer"
                  >
                    {btn}
                  </button>
                ))}
                {['1', '2', '3', '+'].map((btn) => (
                  <button
                    key={btn}
                    type="button"
                    onClick={() => handleCalcBtn(btn)}
                    className="p-2.5 rounded-lg bg-[#071710] hover:bg-[#0c2419] text-white transition-colors cursor-pointer"
                  >
                    {btn}
                  </button>
                ))}
                {['0', '.', '=', '%'].map((btn) => (
                  <button
                    key={btn}
                    type="button"
                    onClick={() => handleCalcBtn(btn)}
                    className={`p-2.5 rounded-lg transition-colors cursor-pointer font-bold ${
                      btn === '='
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-[#07150e]'
                        : 'bg-[#071710] hover:bg-[#0c2419] text-white'
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. Vote Eligibility Checker with Python Simulator */}
        {project.id === 'vote-eligibility-python' && (
          <div className="mb-6 p-5 rounded-xl bg-[#07160f] border border-emerald-800/60">
            <div className="flex items-center justify-between mb-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                <span>Python Logic Verification Sandbox</span>
              </span>
              <span className="text-slate-400 lowercase font-mono">python 3.12</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label htmlFor="age-test" className="text-xs text-slate-300 font-medium">
                  Enter Applicant Age:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="age-test"
                    type="number"
                    min="0"
                    max="120"
                    value={voterAge}
                    onChange={(e) => setVoterAge(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-24 px-3 py-1.5 rounded-lg bg-[#0a1e15] border border-emerald-900 text-white text-sm font-mono focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={runVoteEligibilityCheck}
                    className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#07150e] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Verification</span>
                  </button>
                </div>
              </div>

              {voterResult && (
                <div
                  className={`p-3.5 rounded-lg text-xs font-mono leading-relaxed border ${
                    voterResult.startsWith('Eligible')
                      ? 'bg-emerald-950/70 border-emerald-600/50 text-emerald-300'
                      : voterResult.startsWith('Validation') || voterResult.startsWith('Error')
                      ? 'bg-rose-950/60 border-rose-800/50 text-rose-300'
                      : 'bg-amber-950/60 border-amber-800/50 text-amber-200'
                  }`}
                >
                  <div className="font-semibold mb-1">&gt; Python CLI Return:</div>
                  <div>{voterResult}</div>
                </div>
              )}

              {/* Code snippet display */}
              <div className="p-3 bg-[#05110a] rounded-lg border border-emerald-950 font-mono text-[11px] text-slate-400 space-y-1">
                <span className="text-slate-500"># Core Evaluation Routine</span>
                <div>
                  <span className="text-emerald-400">def</span> <span className="text-teal-200">check_eligibility</span>(age):
                </div>
                <div className="pl-4">
                  <span className="text-emerald-400">if</span> age &gt;= 18: <span className="text-emerald-300">return</span> (&quot;Eligible&quot;, True)
                </div>
                <div className="pl-4">
                  <span className="text-emerald-400">else</span>: <span className="text-emerald-300">return</span> (f&quot;Ineligible: &#123;18 - age&#125; yrs remaining&quot;, False)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. n8n AI News Summarizer Workflow Simulator */}
        {project.id === 'n8n-ai-news-summarizer' && (
          <div className="mb-6 p-5 rounded-xl bg-[#07160f] border border-emerald-800/60">
            <div className="flex items-center justify-between mb-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>n8n Pipeline Architecture</span>
              </span>
              <button
                type="button"
                onClick={runN8nWorkflow}
                disabled={isN8nRunning}
                className="px-3 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-600/40 text-[11px] font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${isN8nRunning ? 'animate-spin' : ''}`} />
                <span>Simulate Execution</span>
              </button>
            </div>

            {/* n8n Node Sequence Visualizer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs font-mono">
              <div
                className={`p-3 rounded-lg border transition-all ${
                  n8nStep >= 1
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                    : 'bg-[#091e14] border-emerald-950 text-slate-400'
                }`}
              >
                <span className="text-[10px] text-slate-500 block mb-0.5">Step 1</span>
                <span className="font-semibold block">RSS Cron</span>
                <span className="text-[10px] text-slate-400">ArXiv &amp; TechFeeds</span>
              </div>

              <div
                className={`p-3 rounded-lg border transition-all ${
                  n8nStep >= 2
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                    : 'bg-[#091e14] border-emerald-950 text-slate-400'
                }`}
              >
                <span className="text-[10px] text-slate-500 block mb-0.5">Step 2</span>
                <span className="font-semibold block">HTML Sanitizer</span>
                <span className="text-[10px] text-slate-400">Extract Clean Text</span>
              </div>

              <div
                className={`p-3 rounded-lg border transition-all ${
                  n8nStep >= 3
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                    : 'bg-[#091e14] border-emerald-950 text-slate-400'
                }`}
              >
                <span className="text-[10px] text-slate-500 block mb-0.5">Step 3</span>
                <span className="font-semibold block">LLM Summarizer</span>
                <span className="text-[10px] text-slate-400">Key Insights Prompt</span>
              </div>

              <div
                className={`p-3 rounded-lg border transition-all ${
                  n8nStep >= 4
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                    : 'bg-[#091e14] border-emerald-950 text-slate-400'
                }`}
              >
                <span className="text-[10px] text-slate-500 block mb-0.5">Step 4</span>
                <span className="font-semibold block">Webhook Dispatch</span>
                <span className="text-[10px] text-slate-400">Telegram &amp; Email</span>
              </div>
            </div>

            {n8nStep === 4 && (
              <div className="p-3.5 bg-[#05110a] rounded-lg border border-emerald-700/50 text-xs text-slate-300 space-y-1.5 animate-in fade-in">
                <span className="font-bold text-emerald-300 font-mono block">
                  &gt; Sample Pipeline Output (Telegram Payload):
                </span>
                <p className="text-slate-200">
                  ⚡ <strong>Daily AI Digest:</strong> Researchers announce new state-space scaling techniques reducing attention compute by 42%. Open-source model weights published.
                </p>
                <span className="text-[10px] text-slate-500 block">Status: 200 OK · Duration: 840ms</span>
              </div>
            )}
          </div>
        )}

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 bg-[#07160f] p-4 sm:p-5 rounded-xl border border-emerald-900/60">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Key Features &amp; Technical Highlights
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies List */}
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
            Technologies &amp; Tools
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-emerald-200 bg-emerald-950/70 border border-emerald-700/50 px-3 py-1 rounded-md font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-emerald-900/60">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-slate-100 hover:text-white bg-[#0f2d1f] hover:bg-[#133827] border border-emerald-700/60 rounded-lg inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>GitHub Repository</span>
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target={project.liveDemoUrl.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-[#07150e] bg-emerald-400 hover:bg-emerald-300 rounded-lg inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm shadow-emerald-500/20"
            >
              <span>Live Preview</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
