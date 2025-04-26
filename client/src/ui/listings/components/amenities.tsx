import { Check, CheckCheck } from "lucide-react";

export default function Amenities({ amenities, className }: { amenities: string[], className?: string }) {
    return (
      <div className={"flex flex-wrap gap-2 mt-2 " + className}>
        {amenities.map((amenity) => (
          <div
            key={amenity}
            className="flex items-center justify-center bg-primary/20 text-primary h-8 text-sm px-3 py-1 rounded-full space-x-1"
          >
            <CheckCheck size={15} color="#FE7743" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    );
}
