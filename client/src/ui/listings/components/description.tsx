export default function Description({ description, className }: { description: string, className?: string }) {
  return (
    <div className={"text-white text-md font-light"+className}>
      {description}
    </div>
  );
}
