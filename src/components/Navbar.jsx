import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'
import { HashLink } from 'react-router-hash-link';
import logo3 from '../assets/image.png'

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const PHONE_DISPLAY = '+919566013048'
const PHONE_TEL = '+919566013048'

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
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${scrolled
        ? 'bg-ink/95 backdrop-blur-lg shadow-soft border-b border-ink-border'
        : 'bg-ink'
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 sm:h-20">
        {/* Logo — hand-painted tin signboard mark */}
        <Link to="/#home" className="flex items-center gap-3 group shrink-0">
            <img
              src={logo3}
              alt="Riyan's Rottu Kadai"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl object-contain transition-transform duration-300 group-hover:scale-105"
            />

          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-yolk text-base sm:text-lg tracking-wide">
              RIYAN'S  <span className="text-white">ROTTU KADAI</span>
            </span>

          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <HashLink
                smooth
                to={link.href}
                className="relative text-sm font-semibold text-white/85 hover:text-yolk transition-colors py-2 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-yolk transition-all duration-300 group-hover:w-full" />
              </HashLink>
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
                  <HashLink
                    smooth
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-white/90 font-semibold text-base border-b border-ink-border/60 hover:text-yolk hover:pl-2 transition-all"
                  >
                    {link.label}
                  </HashLink>
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
