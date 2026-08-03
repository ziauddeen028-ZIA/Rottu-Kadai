import { Link } from 'react-router-dom'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import logo3 from '../assets/image.png'

const QUICK_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]



export default function Footer() {
  return (
    <footer className="relative bg-ink-card border-t border-ink-border pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Logo + blurb */}
        <div>
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
          <p className="text-smoke text-sm leading-relaxed max-w-xs">
            Roadside-style fast food, made fresh and served fast. Bold flavour, honest pricing, zero shortcuts.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-smoke text-sm hover:text-yolk transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Contact</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-smoke text-sm">
              <FiMapPin className="shrink-0 mt-0.5 text-yolk" />
              No. 3, Ramanujam St,
              Shiva Shankar Nagar,
              Secretariat Colony,
              Pallavaram,
              Chennai - 600043
            </li>
            <li className="flex items-center gap-3 text-smoke text-sm">
              <FiPhone className="shrink-0 text-yolk" />
              <a
                href="tel:+919566013048"
                className="hover:text-yolk transition-colors"
              >
                +91 9566013048
              </a>
            </li>

          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Timing</p>

          <p className="text-smoke text-xs mt-6 leading-relaxed">
            Open daily, 12:30 PM – 11:45 PM
          </p>
        </div>
      </div>

      {/* Designed By */}
      <div className="max-w-7xl mx-auto border-t border-ink-border pt-8">
        <div className="flex justify-center mb-6">
          <a
            href="https://ziauddeen-zia.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yolk text-ink border border-yolk font-display font-bold shadow-soft hover:bg-white hover:text-ink hover:shadow-glow transition-all duration-300 active:scale-95"
          >
            <span>Designed by &lt;ZIA/&gt; ↗</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-smoke text-xs">
            © {new Date().getFullYear()} ROTTU KADAI. All rights reserved.
          </p>

          <p className="text-smoke text-xs">
            Crafted with <span className="text-yolk">♥</span> in Chennai
          </p>
        </div>
      </div>
    </footer>
  )
}
