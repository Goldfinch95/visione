'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faChevronRight, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { navLinksLeft, navLinksRight } from '../data/nav_links.data'

interface MobileDrawerProps {
  isOpen: boolean
  openSub: string | null
  onToggleSub: (id: string) => void
  onClose: () => void
}

const allLinks = [...navLinksLeft, ...navLinksRight]

export function MobileDrawer({ isOpen, openSub, onToggleSub, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-[60px] right-0 bottom-0 w-full sm:w-[380px] bg-white z-50
          flex flex-col lg:hidden
          transition-transform duration-350 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Scrollable links */}
        <div className="flex-1 overflow-y-auto px-7 pt-8 pb-6">

          {/* Eyebrow */}
          <p className="font-raleway text-xs tracking-[3px] uppercase text-red-700 font-semibold mb-4">
            Menú
          </p>

          {allLinks.map((link) => {
            const hasSub = !!link.megaMenu
            const isExpanded = openSub === link.label

            return (
              <div key={link.label}>

                {/* Link principal */}
                <div
                  onClick={() => hasSub ? onToggleSub(link.label) : onClose()}
                  className="flex items-center justify-between py-3 border-b border-neutral-100 cursor-pointer group min-h-[44px]"
                >
                  <span className={`
                    font-cormorant text-2xl font-light tracking-wide transition-colors duration-150
                    ${isExpanded ? 'text-red-700' : 'text-neutral-900 group-hover:text-red-700'}
                  `}>
                    {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                  </span>
                  {hasSub && (
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={`text-xs transition-all duration-200 ${
                        isExpanded ? 'text-red-700 rotate-90' : 'text-neutral-300'
                      }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {hasSub && (
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      -mx-7 px-7 bg-neutral-50
                      ${isExpanded ? 'max-h-[400px] py-3' : 'max-h-0'}
                    `}
                  >
                    {link.megaMenu!.columns.map((col) => (
                      <div key={col.title} className="mb-3">
                        {/* Título de columna */}
                        <p className="font-raleway text-xs tracking-[2.5px] uppercase text-red-700 font-semibold mb-2">
                          {col.title}
                        </p>
                        {col.links.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            onClick={onClose}
                            className="
                              block font-raleway text-sm font-light text-neutral-500
                              py-2.5 border-b border-neutral-100 last:border-none
                              tracking-[0.3px] hover:text-red-700
                              transition-colors duration-150 no-underline
                              min-h-[44px] flex items-center
                            "
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )
          })}
        </div>

        {/* Footer del drawer */}
        <div className="px-7 pt-5 pb-7 border-t border-neutral-100">

          {/* CTA */}
          <a
            href="#contacto"
            onClick={onClose}
            className="
              flex items-center justify-center gap-2 w-full min-h-[44px]
              bg-red-700 hover:bg-red-800 text-white
              font-raleway text-xs tracking-[2px] uppercase font-semibold
              py-3.5 transition-colors duration-200 no-underline
            "
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="text-xs" />
            Contacto
          </a>

          {/* Contacto */}
          <div className="flex items-center gap-2 mt-4 min-h-[44px]">
            <FontAwesomeIcon icon={faLocationDot} className="text-sm text-neutral-300" />
            <span className="font-raleway text-sm font-light text-neutral-400">
              Av. Santa Fe 1234, Buenos Aires
            </span>
          </div>

          <div className="flex items-center gap-2 min-h-[44px]">
            <FontAwesomeIcon icon={faPhone} className="text-sm text-neutral-300" />
            <span className="font-raleway text-sm font-light text-neutral-400">
              +54 11 4321-5678
            </span>
          </div>

        </div>
      </div>
    </>
  )
}