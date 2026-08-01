import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = "919566013048";

export default function ContactPreview() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-ink">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <span className="text-yolk font-display font-bold tracking-[0.3em] text-xs uppercase">
            Find Us
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3">
            Visit Riyan's Rottu Kadai
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-ink-card border border-ink-border rounded-card p-7 sm:p-8 flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-11 h-11 rounded-xl bg-yolk/10 border border-yolk/25 flex items-center justify-center text-yolk text-lg">
                <FiMapPin />
              </span>
              <div>
                <a
                  href="https://www.google.co.in/maps/place/ROTTU+KADAI/@12.9658334,80.1391523,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smoke text-sm leading-7 hover:text-yolk transition-colors"
                >
                  No. 3, Ramanujam St,<br />
                  Shiva Shankar Nagar,<br />
                  Secretariat Colony,<br />
                  Pallavaram,<br />
                  Chennai – 600043
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 w-11 h-11 rounded-xl bg-yolk/10 border border-yolk/25 flex items-center justify-center text-yolk text-lg">
                <FiPhone />
              </span>
              <div>
                <p className="font-display font-semibold text-white text-sm mb-1">Phone</p>
                <a
                  href="tel:+919566013048"
                  className="text-smoke text-sm hover:text-yolk transition-colors"
                >
                  +91 95660 13048
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 w-11 h-11 rounded-xl bg-yolk/10 border border-yolk/25 flex items-center justify-center text-yolk text-lg">
                <FiClock />
              </span>
              <div>
                <p className="font-display font-semibold text-white text-sm mb-1">Opening Hours</p>
                <p className="text-smoke text-sm leading-relaxed">
                  Mon – Sun: 12:30 PM – 11:45 PM
                  <br />
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rottu%20Kadai%2C%20I%27d%20like%20to%20know%20more!`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] text-ink font-display font-bold px-6 py-3.5 rounded-full hover:brightness-110 transition-all duration-300 active:scale-95"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative rounded-card overflow-hidden border border-ink-border min-h-[320px] bg-ink-card"
          >
            <iframe
              title="Rottu Kadai location map"
              src="https://www.google.com/maps?q=ROTTU+KADAI,+Ramanujam+Street,+Pallavaram,+Chennai&output=embed"
              className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-ink/85 backdrop-blur border border-ink-border rounded-2xl p-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-display font-semibold text-white text-sm">
                  Riyan's Rottu Kadai
                </p>

                <p className="text-smoke text-xs">
                  Ramanujam Street, Pallavaram, Chennai
                </p>
              </div>
              <a
                href="https://www.google.co.in/maps/place/ROTTU+KADAI/@12.9658334,80.1391523,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525f1abcf15115:0xad177cce6b607d69!8m2!3d12.9658334!4d80.1417272!16s%2Fg%2F11h42mpkz6"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-yolk text-xs font-bold uppercase tracking-wide hover:underline"
              >
                Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
