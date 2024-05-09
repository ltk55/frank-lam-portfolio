export default function IconExternal({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label="GitHub Link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-2 items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <title>External Link</title>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      <div className="font-mono">Live</div>
    </a>
  );
}
