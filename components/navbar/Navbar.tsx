"use client";

import { useRef } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/lib/hooks/useDimensions";

const navItems = {
  "/": {
    name: "home",
  },
  "/resume": {
    name: "resume",
  },
  "/projects": {
    name: "projects",
  },
  "/contact": {
    name: "contact",
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 100}px at 10px 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(10px at 10px 10px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const livariants = {
  open: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <nav className="bg-slate-900 top-0 left-0 absolute flex w-full justify-between my-3 px-5">
        <Link href="/" className="text-white">
          <span className="font-black text-xl mr-4">FL</span>
          <span className="hidden md:inline-block">Software Engineer</span>
        </Link>

        <div className="text-slate-50 hidden md:flex">
          {Object.entries(navItems).map(([path, { name }]) => {
            return <NavItem key={path} path={path} name={name} />;
          })}
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            className="fixed top-20 left-0 bottom-0 w-full bg-slate-500 md:hidden"
            variants={sidebar}
          />
          {/* <motion.ul variants={variants} className="md:hidden">
            <motion.li
              variants={livariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white"
            >
              test
            </motion.li>
            <motion.li
              variants={livariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white"
            >
              test 2
            </motion.li>
          </motion.ul> */}
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </nav>
    </>
  );
}
