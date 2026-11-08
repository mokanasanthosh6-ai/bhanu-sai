import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, ArrowUpRight, MessageSquareText, ShieldCheck, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [isOpenedGmail, setIsOpenedGmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyDraft = () => {
    const draftText = `Subject: ${formData.subject || 'Inquiry for J. Bhanu Sai'}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  // Helper to generate the Gmail web compose URL for Chrome
  const buildGmailComposeUrl = () => {
    const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name || 'Website Visitor'}`);
    const bodyContent = formData.message
      ? `Hello Bhanu Sai,\n\n${formData.message}\n\n---\nSender: ${formData.name || 'Website Visitor'}\nEmail: ${formData.email || 'Not specified'}`
      : `Hello Bhanu Sai,\n\nI came across your developer portfolio and wanted to get in touch.`;
    const bodyEncoded = encodeURIComponent(bodyContent);

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const gmailUrl = buildGmailComposeUrl();
    setIsOpenedGmail(true);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent('Inquiry for J. Bhanu Sai')}`;

  return (
    <section id="contact" className="py-20 bg-[#091a12] border-t border-emerald-950/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-medium mb-2">
            <span>Get In Touch</span>
            <span aria-hidden="true">·</span>
            <span>06</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Contact Me
          </h2>
          <p className="text-slate-300 text-base max-w-2xl text-balance">
            Whether you want to discuss student projects, artificial intelligence coursework, or internship opportunities, you can open Gmail in Chrome directly to write to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0b2117] border border-emerald-800/40 shadow-xl">
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Click to open Gmail directly in Chrome with my recipient address preloaded.
              </p>

              {/* Direct Email Card with Gmail Web Opener and Quick Copy */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#07160f] border border-emerald-900/60 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                        Personal Email · Gmail
                      </span>
                      <a
                        href={directGmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to open in Gmail on Chrome"
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={directGmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open in Gmail (Chrome)"
                      aria-label="Open in Gmail (Chrome)"
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Gmail</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      aria-label="Copy email address"
                      className="p-2 rounded-lg bg-[#0b2218] hover:bg-[#0f2d20] border border-emerald-800/50 text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* GitHub Profile */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#07160f] border border-emerald-900/60 hover:border-emerald-700/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                        github.com/bhanu416-jbs
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* LinkedIn Profile */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#07160f] border border-emerald-900/60 hover:border-emerald-700/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                        Bhanu Sai Jarugula
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Location Affiliation */}
                <div className="p-4 rounded-xl bg-[#07160f] border border-emerald-900/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                      Academic Institution
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      Joy × NIAT Engineering Campus
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Direct Gmail in Chrome Dispatch */}
          <div className="lg:col-span-7 bg-[#0b2117] rounded-2xl p-6 sm:p-8 border border-emerald-800/40 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <MessageSquareText className="w-4 h-4 text-emerald-400" />
                <span>Send a Message</span>
              </h3>
              <span className="text-[11px] text-emerald-400 font-mono">
                Opens in Gmail (Chrome)
              </span>
            </div>

            {/* Clear Transparency Banner */}
            <div className="mb-6 p-3.5 rounded-lg bg-[#071710] border border-emerald-900/60 flex items-start gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong>Seamless Gmail Integration:</strong> Clicking the button below opens Google Mail directly in your Chrome browser with your recipient, subject, and message pre-populated so you can review and send in one click.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07160f] border border-emerald-900/70 focus:border-emerald-500 focus:outline-none text-slate-200 text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07160f] border border-emerald-900/70 focus:border-emerald-500 focus:outline-none text-slate-200 text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="e.g. Collaboration on AI / Engineering Project"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07160f] border border-emerald-900/70 focus:border-emerald-500 focus:outline-none text-slate-200 text-sm placeholder:text-slate-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Hello Bhanu Sai, I came across your portfolio and wanted to reach out regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07160f] border border-emerald-900/70 focus:border-emerald-500 focus:outline-none text-slate-200 text-sm placeholder:text-slate-600 transition-colors resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {/* Primary Action: Direct Chrome Gmail link with target="_blank" */}
                <a
                  href={buildGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpenedGmail(true)}
                  className="px-6 py-2.5 text-xs font-semibold text-[#07150e] bg-emerald-400 hover:bg-emerald-300 rounded-lg inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm shadow-emerald-500/20 active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open &amp; Send in Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                {/* Secondary Action: Copy draft to clipboard */}
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  disabled={!formData.message}
                  className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-[#07160f] hover:bg-[#0c2217] border border-emerald-900/80 rounded-lg inline-flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied Draft to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Draft to Clipboard</span>
                    </>
                  )}
                </button>
              </div>

              {isOpenedGmail && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-xs text-emerald-300 animate-in fade-in flex items-center justify-between gap-3">
                  <span>Gmail compose opened in a new Chrome tab addressed to <strong>{PERSONAL_INFO.email}</strong>.</span>
                  <a
                    href={buildGmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-200 hover:text-white shrink-0 font-medium"
                  >
                    Open again
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
