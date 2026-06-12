import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "StreamIQ",
    subtitle: "Real-Time Analytics Pipeline",
    category: "Distributed Systems",
    description:
      "A multi-service event-processing platform where raw events move through ingestion, enrichment, anomaly detection, and real-time presentation stages.",
    problem:
      "Real-time systems become difficult to maintain when ingestion, business logic, machine learning, and presentation are tightly coupled inside one service.",
    solution:
      "Separated the platform into independently deployable Java, Python, and React services connected through Kafka and WebSockets.",
    decisions: [
      "Used Spring Boot for event enrichment and backend processing.",
      "Isolated anomaly detection inside a FastAPI service so the model layer can evolve independently.",
      "Streamed processed events to a React dashboard through WebSockets.",
    ],
    outcome:
      "Created a modular architecture where ingestion, enrichment, inference, and presentation can be tested, deployed, and scaled independently.",
    tech: [
      "Apache Kafka",
      "Spring Boot",
      "FastAPI",
      "React",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/K-15a-FullstackDev/streamiq",
    live: "",
    icon: FaServer,
  },
  {
    number: "02",
    title: "Explainable AI Dashboard",
    subtitle: "Machine Learning Interpretability Platform",
    category: "Applied AI",
    description:
      "A full-stack platform where users upload tabular datasets, train machine-learning models, and explore explanations through an interactive React interface.",
    problem:
      "Model predictions are difficult for non-technical stakeholders to trust when the application shows an output without explaining which features influenced it.",
    solution:
      "Built separate workflows for global feature importance and local row-level explanations using SHAP and LIME.",
    decisions: [
      "Used FastAPI to separate the model-training and inference layer from the React interface.",
      "Kept global and local explanations as distinct workflows because they answer different stakeholder questions.",
      "Designed the frontend around interpretation instead of exposing raw model output.",
    ],
    outcome:
      "Turned complex model behavior into a workflow that makes predictions easier to inspect, explain, and communicate.",
    tech: [
      "React",
      "Python",
      "FastAPI",
      "scikit-learn",
      "SHAP",
      "LIME",
      "AWS EC2",
    ],
    github: "https://github.com/K-15a-FullstackDev/explainable-ai-dashboard",
    live: "",
    icon: FaLayerGroup,
  },
  {
    number: "03",
    title: "Teamboard",
    subtitle: "Secure Project Management Platform",
    category: "Full-Stack SaaS",
    description:
      "A Kanban-style project management application with sprint tracking, role-based access control, task workflows, and file attachments.",
    problem:
      "Many task-management projects add authentication and permissions after building the UI, which creates weak authorization boundaries and expensive rework.",
    solution:
      "Designed authentication, permissions, and the relational data model before implementing the feature interface.",
    decisions: [
      "Implemented JWT authentication and role-based access for administrators and members.",
      "Used PostgreSQL for structured project, sprint, task, and user relationships.",
      "Integrated AWS S3 for file attachments and GitHub Actions for automated delivery.",
    ],
    outcome:
      "Built the product on a stable permission model so each feature inherited consistent authorization and data-access rules.",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "AWS S3",
      "GitHub Actions",
      "Docker",
    ],
    github: "https://github.com/K-15a-FullstackDev/Teamboard",
    live: "",
    icon: FaCodeBranch,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {" "}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {" "}
        <div className="absolute left-[-10rem] top-20 h-[420px] w-[420px] rounded-full bg-yellow-400/[0.05] blur-[150px]" />
        ```
        <div className="absolute bottom-[-8rem] right-[-10rem] h-[460px] w-[460px] rounded-full bg-purple-600/[0.07] blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mb-16 max-w-4xl lg:mb-24"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-yellow-400">
            Selected Projects
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Systems built around
            <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              architecture, trade-offs, and outcomes.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            These projects go beyond interface demos. Each one addresses a
            concrete engineering problem involving service boundaries, data
            flow, security, deployment, reliability, or model interpretation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-10"
        >
          {projects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={projectVariants}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition duration-500 hover:border-yellow-400/25 sm:p-8 lg:p-10"
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-24 -translate-y-24 rounded-full bg-yellow-400/[0.05] blur-[100px] transition duration-500 group-hover:bg-yellow-400/[0.09]"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-2xl text-yellow-400">
                      <ProjectIcon aria-hidden="true" />
                    </div>

                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-300">
                          {project.category}
                        </span>

                        <span className="text-xs font-semibold tracking-[0.2em] text-gray-600">
                          PROJECT {project.number}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-yellow-400">
                        {project.subtitle}
                      </p>

                      <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 lg:justify-end">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-black"
                        >
                          Live Demo
                          <FaExternalLinkAlt aria-hidden="true" />
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-yellow-400/40 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      >
                        View Code
                        <FaGithub aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/[0.07] bg-black/35 p-5 sm:p-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
                        Engineering Problem
                      </p>

                      <p className="text-sm leading-7 text-gray-300 sm:text-base">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-black/35 p-5 sm:p-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
                        Architecture Approach
                      </p>

                      <p className="text-sm leading-7 text-gray-300 sm:text-base">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/[0.07] bg-black/30 p-5 sm:p-6">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
                      Key Engineering Decisions
                    </p>

                    <div className="space-y-4">
                      {project.decisions.map((decision) => (
                        <div key={decision} className="flex items-start gap-3">
                          <FaArrowRight
                            className="mt-1 flex-shrink-0 text-sm text-yellow-400"
                            aria-hidden="true"
                          />

                          <p className="text-sm leading-6 text-gray-400 sm:text-base">
                            {decision}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.045] p-5 sm:p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300/80">
                      Result
                    </p>

                    <p className="text-sm font-medium leading-7 text-gray-200 sm:text-base">
                      {project.outcome}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-8">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                      Technology Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-yellow-400/25 hover:text-yellow-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
