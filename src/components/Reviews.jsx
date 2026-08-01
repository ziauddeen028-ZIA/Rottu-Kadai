import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const REVIEWS = [
  {
    name: 'Mohamed Asif',
    rating: 5,
    text: 'One of the best Beef Rottu Kadai in Chennai. The Beef Rottu was soft, flavorful, and served piping hot. Definitely coming back!',
    role: 'Google Review',
  },
  {
    name: 'Sathish Kumar',
    rating: 5,
    text: 'The Beef Kothu and Chicken Roll were absolutely delicious. Freshly prepared, generous portions, and excellent value for money.',
    role: 'Regular Customer',
  },
  {
    name: 'Aisha Rahman',
    rating: 5,
    text: 'Loved the authentic street-food taste and the fact that everything is 100% halal. Friendly staff, quick service, and amazing flavors.',
    role: 'Google Review',
  },
]

export default function Reviews() {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-ink">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <span className="text-yolk font-display font-bold tracking-[0.3em] text-xs uppercase">
            Word On The Street
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3">
            What Our Regulars Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-ink-card border border-ink-border rounded-card p-7 hover:-translate-y-1.5 hover:border-yolk/40 transition-all duration-300"
            >
              <span className="absolute -top-4 left-7 text-6xl font-display font-black text-yolk/15 select-none">"</span>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FiStar
                    key={idx}
                    className={idx < r.rating ? 'fill-yolk text-yolk' : 'text-ink-border'}
                    size={16}
                  />
                ))}
              </div>
              <p className="text-white/85 text-sm leading-relaxed mb-6">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-ink-border">
                <div className="w-10 h-10 rounded-full bg-yolk/15 border border-yolk/30 flex items-center justify-center font-display font-bold text-yolk text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">{r.name}</p>
                  <p className="text-smoke text-xs">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
