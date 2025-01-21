export default function JobDesc({ content }: { content: string }) {
  // const [title, description] = content.split(/:(.+)/);

  return (
    <li className="relative mb-4 pl-6 font-mono text-xs">
      <span className="absolute left-0 text-green text-sm">▹</span>
      {/* <span className="text-slate-200">{title}:</span> */}
      <span className="text-slate-400">{content}</span>
    </li>
  );
}
