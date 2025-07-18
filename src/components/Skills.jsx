// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   FaReact,
//   FaNodeJs,
//   FaAws,
//   FaHtml5,
//   FaCss3Alt,
//   FaJava,
//   FaGithub,
//   FaGitAlt,
//   FaDocker,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiMongodb,
//   SiPostgresql,
//   SiRedux,
//   SiSpringboot,
//   SiTypescript,
//   SiJest,
//   SiGraphql,
//   SiNextdotjs,
//   SiPrisma,
//   SiReactquery,
//   SiVite,
//   SiCypress,
//   SiFirebase,
// } from "react-icons/si";

// // Category data
// const categories = [
//   {
//     title: "Frontend",
//     animation: {
//       initial: { opacity: 0, y: 40 },
//       animate: { opacity: 1, y: 0 },
//     },
//     items: [
//       { icon: <FaReact />, name: "React.js" },
//       { icon: <SiNextdotjs />, name: "Next.js" },
//       { icon: <SiTailwindcss />, name: "Tailwind CSS" },
//       { icon: <FaHtml5 />, name: "HTML5" },
//       { icon: <FaCss3Alt />, name: "CSS3" },
//       { icon: <SiTypescript />, name: "TypeScript" },
//       { icon: <SiRedux />, name: "Redux Toolkit" },
//       { icon: <SiReactquery />, name: "React Query" },
//       { icon: <SiVite />, name: "Vite" },
//     ],
//   },
//   {
//     title: "Backend",
//     animation: {
//       initial: { opacity: 0, x: -40 },
//       animate: { opacity: 1, x: 0 },
//     },
//     items: [
//       { icon: <FaNodeJs />, name: "Node.js" },
//       { icon: <FaJava />, name: "Java" },
//       { icon: <SiSpringboot />, name: "Spring Boot" },
//       { icon: <SiMongodb />, name: "MongoDB" },
//       { icon: <SiPostgresql />, name: "PostgreSQL" },
//       { icon: <SiPrisma />, name: "Prisma ORM" },
//       { icon: <SiGraphql />, name: "GraphQL" },
//     ],
//   },
//   {
//     title: "Cloud & Other",
//     animation: {
//       initial: { opacity: 0, x: 40 },
//       animate: { opacity: 1, x: 0 },
//     },
//     items: [
//       { icon: <FaAws />, name: "AWS" },
//       { icon: <FaGithub />, name: "GitHub Actions" },
//       { icon: <FaGitAlt />, name: "Git" },
//       { icon: <FaDocker />, name: "Docker" },
//       { icon: <SiFirebase />, name: "Firebase" },
//       { icon: <SiJest />, name: "Jest" },
//       { icon: <SiCypress />, name: "Cypress" },
//     ],
//   },
// ];

// export default function Skills() {
//   // Setup one hook per category at the top level
//   const [frontendRef, frontendInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.15,
//   });
//   const [backendRef, backendInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.15,
//   });
//   const [cloudRef, cloudInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.15,
//   });

//   const refs = [frontendRef, backendRef, cloudRef];
//   const inViews = [frontendInView, backendInView, cloudInView];

//   return (
//     <section
//       id="tools"
//       className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white"
//     >
//       <h2 className="text-center text-4xl font-extrabold mb-16 text-yellow-400 tracking-wide">
//         Tools & Technologies
//       </h2>

//       <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
//         {categories.map((cat, index) => (
//           <motion.div
//             ref={refs[index]}
//             key={cat.title}
//             className="bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-800"
//             initial={cat.animation.initial}
//             animate={inViews[index] ? cat.animation.animate : {}}
//             transition={{ duration: 0.8, delay: 0.2 * index }}
//           >
//             <h3 className="text-2xl font-semibold text-yellow-300 mb-6 text-center">
//               {cat.title}
//             </h3>

//             <div className="grid grid-cols-3 gap-6 justify-items-center">
//               {cat.items.map((tool, i) => (
//                 <motion.div
//                   key={i}
//                   className="flex flex-col items-center text-yellow-400 gap-2 hover:scale-110 transition-transform duration-300"
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{
//                     repeat: Infinity,
//                     duration: 6,
//                     delay: i * 0.15,
//                   }}
//                 >
//                   <div className="text-3xl">{tool.icon}</div>
//                   <p className="text-sm text-white">{tool.name}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiSpringboot,
  SiTypescript,
  SiJest,
  SiGraphql,
  SiNextdotjs,
  SiPrisma,
  SiReactquery,
  SiVite,
  SiCypress,
  SiFirebase,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    animation: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    items: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiRedux />, name: "Redux Toolkit" },
      { icon: <SiReactquery />, name: "React Query" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },
  {
    title: "Backend",
    animation: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
    },
    items: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiPrisma />, name: "Prisma ORM" },
      { icon: <SiGraphql />, name: "GraphQL" },
    ],
  },
  {
    title: "Cloud & Other",
    animation: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
    },
    items: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaGithub />, name: "GitHub Actions" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiJest />, name: "Jest" },
      { icon: <SiCypress />, name: "Cypress" },
    ],
  },
];

export default function Skills() {
  const [frontendRef, frontendInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [backendRef, backendInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [cloudRef, cloudInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const refs = [frontendRef, backendRef, cloudRef];
  const inViews = [frontendInView, backendInView, cloudInView];

  return (
    <section
      id="tools"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* 🔆 Soft background glow aura */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 blur-[120px] opacity-10 rounded-full z-0 animate-pulse left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-yellow-400 tracking-wide z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tools & Technologies
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
        {categories.map((cat, index) => (
          <motion.div
            ref={refs[index]}
            key={cat.title}
            className="bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-800"
            initial={cat.animation.initial}
            animate={inViews[index] ? cat.animation.animate : {}}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-6 text-center">
              {cat.title}
            </h3>

            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {cat.items.map((tool, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-yellow-400 gap-2 group hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    delay: i * 0.12,
                  }}
                >
                  <div className="text-3xl group-hover:scale-125 transition-transform">
                    {tool.icon}
                  </div>
                  <p className="text-sm text-white">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
