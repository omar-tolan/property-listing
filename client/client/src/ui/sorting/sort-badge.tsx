import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export type SortProp = {
  name: string;
  currentDir: 0 | 1 | -1;
};
export function SortBadge({ sort }: { sort: SortProp }) {
  const color = sort.currentDir === 0 ? "bg-white border border-black" : "bg-primary border border-white";
  return (
    <div
      className={
        color +
        " flex space-x-2 px-4 py-1 items-center rounded-lg cursor-pointer"
      }
    >
      <div className="text-black text-md">{sort.name}</div>
      {sort.currentDir === -1 ? (
        <ArrowUp size={15} />
      ) : sort.currentDir === 1 ? (
        <ArrowDown size={15} />
      ) : (
        <Minus size={15} />
      )}
    </div>
  );
}
