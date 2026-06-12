import { motion } from "framer-motion";
import {
  FaAws,
  FaBrain,
  FaCloud,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaShieldAlt,
  FaTerminal,
  FaTools,
  FaVial,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiCypress,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGithubactions,
  SiGraphql,
  SiJenkins,
  SiJest,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiSpringboot,
  SiStyledcomponents,
  SiSwagger,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible, and maintainable customer-facing interfaces for production web applications.",
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Query", icon: SiReactquery },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Styled Components", icon: SiStyledcomponents },
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Designing secure services, authentication flows, reusable APIs, and independently deployable backend systems.",
    accent: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring MVC", icon: SiSpringboot },
      { name: "REST APIs", icon: FaCode },
      { name: "GraphQL", icon: SiGraphql },
      { name: "JWT / OAuth 2.0", icon: FaShieldAlt },
    ],
  },
  {
    number: "03",
    title: "Distributed Systems & Data",
    description:
      "Working with event-driven architectures, transactional data, caching, and real-time application workflows.",
    accent: "from-yellow-400/20 via-orange-500/10 to-transparent",
    skills: [
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "SQL Server", icon: FaDatabase },
      { name: "WebSockets", icon: FaTerminal },
      { name: "Microservices", icon: FaCloud },
    ],
  },
  {
    number: "04",
    title: "Cloud & Delivery",
    description:
      "Shipping software through automated pipelines, containerized environments, monitored infrastructure, and repeatable deployments.",
    accent: "from-green-400/20 via-emerald-500/10 to-transparent",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Azure DevOps", icon: FaCloud },
      { name: "Terraform", icon: SiTerraform },
      { name: "Git", icon: FaGitAlt },
      { name: "Webpack", icon: SiWebpack },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    number: "05",
    title: "Testing & Reliability",
    description:
      "Protecting production behavior with automated tests, API validation, regression coverage, and quality-focused delivery.",
    accent: "from-red-400/20 via-rose-500/10 to-transparent",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "React Testing Library", icon: FaVial },
      { name: "Cypress", icon: SiCypress },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "TDD / BDD", icon: FaVial },
    ],
  },
  {
    number: "06",
    title: "Applied AI & Data",
    description:
      "Integrating AI services and building data-intensive applications where model output must be understandable and useful.",
    accent: "from-pink-400/20 via-violet-500/10 to-transparent",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "LLM Integration", icon: FaBrain },
      { name: "Prompt Engineering", icon: FaTerminal },
      { name: "RAG Fundamentals", icon: FaBrain },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "SHAP / LIME", icon: FaBrain },
    ],
  },
];

const supportingTools = [
  { name: "GitHub Copilot", icon: FaBrain },
  { name: "Cursor", icon: FaTerminal },
  { name: "ChatGPT", icon: SiOpenai },
  { name: "Figma", icon: SiFigma },
  { name: "JIRA", icon: FaTools },
  { name: "Confluence", icon: FaTools },
  { name: "Agile / Scrum", icon: FaTools },
  { name: "System Design", icon: FaCode },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="tools"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-12 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/[0.045] blur-[150px]" />

        <div className="absolute bottom-[-8rem] right-[-10rem] h-[420px] w-[420px] rounded-full bg-purple-600/[0.07] blur-[140px]" />

        <div className="absolute left-[-10rem] top-1/2 h-[380px] w-[380px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-4xl text-center lg:mb-20"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-yellow-400">
            Engineering Stack
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tools are not the story.
            <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              What I ship with them is.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            My stack covers the full engineering lifecycle: accessible
            interfaces, secure APIs, distributed services, data persistence,
            automated testing, cloud deployment, and applied AI integration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/[0.055] sm:p-8"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${group.accent} opacity-60 transition duration-500 group-hover:opacity-100`}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mb-7 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-yellow-400/70">
                      SYSTEM {group.number}
                    </p>

                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {group.title}
                    </h3>
                  </div>

                  <span className="select-none text-4xl font-black text-white/[0.05] sm:text-5xl">
                    {group.number}
                  </span>
                </div>

                <p className="mb-8 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                  {group.description}
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="flex min-h-[88px] flex-col justify-between rounded-2xl border border-white/[0.07] bg-black/45 p-4 transition duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.045]"
                      >
                        <Icon
                          className="mb-3 text-2xl text-yellow-400"
                          aria-hidden="true"
                        />

                        <span className="text-sm font-medium leading-tight text-gray-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400/70">
                Supporting Workflow
              </p>

              <h3 className="text-2xl font-bold text-white">
                Engineering and collaboration tools
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-gray-500 sm:text-right">
              Tools that support delivery, documentation, design collaboration,
              planning, and AI-assisted development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {supportingTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -3 }}
                  className="flex min-h-[94px] flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-black/40 p-3 text-center transition duration-300 hover:border-yellow-400/25 hover:bg-yellow-400/[0.04]"
                >
                  <Icon
                    className="mb-3 text-xl text-yellow-400"
                    aria-hidden="true"
                  />

                  <span className="text-xs font-medium leading-tight text-gray-300">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
