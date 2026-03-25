export interface NavLink {
  label: string
  href?: string
  megaMenu?: MegaMenuData
}

export interface MegaMenuColumn {
  title: string
  links: MegaMenuLink[]
  showImage?: boolean
}

export interface MegaMenuLink {
  label: string
  href: string
  isViewAll?: boolean
}

export interface MegaMenuData {
  columns: MegaMenuColumn[]
}