import { Link } from 'react-router-dom'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const SOCIALS = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaWhatsapp, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink-card border-t border-ink-border pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Logo + blurb */}
        <div>
          <Link to="/#home" className="flex items-center gap-3 mb-4 w-fit">
            <span className="w-11 h-11 rounded-xl bg-yolk rotate-[-4deg] flex items-center justify-center border-2 border-ink">
              <span className="font-display font-black text-ink text-lg">RK</span>
            </span>
            <span className="font-display font-extrabold text-white text-lg">
              ROTTU <span className="text-yolk">KADAI</span>
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
              No. 24, Ranganathan Street, T. Nagar, Chennai 600017
            </li>
            <li className="flex items-center gap-3 text-smoke text-sm">
              <FiPhone className="shrink-0 text-yolk" />
              <a href="tel:+919876543210" className="hover:text-yolk transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3 text-smoke text-sm">
              <FiMail className="shrink-0 text-yolk" />
              <a href="mailto:hello@rottukadai.com" className="hover:text-yolk transition-colors">hello@rottukadai.com</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Follow Us</p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-ink-raised border border-ink-border flex items-center justify-center text-white/70 hover:text-ink hover:bg-yolk hover:border-yolk transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-smoke text-xs mt-6 leading-relaxed">
            Open daily, 11:00 AM – 11:30 PM
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-ink-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-smoke text-xs">
          © {new Date().getFullYear()} ROTTU KADAI. All rights reserved.
        </p>
        <p className="text-smoke text-xs">
          Crafted with <span className="text-yolk">♥</span> in Chennai
        </p>
      </div>
    </footer>
  )
}
