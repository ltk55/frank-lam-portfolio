"use client";

import { useEffect, useRef } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const navItems = {
  "/": { name: "home" },
  "/experience": { name: "experience" },
  "/work": { name: "work" },
  "/contact": { name: "contact" },
};

const sidebarVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  closed: {
    y: -1000,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-slate-800 h-[70px] top-0 left-0 absolute flex w-full justify-between py-5 px-10 z-50">
        <Link href="/" className="text-white z-50 flex items-center">
          <span className="font-black text-xl mr-4">FL</span>
        </Link>

        <ul className="text-slate-50 hidden md:flex">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <NavItem key={path} path={path} name={name} layoutId="menu" />
            );
          })}
        </ul>
      </nav>

      {/* Backdrop */}
      <motion.div
        initial={false}
        animate={
          isOpen
            ? { opacity: 0.5, display: "block" }
            : { opacity: 0, transitionEnd: { display: "none" } }
        }
        className="fixed inset-0 bg-black z-10"
      />

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
        className="md:hidden"
      >
        <motion.div
          className="fixed left-0 top-[70px] w-full bg-slate-900 z-20 flex flex-col py-4 px-10 md:hidden shadow-lg"
          variants={sidebarVariants}
          onClick={() => toggleOpen()}
        >
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <NavItem
                key={path}
                path={path}
                name={name}
                layoutId="slide-menu"
              />
            );
          })}
        </motion.div>

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>
    </>
  );
}
