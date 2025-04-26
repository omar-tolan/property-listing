import { Check, BrickWall, PaintRoller } from "lucide-react";
export default function Finishing({ finishing, className }: { finishing: string, className?: string }) {
  return (
    <div className={className+" flex space-x-2"}>
      {finishing === "Fully Finished" ? (
        <Check size={20} color="#FE7743" />
      ) : finishing === "Semi Finished" ? (
        <PaintRoller size={20} color="#FE7743" />
      ) : (
        <BrickWall size={20} color="#FE7743" />
      )}
      <p className="text-white text-md font-light">{finishing}</p>
    </div>
  );
}
