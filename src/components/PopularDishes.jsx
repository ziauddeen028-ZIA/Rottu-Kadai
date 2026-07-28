import { motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

const DISHES = [
  {
    name: 'Kothu Roll',
    desc: 'Shredded parotta wok-tossed with egg, spice masala & fresh curry leaves.',
    price: '₹120',
    img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=700&q=80',
    tag: 'Bestseller',
  },
  {
    name: 'Chicken 65 Burger',
    desc: 'Crispy chicken 65 patty, mint mayo & pickled onion in a toasted bun.',
    price: '₹149',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    tag: 'Spicy',
  },
  {
    name: 'Madras Masala Fries',
    desc: 'Crunchy fries tossed in our house masala, chilli flakes & lime.',
    price: '₹89',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80',
    tag: 'Veg',
  },
  {
    name: 'Egg Rottu Wrap',
    desc: 'Flaky rotti rolled with spiced egg bhurji, onions & chutney.',
    price: '₹99',
    img: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80',
    tag: 'Popular',
  },
  {
    name: 'Loaded Cheese Dosa Roll',
    desc: 'Crisp dosa stuffed with cheese, veggies & spicy schezwan.',
    price: '₹135',
    img: 'https://images.unsplash.com/photo-1630383249896-433837b93555?auto=format&fit=crop&w=700&q=80',
    tag: 'Veg',
  },
  {
    name: 'Chilli Chicken Box',
    desc: 'Indo-Chinese chilli chicken, fried rice & a side of tangy sauce.',
    price: '₹175',
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80',
    tag: 'Spicy',
  },
]

export default function PopularDishes() {
  return (
    <section id="menu" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-ink">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <span className="text-yolk font-display font-bold tracking-[0.3em] text-xs uppercase">
            From The Tawa
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3">
            Popular Dishes
          </h2>
          <p className="text-smoke mt-4">
            The six dishes our regulars order on repeat — made to order, every single time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {DISHES.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative bg-ink-card border border-ink-border rounded-card overflow-hidden hover:border-yolk/40 hover:-translate-y-2 transition-all duration-300 shadow-soft"
            >
              <div className="relative h-52 overflow-hidden plate-edge">
                <img
                  src={dish.img}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-card via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-ink/80 backdrop-blur text-yolk text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-yolk/30">
                  {dish.tag}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-lg text-white">{dish.name}</h3>
                  <span className="shrink-0 font-display font-extrabold text-yolk text-lg">{dish.price}</span>
                </div>
                <p className="text-smoke text-sm mt-2 leading-relaxed">{dish.desc}</p>

                <button className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-yolk transition-colors">
                  <span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-yolk flex items-center justify-center group-hover:rotate-90 transition-all duration-300">
                    <FiPlus size={14} />
                  </span>
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 border-2 border-yolk text-yolk font-display font-bold px-8 py-3.5 rounded-full hover:bg-yolk hover:text-ink transition-all duration-300"
          >
            See Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
