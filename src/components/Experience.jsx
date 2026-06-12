import { motion } from "framer-motion";
import {
  FaArrowTrendUp,
  FaAws,
  FaBolt,
  FaBuilding,
  FaCheck,
  FaCodeBranch,
  FaDatabase,
  FaLayerGroup,
  FaShieldHalved,
} from "react-icons/fa6";

const experiences = [
  {
    role: "Software Engineer",
    company: "EdgeWave Technologies",
    location: "Remote",
    duration: "September 2023 – Present",
    type: "B2B SaaS",
    context:
      "Enterprise workflow automation software supporting HR, compliance, and operations teams across multiple customer accounts.",
    summary:
      "Own full-stack delivery across multi-tenant application architecture, frontend performance, CI/CD, cloud infrastructure, authentication, and production reliability.",
    highlights: [
      {
        icon: FaShieldHalved,
        title: "Multi-tenant security architecture",
        detail:
          "Designed GraphQL and REST APIs in Node.js and Express with JWT-based role access and account-level data isolation across 15+ enterprise customers. Reworked permission-scoping middleware after concurrency testing exposed authorization gaps.",
        impact: "Secure isolation across 15+ enterprise accounts",
      },
      {
        icon: FaArrowTrendUp,
        title: "Frontend performance optimization",
        detail:
          "Audited the Webpack bundle, removed approximately 180 KB of unused vendor code, and introduced route-level code splitting for the React application.",
        impact: "Reduced initial load time by 35%",
      },
      {
        icon: FaCodeBranch,
        title: "Automated delivery and rollback",
        detail:
          "Built GitHub Actions pipelines covering linting, unit tests, staging previews, production deployment, and rollback checks before releases reached users.",
        impact: "Reduced deployment failures by more than 60%",
      },
      {
        icon: FaCheck,
        title: "Testing and regression protection",
        detail:
          "Maintained more than 85% unit and integration coverage using Jest and React Testing Library, with pre-commit enforcement and targeted coverage for authentication workflows.",
        impact: "Caught critical auth regressions before staging",
      },
      {
        icon: FaAws,
        title: "AWS infrastructure and observability",
        detail:
          "Integrated EC2, S3, IAM, and CloudWatch for service deployment, file handling, permissions, logging, and production monitoring.",
        impact: "Detected a production memory leak within 20 minutes",
      },
      {
        icon: FaBolt,
        title: "AI-assisted engineering workflow",
        detail:
          "Integrated GitHub Copilot into test generation and service scaffolding while keeping architectural decisions, code review, and edge-case validation under engineer control.",
        impact: "Reduced routine test-writing time by roughly 40%",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "GraphQL",
      "REST APIs",
      "JWT",
      "AWS",
      "GitHub Actions",
      "Jest",
      "React Testing Library",
      "Webpack",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nykaa",
    location: "Hyderabad, India",
    duration: "February 2020 – November 2022",
    type: "High-Traffic E-Commerce",
    context:
      "Publicly listed fashion and beauty platform serving more than 10 million monthly users, with traffic increasing significantly during major sale events.",
    summary:
      "Worked across customer-facing React flows and Spring Boot services supporting product discovery, pricing, inventory, checkout, order processing, and high-volume sale events.",
    highlights: [
      {
        icon: FaLayerGroup,
        title: "High-traffic customer journeys",
        detail:
          "Owned React and TypeScript development across product listing, cart, and checkout flows. Implemented responsive layout and WCAG 2.1 accessibility improvements across critical purchase paths.",
        impact: "Improved mobile usability and conversion performance",
      },
      {
        icon: FaDatabase,
        title: "Microservice decomposition",
        detail:
          "Built Spring Boot services for pricing rules, inventory counts, promotional discounts, and order state, separating workloads that previously competed inside the monolith.",
        impact: "Enabled independent deployment and scaling",
      },
      {
        icon: FaBolt,
        title: "Event-driven order processing",
        detail:
          "Integrated Apache Kafka between inventory, order, and notification services to handle asynchronous updates during sale traffic reaching six to eight times normal volume.",
        impact: "Prevented queuing delays during major sale events",
      },
      {
        icon: FaArrowTrendUp,
        title: "GraphQL payload optimization",
        detail:
          "Replaced selected product-listing REST calls with GraphQL so frontend views requested only the fields required for each screen.",
        impact: "Reduced average API payload size by around 40%",
      },
      {
        icon: FaShieldHalved,
        title: "Checkout authentication reliability",
        detail:
          "Implemented JWT authentication with refresh-token rotation and handled the edge case where sessions expired while users were completing checkout.",
        impact: "Prevented silent logout at the payment stage",
      },
      {
        icon: FaAws,
        title: "Cloud deployment and monitoring",
        detail:
          "Containerized six Java services with Docker, deployed them on AWS EC2 behind an application load balancer, and configured CloudWatch monitoring for resource and error thresholds.",
        impact: "Improved production stability and incident visibility",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "GraphQL",
      "Apache Kafka",
      "Docker",
      "AWS EC2",
      "CloudWatch",
      "JWT",
      "Microservices",
      "WCAG",
    ],
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

const cardVariants = {
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

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-12rem] top-24 h-[420px] w-[420px] rounded-full bg-purple-600/[0.07] blur-[150px]" />

        <div className="absolute bottom-10 right-[-10rem] h-[420px] w-[420px] rounded-full bg-yellow-400/[0.055] blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:100%_72px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
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
            Professional Experience
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering work measured by
            <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              systems improved and problems solved.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            My experience spans enterprise SaaS and high-traffic e-commerce,
            covering frontend performance, secure APIs, distributed systems,
            automated delivery, cloud infrastructure, and production
            reliability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-10"
        >
          {experiences.map((experience, experienceIndex) => (
            <motion.article
              key={`${experience.company}-${experience.duration}`}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition duration-500 hover:border-yellow-400/25 sm:p-8 lg:p-10"
            >
              <div
                className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-20 -translate-y-24 rounded-full bg-yellow-400/[0.06] blur-[90px] transition duration-500 group-hover:bg-yellow-400/[0.1]"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mb-10 grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-yellow-400/20 bg-yellow-400/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-300">
                        {experience.type}
                      </span>

                      <span className="text-sm text-gray-500">
                        Experience 0{experienceIndex + 1}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {experience.role}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-400 sm:text-base">
                      <span className="flex items-center gap-2 font-semibold text-yellow-400">
                        <FaBuilding aria-hidden="true" />
                        {experience.company}
                      </span>

                      <span aria-hidden="true">•</span>

                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-300">
                      {experience.duration}
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-600">
                      Full-time
                    </p>
                  </div>
                </div>

                <div className="mb-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.07] bg-black/30 p-5 sm:p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
                      Company Context
                    </p>

                    <p className="text-sm leading-7 text-gray-300 sm:text-base">
                      {experience.context}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-black/30 p-5 sm:p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
                      Scope of Ownership
                    </p>

                    <p className="text-sm leading-7 text-gray-300 sm:text-base">
                      {experience.summary}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {experience.highlights.map((highlight) => {
                    const Icon = highlight.icon;

                    return (
                      <motion.div
                        key={highlight.title}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-2xl border border-white/[0.07] bg-black/35 p-5 transition duration-300 hover:border-yellow-400/20 hover:bg-white/[0.035] sm:p-6"
                      >
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400">
                            <Icon aria-hidden="true" />
                          </div>

                          <span className="max-w-[60%] text-right text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-yellow-300/80">
                            {highlight.impact}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white">
                          {highlight.title}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                          {highlight.detail}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                    Technologies and Practices
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((technology) => (
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
