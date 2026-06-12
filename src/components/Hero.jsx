import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaDownload,
  FaFileAlt,
  FaLayerGroup,
} from "react-icons/fa";

const proofPoints = [
  {
    value: "4+",
    label: "Years building production software",
  },
  {
    value: "35%",
    label: "Frontend load-time improvement",
  },
  {
    value: "85%+",
    label: "Automated test coverage",
  },
];

const capabilities = [
  "Customer-facing React applications",
  "Secure full-stack and multi-tenant systems",
  "Event-driven services with Kafka",
  "AWS delivery, monitoring, and CI/CD",
];

const coreStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Spring Boot",
  "Kafka",
  "AWS",
  "GraphQL",
  "Docker",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-5 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-36"
    >
      {" "}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {" "}
        <div className="absolute left-1/2 top-[-12rem] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-yellow-400/[0.07] blur-[170px]" />
        ```
        <div className="absolute bottom-[-12rem] right-[-10rem] h-[500px] w-[500px] rounded-full bg-purple-600/[0.07] blur-[160px]" />
        <div className="absolute left-[-12rem] top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.045] blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,black_70%,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />
        <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-4 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
              Software Engineer · Full-Stack Systems
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-yellow-400"
          >
            Code. Ship. Scale.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.14,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            I build software that survives
            <span className="mt-3 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              real users, real traffic, and real production pressure.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65 }}
            className="mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            I’m Kushal Kumar Reddy, a full-stack software engineer with 4+ years
            of experience building customer-facing applications and enterprise
            platforms using React, TypeScript, Node.js, Spring Boot, Kafka, and
            AWS. My work spans high-traffic e-commerce, multi-tenant SaaS, cloud
            delivery, testing, and data-intensive systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
            className="mt-9 grid gap-3 sm:grid-cols-2"
          >
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <FaCheckCircle
                  className="mt-1 flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                />

                <span className="leading-6">{capability}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.65 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-bold text-black transition duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
            >
              Explore My Work
              <FaArrowRight aria-hidden="true" />
            </motion.a>

            <motion.a
              href="/Kushal-FSD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:border-yellow-400/40 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:w-auto"
            >
              View Resume
              <FaFileAlt aria-hidden="true" />
            </motion.a>

            <motion.a
              href="/Kushal-FSD.pdf"
              download="Kushal_Kumar_Reddy_Resume.pdf"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-sm font-semibold text-gray-400 transition duration-300 hover:border-white/25 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:w-auto"
            >
              Download
              <FaDownload aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.75,
            ease: "easeOut",
          }}
          className="relative"
          aria-label="Engineering impact summary"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-7">
            <div
              className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-yellow-400/[0.09] blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400/70">
                    Engineering Profile
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Built for production
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-xl text-yellow-400">
                  <FaCode aria-hidden="true" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {proofPoints.map((point) => (
                  <motion.div
                    key={point.label}
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-white/[0.07] bg-black/35 p-5 transition duration-300 hover:border-yellow-400/20"
                  >
                    <p className="text-3xl font-black text-yellow-400">
                      {point.value}
                    </p>

                    <p className="mt-2 text-xs font-medium leading-5 text-gray-400">
                      {point.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/[0.07] bg-black/35 p-5">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400">
                    <FaLayerGroup aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Core Stack
                    </p>

                    <p className="text-sm font-bold text-white">
                      Frontend to production
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {coreStack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href="#tools"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm font-semibold text-gray-300 transition duration-300 hover:border-yellow-400/30 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                View Full Engineering Stack
                <FaArrowDown aria-hidden="true" />
              </motion.a>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
