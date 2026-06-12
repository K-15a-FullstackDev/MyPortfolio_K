import { motion } from "framer-motion";
import {
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaAward,
    title: "Academic Performance",
    value: "3.83 / 4.00 GPA",
    description:
      "Completed a technically rigorous graduate program focused on data science, machine learning, statistical analysis, cloud computing, and large-scale data systems.",
  },
  {
    icon: FaBookOpen,
    title: "Engineering Relevance",
    value: "Data-intensive software systems",
    description:
      "Strengthened my ability to build real-time analytics pipelines, explainable AI applications, cloud-based platforms, APIs, and full-stack systems driven by complex data.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {" "}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {" "}
        <div className="absolute left-1/2 top-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-yellow-400/[0.05] blur-[150px]" />
        ```
        <div className="absolute bottom-[-10rem] left-[-10rem] h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[140px]" />
        <div className="absolute right-[-10rem] top-1/3 h-[360px] w-[360px] rounded-full bg-pink-500/[0.045] blur-[130px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-4xl text-center lg:mb-20"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-yellow-400">
            Education
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Academic depth supporting
            <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              stronger engineering decisions.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            My graduate education in data science strengthened the analytical,
            statistical, cloud, and machine-learning foundation behind the
            full-stack and data-intensive systems I build.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-8 lg:p-10"
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-24 -translate-y-24 rounded-full bg-yellow-400/[0.07] blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-3xl text-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.08)]">
                <FaGraduationCap aria-hidden="true" />
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400/70">
                  Graduate Degree
                </p>

                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Master of Science in Data Science
                </h3>

                <p className="mt-3 text-lg font-semibold text-yellow-400">
                  University of North Texas
                </p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt
                      className="text-yellow-400/80"
                      aria-hidden="true"
                    />
                    Denton, Texas
                  </span>

                  <span className="flex items-center gap-2">
                    <FaCalendarAlt
                      className="text-yellow-400/80"
                      aria-hidden="true"
                    />
                    Completed December 2024
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] px-6 py-5 lg:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
                  Cumulative GPA
                </p>

                <p className="mt-2 text-3xl font-black text-white">
                  3.83
                  <span className="ml-1 text-base font-medium text-gray-500">
                    / 4.00
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;

                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-white/[0.07] bg-black/35 p-5 transition duration-300 hover:border-yellow-400/20 hover:bg-white/[0.035] sm:p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400">
                      <Icon aria-hidden="true" />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      {highlight.title}
                    </p>

                    <h4 className="mt-2 text-lg font-bold text-white">
                      {highlight.value}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
