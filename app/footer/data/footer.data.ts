import { FooterLink, FooterContactRow } from '../types/footer.types'

export const footerNavLinks: FooterLink[] = [
  { label: 'Marcas', href: '#marcas' },
  { label: 'Lentes', href: '#lentes' },
  { label: 'Precios', href: '#precios' },
  { label: 'Novedades', href: '#novedades' },
  { label: 'Contacto', href: '#contacto' },
]

export const footerContactRows: FooterContactRow[] = [
  { icon: 'location', text: 'Av. Santa Fe 1234\nBuenos Aires, Argentina' },
  { icon: 'phone',    text: '+54 11 4321-5678' },
  { icon: 'email',    text: 'info@visione.com.ar' },
  { icon: 'clock',    text: 'Lun–Vie 10 a 19 hs\nSáb 10 a 14 hs' },
]