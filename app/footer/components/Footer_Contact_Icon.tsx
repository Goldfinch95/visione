import { FooterContactRow } from '../types/footer.types'

export function FooterContactIcon({ icon }: { icon: FooterContactRow['icon'] }) {
  const stroke = 'rgba(255,255,255,0.6)'
  const w = '1.5'

  if (icon === 'location') return (
    <svg className="w-[14px] h-[14px] flex-shrink-0 mt-[1px] opacity-35" viewBox="0 0 24 24" fill="none">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={stroke} strokeWidth={w} />
      <circle cx="12" cy="10" r="3" stroke={stroke} strokeWidth={w} />
    </svg>
  )

  if (icon === 'phone') return (
    <svg className="w-[14px] h-[14px] flex-shrink-0 mt-[1px] opacity-35" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.27 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke={stroke} strokeWidth={w} />
    </svg>
  )

  if (icon === 'email') return (
    <svg className="w-[14px] h-[14px] flex-shrink-0 mt-[1px] opacity-35" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={stroke} strokeWidth={w} />
      <polyline points="22,6 12,13 2,6" stroke={stroke} strokeWidth={w} />
    </svg>
  )

  return (
    <svg className="w-[14px] h-[14px] flex-shrink-0 mt-[1px] opacity-35" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth={w} />
      <polyline points="12 6 12 12 16 14" stroke={stroke} strokeWidth={w} />
    </svg>
  )
}