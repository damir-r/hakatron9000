import React from 'react';
import '../App.css';
import { HeaderProps } from '../types.tsx';
import { NavItem } from './NavItem.tsx';

export const Header: React.FC<HeaderProps> = ({ 
  logoUrl, 
  schoolName, 
  navItems 
}) => (
  <header className="header">
    <div className="logo">
      <img src={logoUrl} alt="School logo" className="logoImage" />
      <div className="logoText">{schoolName}</div>
    </div>
    <nav className="navigation" role="navigation">
      <ul className="navList">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;