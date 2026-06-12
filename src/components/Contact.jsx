import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:kushall0100@gmail.com",
    icon: FaEnvelope,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kushallk/",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/K-15a-FullstackDev",
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  const scrollToTop = () => {
    const hero = document.getElementById("hero");

    ```
if (hero) {
  hero.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
```;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {" "}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {" "}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.055] blur-[160px]" />
        ```
        <div className="absolute bottom-[-10rem] left-[-10rem] h-[420px] w-[420px] rounded-full bg-purple-600/[0.07] blur-[150px]" />
        <div className="absolute right-[-10rem] top-10 h-[380px] w-[380px] rounded-full bg-pink-500/[0.045] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-yellow-400">
                Contact
              </p>

              <h2 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building something that needs
                <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  reliable engineering?
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                I am open to frontend, full-stack, and software engineering
                opportunities where strong product thinking, scalable
                architecture, testing, and production ownership matter.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="mailto:kushall0100@gmail.com"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-bold text-black transition duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Start a Conversation
                  <FaArrowRight aria-hidden="true" />
                </motion.a>

                <motion.a
                  href="/Kushal-FSD.pdf"
                  download="Kushal_Kumar_Reddy_Resume.pdf"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:border-yellow-400/40 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Download Resume
                  <FiDownload aria-hidden="true" />
                </motion.a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 sm:p-10 lg:p-12">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                Find Me Online
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      aria-label={link.label}
                      title={link.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.08,
                      }}
                      whileTap={{ scale: 0.94 }}
                      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl text-gray-300 transition duration-300 hover:border-yellow-400/40 hover:bg-yellow-400/[0.08] hover:text-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      <Icon aria-hidden="true" />
                    </motion.a>
                  );
                })}
              </div>

              <p className="mt-7 text-center text-sm text-gray-500">
                Email · LinkedIn · GitHub
              </p>
            </div>
          </div>
        </motion.div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kushal Kumar Reddy. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-lg px-2 py-1 text-sm font-semibold text-gray-400 transition duration-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Back to top ↑
          </button>
        </footer>
      </div>
    </section>
  );
}
