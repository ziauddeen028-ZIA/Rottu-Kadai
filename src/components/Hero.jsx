import { motion } from 'framer-motion'
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'

const MARQUEE_WORDS = ['SIZZLING HOT', 'STREET-STYLE', 'FRESH DAILY', 'ROTTU KADAI', 'BOLD FLAVOUR', 'FAST SERVED']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col overflow-hidden pt-8 sm:pt-0">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yolk/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 grain" />

      <div className="flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center py-10 sm:py-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 bg-ink-card border border-ink-border text-yolk text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yolk animate-pulse" />
            Chennai's Own Roadside Flavour
          </span>

          <h1 className="font-display font-black leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-white">
            EAT LIKE
            <br />
            <span className="text-yolk">THE STREET</span>
            <br />
            KNOWS BEST
          </h1>

          <p className="mt-6 text-smoke text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            ROTTU KADAI brings the tawa straight to your table — hot rottis,
            loaded rolls and fast-food favourites, made fresh, served fast,
            priced fair. No shortcuts, just full flavour.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yolk text-ink font-display font-bold px-7 py-3.5 rounded-full hover:bg-white hover:shadow-glow transition-all duration-300 active:scale-95"
            >
              View Menu <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/15 text-white font-display font-bold px-7 py-3.5 rounded-full hover:border-yolk hover:text-yolk transition-all duration-300 active:scale-95"
            >
              <FiPhoneCall /> Contact Us
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start">
            {[
              ['4.8★', 'Google Rating'],
              ['12K+', 'Happy Regulars'],
              ['09+', 'Years Running'],
            ].map(([n, l]) => (
              <div key={l} className="text-center lg:text-left">
                <p className="font-display font-extrabold text-2xl text-white">{n}</p>
                <p className="text-xs text-smoke mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 lg:order-2 relative flex items-center justify-center"
        >
          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] bg-yolk rounded-full blur-3xl opacity-20" />

          <div className="relative w-72 h-72 sm:w-[420px] sm:h-[420px] animate-float">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-yolk/30 animate-spin-slow" />
            <img
              src="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=900&q=80"
              alt="Signature loaded roll from ROTTU KADAI"
              className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full border-4 border-ink-card shadow-soft"
            />
            {/* steam */}
            <span className="absolute top-2 left-1/2 -translate-x-6 w-4 h-16 bg-white/40 rounded-full blur-md animate-steam" />
            <span className="absolute top-2 left-1/2 translate-x-2 w-4 h-16 bg-white/30 rounded-full blur-md animate-steam [animation-delay:0.8s]" />

            {/* chalkboard tag */}
            <div className="absolute -left-4 sm:-left-8 bottom-6 sm:bottom-10 bg-ink-card border border-ink-border rounded-2xl px-4 py-3 shadow-soft -rotate-6">
              <p className="text-[10px] text-smoke uppercase tracking-widest">Today's Special</p>
              <p className="font-display font-bold text-yolk text-sm">Kothu Roll ₹120</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y border-ink-border bg-ink-card/60 py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 font-display font-bold text-sm tracking-widest text-white/40">
              {w}
              <span className="text-yolk">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
