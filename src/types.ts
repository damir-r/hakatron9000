export interface NavItemProps {
    text: string;
    onClick?: () => void;
    isActive?: boolean;
    ariaLabel?: string;
  }
  
  export interface SocialLinkProps {
    icon: string;
    text: string;
    alt: string;
    href: string;
    ariaLabel: string;
  }
  
  export interface ImageGalleryItemProps {
    backgroundColor: string;
    imageUrl?: string;
    alt?: string;
    onClick?: () => void;
  }
  
  export interface FacilityCardProps {
    title: string;
    description: string;
    icon?: string;
    altText?: string;
  }
  
  export interface MapSectionProps {
    mapUrl: string;
    gisLink: string;
  }
  
  export interface AddressProps {
    street: string;
    city: string;
    region: string;
    postalCode: string;
  }
  
  export interface HeaderProps {
    logoUrl: string;
    schoolName: string;
    navItems: NavItemProps[];
  }