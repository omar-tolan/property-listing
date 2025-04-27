import {
  Grid2X2,
  Fence,
  TreePine,
  SquareParking,
  House,
} from "lucide-react";

const iconsColor = "#FE7743";
export default function Areas({
  unit,
  garden,
  roof,
  terrace,
  garage,
}: {
  unit: number;
  garden: number;
  roof: number;
  terrace: number;
  garage: number;
}) {
  return (
    <div className="flex">
      <div className=" border-gray-500 border-r px-2 flex flex-row items-center space-x-1">
        <TreePine size={20} color={iconsColor} />
        <p className="text-white text-sm font-light">{garden} m<sup>2</sup></p>
      </div>
      <div className=" border-gray-500 border-r px-2 flex flex-row items-center space-x-1">
        <SquareParking size={20} color={iconsColor} />
        <p className="text-white text-sm font-light">{garage} m<sup>2</sup></p>
      </div>
      <div className="border-gray-500 border-r px-2 flex flex-row items-end space-x-1">
        <Grid2X2 size={20} color={iconsColor} />
        <p className="text-white text-sm font-light">{roof} m<sup>2</sup></p>
      </div>
      <div className="px-2 flex flex-row items-end space-x-1">
        <Fence size={20} color={iconsColor} />
        <p className="text-white text-sm font-light">
          {terrace} m<sup>2</sup>
        </p>
      </div>
      <div className="px-2 flex flex-row items-end space-x-1">
        <House size={20} color={iconsColor} />
        <p className="text-white text-sm font-light">
          {unit} m<sup>2</sup>
        </p>
      </div>
    </div>
  );
}
