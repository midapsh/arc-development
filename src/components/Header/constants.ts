import { IRouteValueToTabItem, IRouteValueToMenuItem } from './types';

export enum TabNames {
  home,
  services,
  revolution,
  aboutUs,
  contactUs,
}

export const routeValueToTab = [
  { urlLocation: '/', label: 'Home' },
  { urlLocation: '/services', label: 'Services' },
  { urlLocation: '/revolution', label: 'Revolution' },
  { urlLocation: '/about-us', label: 'About Us' },
  { urlLocation: '/contact-us', label: 'Contact Us' },
] as IRouteValueToTabItem[];

export enum MenuNames {
  customSoftware,
  mobileApps,
  websites,
}

export const routeValueToMenu = [
  { urlLocation: '/custom-software', label: 'Custom Software Development' },
  { urlLocation: '/mobile-apps', label: 'Mobile App Development' },
  { urlLocation: '/web-sites', label: 'Website Development' },
] as IRouteValueToMenuItem[];
