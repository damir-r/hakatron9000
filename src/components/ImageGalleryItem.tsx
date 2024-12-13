import React from 'react';
import '../App.css';
import { ImageGalleryItemProps } from '../types';

export const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ 
  backgroundColor,
  imageUrl,
  alt,
  onClick 
}) => (
  <div 
    className="galleryItem" 
    style={{ backgroundColor }}
    onClick={onClick}
    role="img"
    aria-label={alt}
    tabIndex={0}
  >
    {imageUrl && <img src={imageUrl} alt={alt} className="galleryImage" />}
  </div>
);

export default ImageGalleryItem;