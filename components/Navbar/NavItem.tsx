"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavItem({
  path,
  name,
  layoutId,
}: {
  path: string;
  name: string;
  layoutId: string;
}) {
  let pathname = usePathname() || "/";

  const isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className="hover:text-neutral-200 flex align-middle hover:brightness-150 transition duration-300"
    >
      <span className="relative py-1 px-2 text-slate-300">
        {name}
        {isActive ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 z-[-1] from-transparent to-neutral-900"
            layoutId={layoutId}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
