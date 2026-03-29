'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { NavItem } from './NavItem'
import { MegaMenu } from './Mega_Menu'
import { Hamburger } from './Hamburger'
import { MobileDrawer } from './Mobile_drawer'
import { useNavbar } from '../hooks/use_navbar'
import { useMobileMenu } from '../hooks/use_mobile_menu'
import { navLinksLeft, navLinksRight } from '../data/nav_links.data'

export function Navbar() {
  const { openMenu, isMenuOpen, toggleMenu, navRef } = useNavbar()
  const { isOpen: mobileOpen, openSub, toggle: toggleMobile, close: closeMobile, toggleSub } = useMobileMenu()

  const isDark = !isMenuOpen && !mobileOpen

  const activeLink = [...navLinksLeft, ...navLinksRight].find(
    (l) => l.label === openMenu
  )

  return (
    <>
      <header ref={navRef} className="absolute top-0 left-0 right-0 z-50">
        <motion.nav
          animate={{
            backgroundColor: (isMenuOpen || mobileOpen)
              ? 'rgba(255,255,255,1)'
              : 'rgba(0,0,0,0)'
          }}
          transition={{ duration: 0.25 }}
          className="relative w-full h-[60px] flex items-center px-5 lg:justify-center lg:px-8"
        >

          {/* ── MOBILE / TABLET ── */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <a href="/" className="no-underline">
              <span className={`block font-cormorant font-light tracking-[5px] transition-colors duration-250 text-xl sm:text-2xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                VISIONE
              </span>
              <span className={`block font-raleway text-xs font-light mt-0.5 uppercase tracking-[3px] transition-colors duration-250 ${isDark ? 'text-white/50' : 'text-neutral-500'}`}>
                Óptica & Audición de Autor
              </span>
            </a>

            <div className="flex items-center gap-3">
              <Hamburger isOpen={mobileOpen} onToggle={toggleMobile} isDark={isDark} />
            </div>
          </div>

          {/* ── DESKTOP ── */}
          <div className="hidden lg:flex items-center">
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

            <a href="/" className="text-center no-underline flex-shrink-0">
              <span className={`block font-cormorant text-2xl font-light tracking-[5px] transition-colors duration-250 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                VISIONE
              </span>
              <span className={`block font-raleway text-xs font-light mt-0.5 uppercase tracking-[3.5px] transition-colors duration-250 ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                Óptica & Audición de Autor
              </span>
            </a>

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

        <AnimatePresence>
          {isMenuOpen && activeLink?.megaMenu && (
            <MegaMenu key={openMenu} data={activeLink.megaMenu} />
          )}
        </AnimatePresence>
      </header>

      <MobileDrawer
        isOpen={mobileOpen}
        openSub={openSub}
        onToggleSub={toggleSub}
        onClose={closeMobile}
      />
    </>
  )
}