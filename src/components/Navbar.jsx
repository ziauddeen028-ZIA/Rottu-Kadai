import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const PHONE_DISPLAY = '+91 98765 43210'
const PHONE_TEL = '+919876543210'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur-lg shadow-soft border-b border-ink-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 sm:h-20">
        {/* Logo — hand-painted tin signboard mark */}
        <Link to="/#home" className="flex items-center gap-3 group shrink-0">
          <span className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-yolk rotate-[-4deg] flex items-center justify-center shadow-glow-sm group-hover:rotate-0 transition-transform duration-300 border-2 border-ink">
            <span className="font-display font-black text-ink text-lg sm:text-xl leading-none">RK</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-white text-base sm:text-lg tracking-wide">
              ROTTU <span className="text-yolk">KADAI</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-smoke tracking-[0.25em] uppercase mt-0.5">
              Fast Food Since 2015
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-semibold text-white/85 hover:text-yolk transition-colors py-2 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-yolk transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:inline-flex items-center gap-2 bg-yolk text-ink font-display font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white hover:shadow-glow transition-all duration-300 active:scale-95"
          >
            <FiPhoneCall className="text-base" />
            Call Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-ink-raised transition-colors"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-ink border-t border-ink-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="block py-3 text-white/90 font-semibold text-base border-b border-ink-border/60 hover:text-yolk hover:pl-2 transition-all"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-yolk text-ink font-display font-bold text-sm px-5 py-3 rounded-full active:scale-95 transition-transform"
              >
                <FiPhoneCall /> Call Now — {PHONE_DISPLAY}
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
