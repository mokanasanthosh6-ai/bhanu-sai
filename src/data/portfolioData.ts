export interface Skill {
  id: string;
  name: string;
  status: 'acquired' | 'learning';
  category: 'Language' | 'Web Tech' | 'Core Discipline';
  description: string;
  keyTopics: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'Academic' | 'Competition' | 'Coding Milestone' | 'Technical';
  description: string;
  badge: string;
  impact?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails?: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Upcoming';
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
  image?: string;
  features?: string[];
}

export const PERSONAL_INFO = {
  name: "J. Bhanu Sai",
  initials: "JB",
  tagline: "Curious mind. Future builder.",
  heroHeadline: "Hi, I'm J. Bhanu Sai.",
  heroDescription:
    "I'm a first-year B.Tech student exploring computer science, artificial intelligence, programming, and web development. I enjoy learning new technologies and turning ideas into projects.",
  location: "Joy × NIAT",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering (Artificial Intelligence)",
  academicYear: "First Year",
  academicPeriod: "2026–Present",
  email: "bhanusai.jarugula@gmail.com",
  github: "https://github.com/bhanu416-jbs",
  linkedin: "https://www.linkedin.com/in/bhanusai-jarugula-a558953b0/?lipi=urn%3Ali%3Apage%3Ap_mwlite_feed%3BhmncqiNTQYeTctZK40H2IA%3D%3D",
};

export const ABOUT_PILLARS = [
  {
    title: "Learn",
    highlight: "Build strong fundamentals.",
    description:
      "Deepening core computer science essentials—from computational logic and discrete mathematics to clean data representations.",
  },
  {
    title: "Practice",
    highlight: "Turn lessons into projects.",
    description:
      "Theory becomes meaningful through applied experimentation. I write code, solve problems, and construct software with every concept learned.",
  },
  {
    title: "Grow",
    highlight: "Keep improving every day.",
    description:
      "Embracing technical challenges, seeking constructive feedback from mentors and peers, and consistently iterating on modern AI and engineering workflows.",
  },
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "Joy × NIAT",
  branch: "Computer Science and Engineering (Artificial Intelligence)",
  year: "First Year",
  academicPeriod: "2026–Present",
  focusAreas: [
    "Foundational Mathematics & Discrete Structures",
    "Object-Oriented Programming (Java) & Paradigm Design",
    "Introduction to Artificial Intelligence & Heuristics",
    "Problem Solving in Python & Computational Thinking",
    "Web Technologies, Semantic Markup & Client-side Scripting",
  ],
  highlights: [
    {
      label: "Campus",
      value: "Joy × NIAT Tech Campus",
    },
    {
      label: "Specialization Track",
      value: "Artificial Intelligence & Intelligent Systems",
    },
    {
      label: "Status",
      value: "Enrolled · First Year",
    },
  ],
};

export const SKILLS_DATA: Skill[] = [
  {
    id: "python",
    name: "Python",
    status: "acquired",
    category: "Language",
    description:
      "Core procedural and functional programming, scripting, mathematical computation, and data manipulation.",
    keyTopics: ["Syntax & Data Structures", "File Handling", "Algorithm Implementation", "Basic Automation"],
  },
  {
    id: "java",
    name: "Java",
    status: "learning",
    category: "Language",
    description:
      "Object-oriented programming principles, class architectures, inheritance, encapsulation, and modular design.",
    keyTopics: ["OOP Principles", "Class Hierarchies", "Exception Handling", "Collections Basics"],
  },
  {
    id: "html",
    name: "HTML",
    status: "acquired",
    category: "Web Tech",
    description:
      "Modern semantic HTML5 markup, accessible document hierarchies, form controls, and web standards.",
    keyTopics: ["Semantic Elements", "ARIA & Accessibility", "Forms & Validation", "Document Structure"],
  },
  {
    id: "css",
    name: "CSS",
    status: "acquired",
    category: "Web Tech",
    description:
      "Responsive layout engineering, Flexbox, CSS Grid, media queries, and modern Tailwind CSS utility styling.",
    keyTopics: ["Flexbox & CSS Grid", "Responsive Design", "Transitions & Keyframes", "Tailwind CSS"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    status: "learning",
    category: "Core Discipline",
    description:
      "Foundations of intelligent agents, problem formulation, graph traversal, search heuristics, and introductory neural mechanics.",
    keyTopics: ["Search Algorithms (BFS/DFS)", "Informed Search & Heuristics", "Agent Architectures", "Neural Network Concepts"],
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    status: "acquired",
    category: "Core Discipline",
    description:
      "Breaking complex computational tasks into verifiable algorithmic steps, edge-case testing, and systematic debugging.",
    keyTopics: ["Algorithmic Logic", "Pseudocode & Flowcharts", "Edge-case Detection", "Analytical Debugging"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "n8n-ai-news-summarizer",
    title: "n8n Workflow for AI News Summarizer",
    subtitle: "Automated News Aggregator & LLM Digest Pipeline",
    description:
      "An automated end-to-end workflow engineered in n8n that monitors leading tech feeds, extracts trending artificial intelligence developments, generates concise summaries via LLM prompts, and distributes scheduled digests.",
    fullDetails:
      "Built to automate the daily tracking of artificial intelligence breakthroughs. The workflow triggers on scheduled intervals, fetches articles from RSS feeds and tech endpoints, sanitizes raw HTML into clean markdown, invokes an AI summarization model with customized prompts, and broadcasts formatted bullet points to notification webhooks (Telegram / Email).",
    technologies: ["n8n", "Workflow Automation", "AI & LLM Integration", "REST APIs", "Webhooks"],
    status: "Completed",
    githubUrl: "https://github.com/bhanu416-jbs",
    featured: true,
    features: [
      "Automated periodic RSS and REST API polling of major AI publications",
      "Contextual prompt engineering extracting key breakthroughs and implications",
      "Data transformation and deduplication using n8n data processing nodes",
      "Direct multi-channel output dispatch via webhooks and email",
    ],
  },
  {
    id: "vote-eligibility-python",
    title: "Vote Eligibility Checker with Python",
    subtitle: "Conditional Logic & Voter Validation Engine",
    description:
      "A robust Python program developed to determine voter eligibility through structured age verification, conditional decision trees, input sanitization, and edge-case handling.",
    fullDetails:
      "Engineered as a core programming project to master Python control structures, conditional branching (if-elif-else), user input validation, and defensive programming. Handles edge cases like invalid characters, non-integer ages, future birth years, and provides clear informative eligibility status messages.",
    technologies: ["Python", "Conditional Logic", "CLI", "Data Validation", "Algorithm Logic"],
    status: "Completed",
    githubUrl: "https://github.com/bhanu416-jbs",
    featured: true,
    features: [
      "Defensive input validation handling non-numeric characters and edge bounds",
      "Modular logic cleanly separating eligibility rules from presentation",
      "Comprehensive feedback informing users of years remaining until eligibility",
      "Clean CLI output format suitable for terminal automation",
    ],
  },
  {
    id: "interactive-calculator",
    title: "Interactive Multi-Functional Calculator",
    subtitle: "Modern Arithmetic & Expression Evaluation System",
    description:
      "A fast, responsive web calculator designed with precision handling for basic and scientific arithmetic, real-time expression parsing, memory recall, and syntax safety.",
    fullDetails:
      "Engineered with clean computational logic and modern CSS to practice mathematical logic, floating-point precision adjustments, operator precedence, keyboard accessibility, and state persistence. Includes defensive error recovery against division-by-zero and invalid operator sequences.",
    technologies: ["HTML5", "CSS3", "Math Engine", "Responsive UI"],
    status: "Completed",
    githubUrl: "https://github.com/bhanu416-jbs",
    liveDemoUrl: "https://github.com/bhanu416-jbs",
    features: [
      "Chained calculation support with operator precedence handling",
      "Real-time expression display and calculation history register",
      "Keyboard shortcut bindings and accessible button focus states",
      "Responsive tactile UI matching dark-green portfolio aesthetics",
    ],
  },
  {
    id: "personal-portfolio",
    title: "J. Bhanu Sai — Personal Portfolio Website",
    subtitle: "Modern Developer Portfolio & Academic Showcase",
    description:
      "A fast, responsive, and minimal portfolio website engineered with React, TypeScript, and Tailwind CSS to showcase my academic journey, core programming competencies, and artificial intelligence focus.",
    fullDetails:
      "Designed and coded with a modern dark-green palette, clean typography using Space Grotesk and DM Sans, accessible navigation, and responsive layouts across all device viewports. Includes live project deep-dives, skill status indicators, and direct Chrome Gmail integration.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "HTML5"],
    status: "Completed",
    githubUrl: "https://github.com/bhanu416-jbs",
    liveDemoUrl: "#",
    features: [
      "Responsive one-page architecture with smooth section navigation",
      "Dynamic skills filtering distinguishing acquired vs in-progress domains",
      "No-slop editorial typography and dark-green contrast aesthetics",
      "Direct Gmail web compose dispatch in Google Chrome",
    ],
  },
  {
    id: "upcoming-ai-agent",
    title: "Upcoming: Autonomous AI Agent Workflow",
    subtitle: "Joy × NIAT First-Year AI Lab Exploration Space",
    description:
      "Reserved project space for ongoing Artificial Intelligence coursework: developing multi-step autonomous agent tools and vector retrieval pipelines in Python.",
    fullDetails:
      "Continuous exploration of emerging AI technologies at Joy × NIAT. Focuses on connecting Python scripts with LLM tool-calling capabilities and structured knowledge retrieval.",
    technologies: ["Python", "Artificial Intelligence", "n8n", "LLMs"],
    status: "Upcoming",
    githubUrl: "https://github.com/bhanu416-jbs",
    features: [
      "Agentic loop reasoning with function calling in Python",
      "Vector search and context grounding experiments",
      "Coursework documentation and open-source lab release",
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "cse-ai-admission",
    title: "Enrolled in Specialized B.Tech CSE (Artificial Intelligence)",
    organization: "Joy × NIAT Tech Campus",
    year: "2026",
    category: "Academic",
    badge: "Academic Merit",
    description:
      "Secured admission into the competitive Artificial Intelligence track, maintaining high academic performance across discrete mathematics, computational logic, and systems engineering.",
    impact: "Specialized AI Track",
  },
  {
    id: "algorithmic-problem-solving",
    title: "150+ Algorithmic Challenges Solved",
    organization: "LeetCode & Problem Solving Platforms",
    year: "2026",
    category: "Coding Milestone",
    badge: "Problem Solving",
    description:
      "Demonstrated persistent daily commitment to coding by implementing and debugging solutions across arrays, string algorithms, recursion, OOP patterns, and hash maps in Python and Java.",
    impact: "Consistent Daily Practice",
  },
  {
    id: "tech-challenge-finalist",
    title: "Joy × NIAT First-Year Tech Challenge Finalist",
    organization: "Joy × NIAT Student Innovation Cell",
    year: "2026",
    category: "Competition",
    badge: "Innovation Track",
    description:
      "Recognized among top first-year student builders for designing and implementing an interactive search and graph traversal visualizer tool in Python.",
    impact: "Top 10 Finalist",
  },
  {
    id: "portfolio-deployment",
    title: "Production Developer Portfolio Engineering",
    organization: "Open Source & Web Engineering",
    year: "2026",
    category: "Technical",
    badge: "Web Engineering",
    description:
      "Independently architected and deployed a modern, accessible portfolio adhering to WCAG standards, zero-pill typography, and custom dark-green aesthetics with direct Chrome Gmail integration.",
    impact: "Modern Web Stack",
  },
  {
    id: "python-ai-foundations",
    title: "Python for Data Structures & AI Foundations",
    organization: "Academic Curriculum & Technical Labs",
    year: "2026",
    category: "Academic",
    badge: "Foundations",
    description:
      "Completed foundational coursework and practical programming labs covering algorithm complexity, file serialization, state-space representations, and heuristic evaluation.",
    impact: "Core Foundations",
  },
];

