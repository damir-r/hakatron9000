import React from 'react';
import '../App.css';
import { FacilityCardProps } from '../types';

export const FacilityCard: React.FC<FacilityCardProps> = ({ 
  title, 
  description
}) => (
  <div className="feature">
      <div className="featurecontent">
        <span className="featuretitle">{title}</span>
        <span className="featuredescription">{description}</span>
      </div>
    </div>
);

export default FacilityCard;