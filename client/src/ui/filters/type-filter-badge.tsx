import { FunnelPlus, FunnelX, X } from "lucide-react";

const types = [
  "Apartment",
  "House",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Chalet",
];

export default function TypeFilterBadge({
  handleOpenMenu,
  appliedFilter,
}: {
  handleOpenMenu: (key: string) => void;
  appliedFilter: string;
}) {
  const color =
    appliedFilter === "type"
      ? "bg-primary border border-white"
      : "bg-white border border-black";
  return (
    <div className="inline-block relative">
      <div
        className={
          color +
          " flex space-x-2 px-4 py-1 items-center rounded-lg cursor-pointer"
        }
        onClick={() => {
          handleOpenMenu("type");
        }}
      >
        <div className="text-black text-md">Property Type</div>
        {appliedFilter === "type" ? (
          <FunnelX size={15} color="#000000" />
        ) : (
          <FunnelPlus size={15} color="#000000" />
        )}
      </div>
    </div>
  );
}

export function TypeFilterDropdown({
  handleOpenMenu,
  handleApplyFilter,
  handleResetFilter,
  handleSetFilter,
  selectedTypes,
  mode,
}: {
  handleOpenMenu?: (key: string) => void;
  handleApplyFilter: () => void;
  handleResetFilter: (resetFilter: string) => void;
  handleSetFilter: (types: string[]) => void;
  selectedTypes: string[];
  mode?: "sidemenu" | "navbar";
}) {
  const handleChange = (newValue: string) => {
    if (!selectedTypes.includes(newValue)) {
      selectedTypes.push(newValue);
    } else {
      console.log("removing")
      selectedTypes = selectedTypes.filter((value) => value != newValue)
    }
    console.log(selectedTypes)
    handleSetFilter(selectedTypes);
  };
  const checkSelected = (type: string) => {
    return selectedTypes.includes(type);
  };
  return (
    <div
      className={
        mode == "sidemenu"
          ? "bg-black w-[300px] z-50 mt-1 py-4 px-4"
          : "bg-white w-[300px] z-50 mt-1 py-4 px-4 rounded-lg shadow-lg"
      }
    >
      <div className="mb-4">
        <div className="flex justify-between">
          <label
            className={
              mode == "sidemenu"
                ? "text-white text-sm font-medium"
                : "text-black text-sm font-medium"
            }
          >
            Select property types
          </label>
          {mode == "navbar" && (
            <div className="cursor-pointer">
              <X
                size={15}
                color="#000000"
                onClick={() => handleOpenMenu && handleOpenMenu("")}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          mode == "sidemenu" ? "text-gray-200 flex flex-col" : "flex flex-wrap"
        }
      >
        {types.map((type) => (
          <div
            key={type}
            className="flex items-center space-x-2 mb-2 mr-2 cursor-pointer"
            onClick={() => handleChange(type)}
          >
            <input
              type="checkbox"
              className="w-4 h-4 accent-primary bg-gray-100 rounded focus:ring-primary focus:ring-2"
              checked={checkSelected(type)}
              onChange={() => handleChange(type)}
            />
            <div>{type}</div>
          </div>
        ))}
      </div>
      {mode == "navbar" && (
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="bg-primary text-white text-sm px-4 py-1 rounded-lg cursor-pointer"
            onClick={handleApplyFilter}
          >
            Apply
          </button>
          <button
            className="text-black border border-black text-sm px-4 py-1 rounded-lg cursor-pointer"
            onClick={() => handleResetFilter("types")}
          >
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
}
