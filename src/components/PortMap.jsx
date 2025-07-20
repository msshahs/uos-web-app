// components/PortMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Default marker fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const offices = [
  {
    city: "Houston, Texas",
    coords: [29.7604, -95.3698],
    specialty: "Gulf Coast Operations",
  },
  {
    city: "Portland, Oregon",
    coords: [45.5051, -122.675],
    specialty: "Pacific Northwest",
  },
  {
    city: "Mumbai, India",
    coords: [19.076, 72.8777],
    specialty: "Asian Maritime Hub",
  },
  {
    city: "Abu Dhabi, UAE",
    coords: [24.4539, 54.3773],
    specialty: "Middle East Operations",
  },
];

export default function PortMap() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }} // Important
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {offices.map((office, index) => (
          <Marker key={index} position={office.coords}>
            <Popup>
              <strong>{office.city}</strong>
              <br />
              {office.specialty}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
