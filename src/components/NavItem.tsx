import React from 'react';
import '../App.css';
import { NavItemProps } from '../types';

export const NavItem: React.FC<NavItemProps> = ({ 
  text, 
  onClick, 
  isActive = false,
  ariaLabel 
}) => (
  <button
    className={`navItem ${isActive ? "active" : ''}`}
    onClick={onClick}
    aria-label={ariaLabel || text}
    role="menuitem"
    tabIndex={0}
  >
    {text}
  </button>
);

export default NavItem;