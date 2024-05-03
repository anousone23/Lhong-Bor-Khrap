import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect } from "react";

import { BUILDINGS } from "../../constant";
import CurrentPositionButton from "./CurrentPositionButton";
import { icon } from "leaflet";
import { Link } from "react-router-dom";

const KU_LAT = 17.29180315473355;
const KU_LNG = 104.11289771644637;

function Map({ selectedBuilding, coords }) {
  const building = BUILDINGS.find(
    (building) => building.number == selectedBuilding
  );

  const buildingIcon = icon({
    iconUrl: "/building.svg",
    iconSize: [32, 32],
  });

  const userIcon = icon({
    iconUrl: "/person.svg",
    iconSize: [32, 32],
  });

  return (
    <MapContainer
      center={[coords?.lat || KU_LAT, coords?.lng || KU_LNG]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapEvent building={building} />

      {coords.lat && coords.lng && (
        <Marker icon={userIcon} position={[coords.lat, coords.lng]}>
          <Popup>
            <div className="text-lg font-bold">
              <p>You are here</p>
            </div>
          </Popup>
        </Marker>
      )}

      {building && (
        <Marker icon={buildingIcon} position={[building?.lat, building?.lng]}>
          <Popup>
            <div className="text-lg font-bold">
              <p>{building?.name}</p>
            </div>
          </Popup>
        </Marker>
      )}

      <SetViewOnClick />

      <CurrentPositionButton coords={coords} />

      <div className="absolute z-[1000] bottom-10 left-6 ">
        <Link
          replace
          to={"https://www.youtube.com/watch?v=oHg5SJYRHA0"}
          className="relative"
        >
          <img
            src="/happy.jpg"
            alt="avatar"
            className="rounded-full w-10 h-10 border border-gray-600 hover:scale-150 transition-all duration-200"
          />
          <img
            src="/question.svg"
            alt="question"
            className="rounded-full w-8 h-8 rotate-12 absolute bottom-8 left-7 "
          />
        </Link>
      </div>
    </MapContainer>
  );
}

function SetViewOnClick() {
  const map = useMapEvent("click", (e) => {
    console.log(e);

    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
  });

  return null;
}

function MapEvent({ building }) {
  const map = useMap();

  useEffect(() => {
    if (building) {
      map.setView([building?.lat, building?.lng], map.getZoom());
    }
  }, [building, map]);

  return null;
}

export default Map;
