"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {  Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

interface Location {
  lat: number;
  lng: number;
  name: string;
}

const LeafletMap: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [locations] = useState<Location[]>([
    { lat: 39.326665750000004, lng: -76.67903988024246, name: "3700 Liberty Heights Avenue" }
  ]);

  const customIcon: Icon = new Icon({
    iconUrl: markerIconPng.src, 
    shadowUrl: markerShadowPng.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    setMounted(true);
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  if (!mounted) return <p>Loading map...</p>;

  return (
    <div className='bg-white shadow'>
    <MapContainer
      key="leaflet-map"
      center={[39.326665750000004, -76.67903988024246]} 
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lng]} 
          icon={customIcon}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
     </MapContainer>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 p-4">
        <div className="space-y-2 p-4 max-w-md">
          <h2 className="text-indigo-800 text-2xl font-semibold">Address</h2>
          <p className="text-gray-700 font-semibold text-xl">Baltimore</p>
          <p className="text-gray-700 text-xl break-words">700 Liberty Heights Avenue, Baltimore, MD 21215</p>
        </div>
        <div className="space-y-2 p-4 max-w-md">
          <h2 className="text-indigo-800 text-2xl font-semibold">Recovery Houses</h2>
          <p className="text-gray-700 font-semibold text-xl">TBA  Office 1 (Outpatient clinic)</p>
          <p className="text-gray-700 text-xl break-words">516 N Rolling Rd Catonsville, MD 21228</p>
        </div>
     </div>
    </div>
  );
};

export default LeafletMap;