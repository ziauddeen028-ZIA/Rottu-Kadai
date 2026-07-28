import { motion } from 'framer-motion'
import { GiChefToque, GiHotMeal } from 'react-icons/gi'
import { FiZap, FiTag } from 'react-icons/fi'

const FEATURES = [
  {
    icon: GiChefToque,
    title: 'Fresh Ingredients',
    desc: 'Sourced daily from local Chennai markets — nothing pre-frozen, nothing stale.',
  },
  {
    icon: FiZap,
    title: 'Fast Service',
    desc: 'Your order hits the tawa the moment it is placed. Ready in minutes, not forever.',
  },
  {
    icon: FiTag,
    title: 'Affordable Price',
    desc: 'Street-food pricing with restaurant-level quality. Full flavour, fair bill.',
  },
  {
    icon: GiHotMeal,
    title: 'Great Taste',
    desc: 'Family recipes passed down and perfected — the taste people come back for.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-ink-card/40 border-y border-ink-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <span className="text-yolk font-display font-bold tracking-[0.3em] text-xs uppercase">
            Why Rottu Kadai
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3">
            Built On Four Promises
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-ink-card border border-ink-border rounded-card p-7 hover:border-yolk/50 hover:shadow-glow-sm transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-yolk/10 border border-yolk/25 flex items-center justify-center text-yolk text-2xl mb-5 group-hover:bg-yolk group-hover:text-ink group-hover:rotate-6 transition-all duration-300">
                <f.icon />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-smoke text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
