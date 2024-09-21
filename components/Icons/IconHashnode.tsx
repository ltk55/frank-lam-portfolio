import { ReactNode } from "react";
import clsx from "clsx";

export default function IconHashnode({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label="Hashnode Link"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("flex gap-2 items-center", className)}
    >
      <svg className="h-6 w-6" viewBox="0 0 337 337" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
          fill="currentColor"
        />
      </svg>
      {children}
    </a>
  );
}
