import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function Map() {
  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (!map) {
      const mapInstance = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance);

      setMap(mapInstance);

      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider: provider,
        autoComplete: true,
        searchLabel: 'Pesquisar local',
        keepResult: true,
      });

      mapInstance.addControl(searchControl);

      searchControl.on('results', (data) => {
        const results = data.results.map((result) => result.label);
        setPlaces(results);
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    }
  }, [map]);

  useEffect(() => {
    if (searchTerm && map) {
      const provider = new OpenStreetMapProvider();

      if (userLocation) {
        provider
          .search({ query: searchTerm, lat: userLocation.lat, lon: userLocation.lng })
          .then((results) => {
            const resultsLabels = results.map((result) => result.label);
            setPlaces(resultsLabels);
          })
          .catch((error) => {
            console.error('Erro na pesquisa:', error);
          });
      } else {
        provider
          .search({ query: searchTerm })
          .then((results) => {
            const resultsLabels = results.map((result) => result.label);
            setPlaces(resultsLabels);
          })
          .catch((error) => {
            console.error('Erro na pesquisa:', error);
          });
      }
    }
  }, [searchTerm, map, userLocation]);

  useEffect(() => {
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      <div>
        <h2>Locais Próximos</h2>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {places.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Map;
