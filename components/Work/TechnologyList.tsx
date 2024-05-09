export default function TechnologyList({
  technologyList,
}: {
  technologyList: string[];
}) {
  return (
    <ul className="grid grid-cols-2 gap-y-1 md:grid-cols-2 md:gap-y-0 sm:gap-x-2 py-0 mt-5 list-none max-w-[400px]">
      {technologyList.map((tech, i) => (
        <li key={i} className="relative mb-4 pl-6 font-mono text-xs text-left">
          <span className="absolute left-0 text-green text-sm">▹</span>
          {tech}
        </li>
      ))}
    </ul>
  );
}
