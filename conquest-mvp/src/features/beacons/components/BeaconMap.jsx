import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const MapInteractionHandler = ({ setHoverLat, setHoverLng, setSelectedLat, setSelectedLng}) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setSelectedLat(lat);
      setSelectedLng(lng);
    },
  });

  useMapEvents({
    mousemove(e){ //TRACKS WHERE MOUSE IS MOVING 
      const{lat, lng} = e.latlng //GETS LAT AND  LNG ON MAP OF WHEREVER IT IS MOVED
      setHoverLat(lat)//USES SETHOVERLAT AND LNG TO CHANGE THE STATEFUL TO LAT AND LNG WHEREVER AND WHENEVER MOVEMENT OCCURS 
      setHoverLng(lng)
    }
  })

  return null;
};

const BeaconMap = ({ beacons, setSelectedLat, setSelectedLng, selectedLat, selectedLng}) => {


  const[hoverLat, setHoverLat] = useState(null)
  const[hoverLng, setHoverLng] = useState(null)


  return (
    <MapContainer
      center={[-33.865143, 151.2099]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapInteractionHandler
        setSelectedLat={setSelectedLat}
        setSelectedLng={setSelectedLng}
        setHoverLat={setHoverLat}
        setHoverLng={setHoverLng}

      />

      {hoverLat && hoverLng && ( //HOVERLAT AND LNG CHANGING AND DETECTED BY MOUSEMOVE E OBJ AUTO MADE TO GET LAT AND LNG, PASS THE LAT AND LNG TO SETTER WHICH CHANGES  
        <Marker //EVERTIME THE Hoverlat lng chnages make a maker 
        position = {[hoverLat, hoverLng]} //that follows the position of hover lat and lng changes
        opacity={0.3}
        /> 
      )}

      {selectedLat !== null && selectedLng !== null && (<Marker
        position={[selectedLat, selectedLng]}/>
      )}

    

      {beacons.map((b) =>
        b.lat != null && b.lng != null ? (
          <Marker key={b.id} position={[b.lat, b.lng]}>
            <Popup>{b.title}</Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default BeaconMap;
