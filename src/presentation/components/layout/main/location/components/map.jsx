import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import styles from './map.module.scss'

export function Map() {
  // Coordenadas do endereço "Pesque e Pague Cirino" em São Pedro, SP
  const position = [-22.509042, -47.940646]

  return (
    <div className={styles.map}>
      <MapContainer
        center={position}
        zoom={15}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Pesque e Pague Cirino, São Pedro, SP, 13520-000</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
