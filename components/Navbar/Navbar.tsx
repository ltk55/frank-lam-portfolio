"use client";

import { useEffect, useRef } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/experience": {
    name: "experience",
  },
  "/work": {
    name: "work",
  },
  "/contact": {
    name: "contact",
  },
};

const sidebarVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -1000,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
      delay: 0.4,
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

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-slate-800 top-0 left-0 absolute flex w-full justify-between py-5 px-10 z-50">
        <Link href="/" className="text-white z-50">
          <span className="font-black text-xl mr-4">FL</span>
        </Link>

        <ul className="text-slate-50 hidden md:flex">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <NavItem key={path} path={path} name={name} layoutId="menu" />
            );
          })}
        </ul>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
          className="md:hidden"
        >
          <motion.div
            id="test"
            className="fixed left-0 top-20 w-full bg-slate-900 z-20 flex flex-col items-center p-10 md:hidden"
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
      </nav>
    </>
  );
}
