import { NavLink } from '../types/navbar.types'

export const navLinksLeft: NavLink[] = [
  {
    label: 'MARCAS',
    megaMenu: {
      columns: [
        {
          title: 'Premium',
          links: [
            { label: 'Ray-Ban', href: '#marcas' },
            { label: 'Gucci', href: '#marcas' },
            { label: 'Prada', href: '#marcas' },
            { label: 'Dior', href: '#marcas' },
            { label: 'Ver todas las marcas', href: '#marcas', isViewAll: true },
          ],
        },
        {
          title: 'Sport',
          links: [
            { label: 'Oakley', href: '#marcas' },
            { label: 'Nike Vision', href: '#marcas' },
            { label: 'Adidas Eyewear', href: '#marcas' },
          ],
        },
        {
          title: 'Clásicas',
          links: [
            { label: 'Persol', href: '#marcas' },
            { label: 'Maui Jim', href: '#marcas' },
            { label: 'Silhouette', href: '#marcas' },
          ],
        },
      ],
    },
  },
  { label: 'PRECIOS', href: '#precios' },
]

export const navLinksRight: NavLink[] = [
  {
    label: 'LENTES',
    megaMenu: {
      columns: [
        {
          title: 'Tipo de lente',
          links: [
            { label: 'Monofocales', href: '#lentes' },
            { label: 'Progresivos', href: '#lentes' },
            { label: 'Bifocales', href: '#lentes' },
            { label: 'Fotocromáticos', href: '#lentes' },
          ],
        },
        {
          title: 'Tratamientos',
          links: [
            { label: 'Antirreflejo', href: '#lentes' },
            { label: 'Luz azul', href: '#lentes' },
            { label: 'Polarizados', href: '#lentes' },
          ],
        },
      ],
    },
  },
  { label: 'CONTACTO', href: '#contacto' },
]