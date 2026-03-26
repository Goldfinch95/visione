export interface FooterLink {
  label: string
  href: string
}

export interface FooterContactRow {
  icon: 'location' | 'phone' | 'email' | 'clock'
  text: string
}