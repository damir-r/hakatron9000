import React from 'react';
import '../App.css';
import { SocialLinkProps } from '../types';

export const SocialLink: React.FC<SocialLinkProps> = ({ 
  icon, 
  text, 
  alt, 
  href,
  ariaLabel 
}) => (
  <a 
    href={href}
    className="socialLink"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img loading="lazy" src={icon} alt={alt} className="socialIcon" />
    <span className="socialText">{text}</span>
  </a>
);

export default SocialLink;