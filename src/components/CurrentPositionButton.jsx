import { TbCurrentLocation } from "react-icons/tb";
import { useMap } from "react-leaflet";

function CurrentPositionButton({ coords }) {
  const map = useMap();

  function handleSetViewToCurrentPosition(coords) {
    if (coords.lat && coords.lng) {
      map.setView([coords.lat, coords.lng], map.getZoom(), {
        animate: true,
      });
    }
  }

  return (
    <div className="absolute z-[1000] bottom-10 right-5">
      <button
        onClick={() => handleSetViewToCurrentPosition(coords)}
        className="border border-gray-400 bg-gray-200 hover:bg-gray-300 transition-all duration-300 px-1 py-1 rounded-full"
      >
        <TbCurrentLocation size={50} />
      </button>
    </div>
  );
}

export default CurrentPositionButton;
