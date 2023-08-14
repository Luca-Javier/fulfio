import { NavbarLink } from './models';

export const navbarLinks: NavbarLink[] = [
  {
    label: 'Inventario',
    src: 'assets/inventory-icon.svg',
    href: 'inventory',
  },
  {
    label: 'Pedidos',
    src: 'assets/delivery-icon.svg',
    href: 'delivery',
  },
  {
    label: 'Incidencias',
    src: 'assets/incidences-icon.svg',
    href: 'incidences',
  },
  {
    label: 'Devoluciones',
    src: 'assets/return-icon.svg',
    href: 'return',
  },
];

export const navbarLinksHover: { src: string }[] = [
  {
    src: 'assets/inventory-icon-hover.svg',
  },
  {
    src: 'assets/delivery-icon-hover.svg',
  },
  {
    src: 'assets/incidences-icon-hover.svg',
  },
  {
    src: 'assets/return-icon-hover.svg',
  },
];
