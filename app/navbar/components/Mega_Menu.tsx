'use client'

import { motion } from 'framer-motion'
import { MegaMenuData } from '../types/navbar.types'

interface MegaMenuProps {
  data: MegaMenuData
}

export function MegaMenu({ data }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-white border-t border-neutral-100 z-50"
    >
      <div className="flex px-12 py-9 gap-0">
        {data.columns.map((col, i) => (
          <div key={col.title} className="flex">
            <div className="flex-1 min-w-[200px]">

              {/* Título de columna */}
              <p className="font-raleway text-xs tracking-[2px] uppercase text-red-700 font-semibold mb-4">
                {col.title}
              </p>

              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    block text-sm mb-2.5 tracking-[0.3px] font-raleway font-light
                    transition-colors duration-150 no-underline
                    ${link.isViewAll
                      ? 'text-red-700 underline text-xs mt-2'
                      : 'text-neutral-600 hover:text-red-700'
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}

            </div>

            {i < data.columns.length - 1 && (
              <div className="w-px bg-neutral-100 mx-8 self-stretch" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}