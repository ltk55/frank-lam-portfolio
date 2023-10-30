"use client";

import NavItem from "./NavItem";

const navItems = {
  "#about": {
    name: "about",
  },
  "#experience": {
    name: "experience",
  },
  "#projects": {
    name: "projects",
  },
  "#contact": {
    name: "contact",
  },
};

export default function Navbar() {
  return (
    <nav className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return <NavItem key={path} path={path} name={name} />;
            })}
          </div>
        </nav>
      </div>
    </nav>
  );
}
