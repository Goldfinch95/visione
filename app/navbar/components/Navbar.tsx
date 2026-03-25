'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { NavItem } from './NavItem'
import { MegaMenu } from './Mega_Menu'
import { useNavbar } from '../hooks/use_navbar'
import { navLinksLeft, navLinksRight } from '../data/nav_links.data'

export function Navbar() {
  const { openMenu, isMenuOpen, toggleMenu, navRef } = useNavbar()
  const isDark = !isMenuOpen

  const activeLink = [...navLinksLeft, ...navLinksRight].find(
    (l) => l.label === openMenu
  )

  return (
    <header ref={navRef} className="absolute top-0 left-0 right-0 z-50">
      <motion.nav
        animate={{ backgroundColor: isMenuOpen ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0)' }}
        transition={{ duration: 0.25 }}
        className="relative w-full h-16 flex items-center justify-center px-8"
      >
        {/* Centered group: left links + logo + right links */}
        <div className="flex items-center">

          {/* Left links */}
          <div className="flex items-center gap-8 mr-12">
            {navLinksLeft.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                isMenuOpen={isMenuOpen}
                openMenu={openMenu}
                onToggle={toggleMenu}
                isDark={isDark}
              />
            ))}
          </div>

          {/* Logo */}
          <a href="/" className="text-center no-underline flex-shrink-0">
            <span
              className={`block font-cormorant text-[20px] font-light tracking-[5px] transition-colors duration-250 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              VISIONE
            </span>
            <span
              className={`block font-raleway text-[7.5px] tracking-[3.5px] font-light mt-0.5 uppercase transition-colors duration-250 ${
                isDark ? 'text-white/60' : 'text-neutral-500'
              }`}
            >
              Óptica & Audición de Autor
            </span>
          </a>

          {/* Right links */}
          <div className="flex items-center gap-8 ml-12">
            {navLinksRight.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                isMenuOpen={isMenuOpen}
                openMenu={openMenu}
                onToggle={toggleMenu}
                isDark={isDark}
              />
            ))}
          </div>

        </div>
      </motion.nav>

      {/* MegaMenu */}
      <AnimatePresence>
        {isMenuOpen && activeLink?.megaMenu && (
          <MegaMenu key={openMenu} data={activeLink.megaMenu} />
        )}
      </AnimatePresence>
    </header>
  )
}