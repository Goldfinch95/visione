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
              <p className="text-xl tracking-[2px] uppercase text-red-700 font-semibold mb-4 font-raleway">
                {col.title}
              </p>

              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    block text-base  mb-2.5 tracking-[0.3px] font-raleway
                    transition-colors duration-150
                    ${link.isViewAll
                      ? 'text-red-700 underline text-base mt-2'
                      : 'text-neutral-700 hover:text-red-700'
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}

              {col.showImage && (
                <div className="mt-5 w-40 h-44 bg-gradient-to-br from-pink-200 to-red-200 rounded flex items-end justify-center pb-3">
                  <span className="text-base tracking-[2px] uppercase text-red-800 font-raleway">
                    Collection
                  </span>
                </div>
              )}
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