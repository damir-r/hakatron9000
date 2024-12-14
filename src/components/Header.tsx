import React from 'react';
import '../App.css';
import { HeaderProps } from '../types.tsx';
import { NavItem } from './NavItem.tsx';
import { GradeSection } from './GradeSection.tsx';

export const Header: React.FC<HeaderProps> = ({ 
  logoUrl, 
  schoolName, 
  navItems,
  showSelection = false
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
            {showSelection && item.text === "расписания" ? (<GradeSection />) : (<></>)}
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;