"use client";

import { motion } from "framer-motion";
import IconEmail from "@/components/Icons/IconEmail";
import IconGitHub from "@/components/Icons/IconGitHub";
import IconLinkedIn from "@/components/Icons/IconLinkedIn";
import IconHashnode from "@/components/Icons/IconHashnode";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Frank Lam | Contact";
  });

  const contactList = [
    {
      platform: "Email",
      value: "mailto:frankltk55@gmail.com",
      icon: IconEmail,
      color: "#cbd5e1",
    },
    {
      platform: "LinkedIn",
      value: "https://www.linkedin.com/in/franklamltk55/",
      icon: IconLinkedIn,
    },
    {
      platform: "GitHub",
      value: "https://github.com/ltk55",
      icon: IconGitHub,
    },
    {
      platform: "Hashnode",
      value: "https://lkt55.hashnode.dev/",
      icon: IconHashnode,
    },
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
        staggerChildren: 0.2,
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
    <motion.section
      id="contact"
      className="text-slate-300 px-10 md:px-28 py-28 flex flex-col items-center md:items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="pb-10 mb-14 border-b border-slate-100 w-full md:text-left text-center">
        <h1 className="font-bold text-5xl">Let&apos;s Connect</h1>
      </div>

      <p className="mb-10 text-lg font-light text-center md:text-left">
        I’d love to hear from you 👋 Whether you have a question, want to
        discuss a project, job opportunity, or just want to connect, feel free
        to reach out through any of the platforms below.
      </p>

      <div className="flex gap-6 justify-center md:justify-start">
        {contactList.map(({ platform, value, icon: IconComponent, color }) => (
          <motion.div key={platform} variants={itemVariants}>
            <IconComponent
              href={value}
              className="flex-col hover:brightness-125 transition duration-300"
              color={color}
            >
              <div className="text-sm font-semibold font-mono">{platform}</div>
            </IconComponent>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
