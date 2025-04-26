export default function Header({
  title,
  type,
  className,
}: {
  title: string;
  type: string;
  className?: string;
}) {
  return (
    <div className={"flex flex-col "+className}>
      <div className="text-gray-400 text-md font-medium">{type}</div>
      <div className="text-white text-2xl font-medium">{title}</div>
    </div>
  );
}
