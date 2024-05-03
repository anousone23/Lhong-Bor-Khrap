import { BUILDINGS } from "../../constant";

function Select({ selectedBuilding, setSelectedBuilding }) {
  return (
    <select
      name="building"
      id="building"
      className="w-2/5  bg-gray-200 text-gray-900 font-bold text-xl px-2 py-1  border border-gray-500 rounded-lg absolute z-[1000] top-1 right-1 cursor-pointer hover:bg-gray-300 transition-all duration-300 text-start"
      value={selectedBuilding}
      onChange={(e) => setSelectedBuilding(e.target.value)}
    >
      <option value="">ค้นหาอาคาร</option>
      {BUILDINGS.map((building) => (
        <option key={building.number} value={building.number}>
          {building.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
