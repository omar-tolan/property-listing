import MapView from "./map";
import Amenities from "../listings/components/amenities";
import { Calendar } from "lucide-react";

export type CompoundProps = {
  name: string;
  launchDate: Date;
  amenities: string[];
  location: {
    coordinates: number[];
    title: string;
  };
};
export default function CompoundCard({
  compound,
  className,
}: {
  compound: CompoundProps;
  className?: string;
}) {
  return (
    <div
      className={
        "flex flex-col h-full bg-black border border-white/10 overflow-hidden rounded-2xl hover:border-white/20 transition-all " +
        className
      }
    >
      <div className="h-[300px]"> 
        <MapView location={compound.location.coordinates} />
      </div>
      
      <div className="px-8 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-white text-2xl font-semibold">
              {compound.name}
            </h1>
            <p className="text-white/60 text-sm">
              {compound.location.title}
            </p>
          </div>
          
          <div className="flex items-center rounded-full px-4 py-2 bg-primary/20 text-primary">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm font-medium">
              Launch: {new Date(compound.launchDate).getFullYear()}
            </span>
          </div>
        </div>

        <div className="pt-2"> 
          <h2 className="text-white/80 text-sm mb-3">Compound Amenities</h2>
          <Amenities 
            amenities={compound.amenities} 
            className="justify-start" 
          />
        </div>
      </div>
    </div>
  );
}
