import React from 'react';
import '../App.css';
import { MapSectionProps } from '../types';

export const MapSection: React.FC<MapSectionProps> = ({ mapUrl }) => (
  <section className="mapSection" aria-label="School Location">
    <img src={mapUrl} alt="School address in text with the school on the right" className="mapImage" />
    <div className="locationInfo">
      <h2 className="sectionTitle">Как добраться</h2>
      <iframe title="Yandex Maps showcase of the school" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1716d1d21644cd31b1d23f73e09444398e3761d2e44fe8814384d887fc3d07d8&amp;source=constructor" width="600" height="600" frameborder="0"></iframe>
    </div>
  </section>
);

export default MapSection;