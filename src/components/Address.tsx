import React from 'react';
import '../App.css';
import { AddressProps } from '../types';

export const Address: React.FC<AddressProps> = ({
  street,
  city,
  region,
  postalCode
}) => (
  <address className="address">
    {postalCode}, {region}, {city}, {street}
  </address>
);

export default Address;