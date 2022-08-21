import { MapContainer, TileLayer } from "react-leaflet";
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css';

let DefaultIcon = L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
    iconAnchor:[16,37]
});

L.Marker.prototype.options.icon=DefaultIcon;

export default function Mapa(props:mapaProps){
    return(
        <MapContainer
            center={[-31.406893775045095, -64.49913003140205]} zoom={14}
            style={{height:props.height}} 
        >
            <TileLayer attribution="React peliculas"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

interface mapaProps{
    height: string;
}

Mapa.defaultProps={
    height:'500px'
}