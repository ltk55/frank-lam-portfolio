export default function JobDesc({ content }: { content: string }) {
  return (
    <li className="relative mb-4 pl-6 font-mono text-xs">
      <span className="absolute left-0 text-green text-sm">▹</span>
      {content}
    </li>
  );
}
