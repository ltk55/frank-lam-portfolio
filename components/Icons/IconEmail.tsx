import { ReactNode } from "react";
import clsx from "clsx";

export default function IconEmail({
  href,
  children,
  className = "",
  color = "currentColor",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <a
      href={href}
      aria-label="Email Link"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("flex gap-2 items-center", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </a>
  );
}