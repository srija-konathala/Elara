import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pilots', href: '#pilots' },
  { label: 'Contact', href: '#footer-cta' },
]

function scrollToHash(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = useMemo(() => NAV_ITEMS, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full',
        'border-b border-teal-100/60',
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur-md' : 'bg-white',
      ].join(' ')}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3 no-underline"
        >
          <span className="h-9 w-9 rounded-2xl bg-teal-50 text-teal-700 shadow-soft grid place-items-center font-extrabold">
            E
          </span>
          <span className="text-xl font-extrabold text-teal-700">Elara</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(item.href)
              }}
              className="text-sm font-semibold text-gray-700 hover:text-teal-700"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => scrollToHash('#footer-cta')}
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-teal-700"
          >
            Get Started
          </button>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-2xl text-teal-700 hover:bg-teal-50"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-6 mb-4 rounded-3xl border border-teal-100 bg-white p-3 shadow-soft-lg">
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileOpen(false)
                    scrollToHash(item.href)
                  }}
                  className="rounded-2xl px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-teal-50"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  scrollToHash('#footer-cta')
                }}
                className="mt-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-teal-700"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

