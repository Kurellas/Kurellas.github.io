"use client";

import { useEffect, useRef, useState } from "react";

const profile = {
  name: "Sree Chandana Kurella",
  title: "Appian Certified Senior Developer",
  location: "Charlotte, NC",
  email: "sreechandanakurella@gmail.com",
  linkedin: "linkedin.com/in/sreechandanakurella",
  github: "github.com",
  summary:
    "Senior Appian Developer with 7+ years of experience developing and optimizing enterprise applications. Skilled in business process automation, workflow optimization, system integrations, and delivering scalable solutions across banking, higher education, and commercial domains.",
};

const interests = [
  "Super hero movies",
  "Rom-coms",
  "Novels",
  "Comics",
  "Painting",
  "Sleeping",
  "Board games",
];

const experience = [
  {
    role: "Software Engineer - II",
    company: "Bank of America",
    period: "Oct 2025 – Present",
    points: [
      "Designing and enhancing enterprise Appian workflows for high-volume business operations.",
      "Improving process performance, scalability, and user experience across business-critical systems.",
    ],
  },
  {
    role: "Technology Specialist - Appian",
    company: "Montclair State University",
    period: "Jul 2024 – Sep 2025",
    points: [
      "Built and maintained Appian solutions for enrollment, graduate assistantship, and advisor workflows.",
      "Integrated academic systems and created dashboards to improve operational visibility and decision-making.",
    ],
  },
  {
    role: "Graduate Assistant, The Graduate School",
    company: "Montclair State University",
    period: "Feb 2023 – May 2024",
    points: [
      "Maintained and enhanced web-based platforms, updating content, integrating forms, and implementing workflows.",
      "Developed applications using PHP, AJAX, HTML, CSS, SQL, JavaScript, WordPress, and Appian low-code components.",
    ],
  },
  {
    role: "Senior Appian Developer - Subject Matter Expert",
    company: "Wipro",
    period: "Jun 2019 – Jul 2022",
    points: [
      "Delivered BPM solutions using Appian, Java, and database integrations to automate business processes.",
      "Collaborated with stakeholders to translate requirements into reliable, scalable application solutions.",
    ],
  },
  {
    role: "Web Development Intern - Appian",
    company: "Visibility Blaster",
    period: "Aug 2018 – May 2019",
    points: [
      "Performed CRUD operations and maintained product catalogs for sanitary fittings and hardware websites.",
      "Developed Appian workflows for inventory, order tracking, and process automation.",
    ],
  },
];

const projects = [
  {
    name: "Hybrid Movie Recommendation System",
    type: "ML + Web Application",
    description:
      "A hybrid recommendation system combining content-based and collaborative filtering for personalized movie suggestions.",
    stack: ["Python", "Machine Learning", "Recommendation Engine", "Web App"],
  },
  {
    name: "Autonomous Golfcart Testbed",
    type: "Research & Prototyping",
    description:
      "A testbed for autonomous golf cart experimentation, supporting system validation, navigation logic, and operational testing.",
    stack: ["Embedded Systems", "Automation", "Research", "Testing"],
  },
  {
    name: "Graduate Assistantship Management System",
    type: "Appian Workflow Platform",
    description:
      "Built and maintained Appian-based academic workflows for graduate assistantship administration, enrollment tracking, and advisor-facing reporting.",
    stack: ["Appian", "Banner", "Slate", "SQL", "Dashboards"],
  },
  {
    name: "Enterprise BPM Automation",
    type: "Process Optimization",
    description:
      "Developed Appian process models and integrations to streamline internal operations, reduce manual effort, and improve process governance.",
    stack: ["Appian", "Java", "Oracle", "RPA", "Reporting"],
  },
  {
    name: "Product & Inventory Management Workflows",
    type: "Web + Appian Automation",
    description:
      "Created workflow automation for inventory tracking, order pipelines, and product catalog management for web-based commercial operations.",
    stack: ["Appian", "PHP", "HTML", "CSS", "JavaScript"],
  },
];

const skills = {
  frontend: ["Appian", "JavaScript", "HTML", "CSS", "Angular", "Bootstrap"],
  backend: ["Java", "SQL", "Python", "PHP", "Spring Boot", "REST APIs"],
  tools: ["Appian", "TOAD", "JIRA", "Bitbucket", "ServiceNow", "Git", "Jenkins", "MySQL"],
};

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Montclair State University",
    period: "May 2024",
  },
];

const certifications = [
  "Appian Certified Senior Developer",
  "Appian Certified Associate Developer",
  "Appian Sales Accreditation",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const shouldShow = currentY < lastScrollY.current || currentY < 32;
      setIsNavVisible(shouldShow || menuOpen);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header
          className={`sticky top-4 z-20 mb-10 rounded-full border border-slate-800/80 bg-slate-900/70 px-4 py-3 shadow-lg shadow-slate-950/30 backdrop-blur transition-transform duration-300 ${
            isNavVisible || menuOpen ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <a href="#about" className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300">
                Home
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300 md:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
              </span>
            </button>

            <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#experience" className="transition hover:text-white">Experience</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#skills" className="transition hover:text-white">Skills</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </div>

          {menuOpen && (
            <nav className="mt-4 flex flex-col gap-3 border-t border-slate-800 pt-4 text-sm text-slate-300 md:hidden">
              <a href="#about" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#experience" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#skills" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#contact" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          )}
        </header>

        <section id="about" className="grid items-center gap-10 pb-16 pt-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Available for opportunities
            </p>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-cyan-300">{profile.title}</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{profile.summary}</p>

           
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl shadow-cyan-950/20">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Quick Profile</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <div>
                <p className="text-sm text-slate-400">Specialization</p>
                <p className="mt-1 text-lg font-semibold text-white">Business Process Automation</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-1 text-lg font-semibold text-white">Appian & enterprise workflows</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Industries</p>
                <p className="mt-1 text-lg font-semibold text-white">Banking, education, enterprise tech</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Experience</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Professional journey</h2>
            </div>
            <a
              href="/SreeChandanaKurella_Resume.txt"
              download
              className="inline-flex items-center rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              Download Resume
            </a>
          </div>

          <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-700 sm:before:left-6">
            {experience.map((job, index) => (
              <article
                key={`${job.company}-${job.period}`}
                className="relative pl-10 sm:pl-12"
              >
                <div className="absolute left-0 top-7 h-8 w-8 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/30 sm:left-2" />
                <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
                  <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                        {index === 0 ? "Current" : "Role"}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-cyan-300">{job.company}</p>
                    </div>
                    <span className="inline-flex self-start rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300">
                      {job.period}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.company === "Bank of America" && (
                      <>
                        <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200 ring-1 ring-cyan-500/30">Appian</span>
                        <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200 ring-1 ring-violet-500/30">Automation</span>
                      </>
                    )}
                    {job.company === "Montclair State University" && (
                      <>
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200 ring-1 ring-emerald-500/30">Academic systems</span>
                        <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200 ring-1 ring-cyan-500/30">Integrations</span>
                      </>
                    )}
                    {job.company === "Wipro" && (
                      <>
                        <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200 ring-1 ring-amber-500/30">BPM</span>
                        <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200 ring-1 ring-violet-500/30">Java</span>
                      </>
                    )}
                  </div>

                  <ul className="mt-5 space-y-3 text-slate-300">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 sm:text-base">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Projects</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Featured work</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-500/60 hover:bg-slate-900">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-xs uppercase tracking-[0.15em] text-slate-300">
                    {project.type}
                  </span>
                  <span className="text-xl text-cyan-300">↗</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Skills</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Technical Toolkit</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Application Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200 ring-1 ring-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Core Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="rounded-full bg-violet-500/10 px-3 py-1.5 text-sm text-violet-200 ring-1 ring-violet-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200 ring-1 ring-emerald-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Education</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Academic Background</h2>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                    <p className="text-xl font-semibold text-white">{item.degree}</p>
                    <p className="mt-2 text-cyan-300">{item.school}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="contact" className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Interests</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Outside of work</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="rounded-full bg-slate-900/80 px-3 py-1.5 text-sm text-slate-200 ring-1 ring-slate-700">
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4 text-slate-200">
                <p>Email: <a href={`mailto:${profile.email}`} className="text-cyan-300 hover:underline">{profile.email}</a></p>
                <p>LinkedIn: <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{profile.linkedin}</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
