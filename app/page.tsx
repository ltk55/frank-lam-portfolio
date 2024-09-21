"use client";

import { motion } from "framer-motion";

export default function Home() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "Tailwind CSS",
    "Framer Motion",
    "Jest",
    "React Testing Library",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="hero"
      className="text-slate-300 flex justify-center my-28 md:mt-40"
    >
      <motion.div
        className="flex flex-col items-start w-full max-w-[700px] px-6 md:px-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.small
          className="font-semibold mb-1 text-slate-400"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.small>

        <motion.h1 className="font-black text-5xl my-1" variants={itemVariants}>
          Frank Lam
        </motion.h1>

        <motion.h3
          className="font-semibold text-xl my-1"
          variants={itemVariants}
        >
          I&apos;m a Software Engineer / Web Developer based in London
        </motion.h3>

        <motion.p className="my-2 text-slate-400" variants={itemVariants}>
          With five years of web development experience, I specialize in
          creating intuitive and responsive user interfaces. I am adept at
          transforming complex project requirements into engaging, efficient
          digital solutions. Dedicated to continuous learning, I strive to stay
          at the forefront of web technology trends to enhance user experiences
          and meet strategic business goals.
        </motion.p>

        <motion.small className="mt-2" variants={itemVariants}>
          Technologies I specialise In:
        </motion.small>

        <motion.ul
          className="grid grid-cols-2 gap-y-1 md:grid-cols-2 md:gap-y-0 sm:gap-x-2 py-0 mt-3 list-none"
          variants={containerVariants}
        >
          {skills &&
            skills.map((skill, i) => (
              <motion.li
                key={i}
                className="relative mb-3 pl-6 font-mono text-xs"
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#22c55e" }} // Hover effect
              >
                <span className="absolute left-0 text-green text-sm">▹</span>
                {skill}
              </motion.li>
            ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
