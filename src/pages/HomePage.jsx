import { useEffect, useState } from "react";

import Map from "../components/Map";
import Select from "../components/Select";

function HomePage() {
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [coords, setCoords] = useState({ lat: null, lng: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative">
      <Select
        selectedBuilding={selectedBuilding}
        setSelectedBuilding={setSelectedBuilding}
      />

      <Map selectedBuilding={selectedBuilding} coords={coords} />
    </div>
  );
}

export default HomePage;
