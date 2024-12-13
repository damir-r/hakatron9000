import React from 'react';
import '../App.css';
import { FacilityCardProps } from '../types';

export const FacilityCard: React.FC<FacilityCardProps> = ({ 
  title, 
  description,
  icon,
  altText 
}) => (
  <article className="facilityCard">
    {icon && <img src={icon} alt={altText} className="facilityIcon" />}
    <h3 className="facilityTitle">{title}</h3>
    <p className="facilityDescription">{description}</p>
  </article>
);

export default FacilityCard;