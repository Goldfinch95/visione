import { footerNavLinks, footerContactRows } from '../data/footer.data'
import { FooterContactIcon } from './Footer_Contact_Icon'
import { FooterSocial } from './Footer_social'

export function Footer() {
  return (
    <footer className="bg-[#111110] w-full font-raleway">

      {/* Main grid */}
      <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-0 px-16 pt-[72px] pb-14 border-b border-white/[0.08]">

        {/* Col 1 — Brand */}
        <div className="pr-16">
          <span className="block font-cormorant text-[24px] font-light text-white tracking-[6px] mb-1.5">
            VISIONE
          </span>
          <span className="block font-raleway text-[9px] tracking-[3.5px] text-white/35 font-light uppercase mb-6">
            Óptica & Audición de Autor
          </span>
          <p className="text-[11.5px] text-white/40 font-light leading-[1.85] mb-7 max-w-[220px]">
            Más de 20 años ofreciendo las mejores monturas del mundo. Calidad, estilo y atención personalizada en cada visita.
          </p>
          <FooterSocial />
        </div>

        {/* Col 2 — Navegación */}
        <div className="pr-16">
          <span className="block text-[9px] tracking-[3px] uppercase text-red-700 font-semibold mb-5">
            Navegación
          </span>
          {footerNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-[11.5px] text-white/45 font-light tracking-[0.3px] mb-[11px] transition-colors duration-[180ms] hover:text-white/85 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Col 3 — Contacto */}
        <div>
          <span className="block text-[9px] tracking-[3px] uppercase text-red-700 font-semibold mb-5">
            Contacto
          </span>
          {footerContactRows.map((row, i) => (
            <div key={i} className="flex items-start gap-[10px] mb-[14px]">
              <FooterContactIcon icon={row.icon} />
              <span className="text-[11.5px] text-white/45 font-light leading-[1.6] whitespace-pre-line">
                {row.text}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-16 py-[22px]">
        <span className="text-[10px] text-white/20 font-light tracking-[0.5px]">
          © 2025 Visione. Todos los derechos reservados.
        </span>
        <span className="text-[10px] text-white/20 font-light tracking-[0.5px] flex items-center gap-1">
          hecho con{' '}
          <span className="transition-colors duration-200 cursor-default hover:text-red-700">❤</span>
          {' '}por el equipo de{' '}
          <a
            href="https://undevcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 font-medium tracking-[0.8px] no-underline transition-colors duration-200 hover:text-red-700"
          >
            UNDEVCODE
          </a>
        </span>
      </div>

    </footer>
  )
}