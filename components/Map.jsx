import { useStateContext } from "@/context/StateContext";
import { MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import mapData from "../public/countries.geojson";

export default function Map() {
  const { setSelectedCountry } = useStateContext();

  function handleClick(feature, layer) {
    layer.on("click", function (e) {
      const countryName = feature.properties.ADMIN;
      setSelectedCountry(countryName);
    });
  }
  const geoJsonStyle = {
    fillColor: "#3388ff",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "0",
    fillOpacity: 0.4,
  };

  return (
    <MapContainer
      center={[20.59, 78.96]}
      zoom={5}
      style={{ height: "600px"}}
      className="mx-6 col-start-1 col-end-3"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={mapData}
        onEachFeature={handleClick}
        style={geoJsonStyle}
      />
    </MapContainer>
  );
}
