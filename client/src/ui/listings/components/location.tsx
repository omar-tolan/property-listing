import { MapPinIcon } from "lucide-react";
const iconsColor = "#FE7743";

export default function Location({
  location,
  compound,
}: {
  location: string;
  compound: string;
}) {
  return (
    <div className="flex items-center justify-start space-x-2">
      <MapPinIcon size={20} color={iconsColor} />
      <span className="text-white text-sm font-light">
        {compound}, {location}
      </span>
    </div>
  );
}
