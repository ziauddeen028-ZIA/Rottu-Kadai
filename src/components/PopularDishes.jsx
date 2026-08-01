import { motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
const DISHES = [
  {
    name: "Beef Fried Rice",
    desc: "Delicious beef fried rice made fresh with our special seasoning.",
    price: "₹150",
    img: "https://i.pinimg.com/736x/e3/e6/9b/e3e69bc7cff447a430913b1fc2a388c0.jpg",
  },
  {
    name: "Chicken Fried Rice",
    desc: "Aromatic fried rice prepared with tender chicken, fresh vegetables and house special sauces.",
    price: "₹150",
    img: "https://i.pinimg.com/1200x/da/ab/58/daab58e2f73abf9c9fef0dbdfbd5009c.jpg",
  },
  {
    name: "Tandoori Chicken",
    desc: "Fresh chicken marinated with authentic spices and grilled to perfection in tandoor style.",
    price: "₹120",
    img: "https://i.pinimg.com/1200x/dd/8e/0d/dd8e0d821ed439f0aecb3574c9709dee.jpg",
  },
  {
    name: "Chicken Shawarma",
    desc: "Soft pita filled with juicy chicken, fresh vegetables and creamy garlic mayonnaise.",
    price: "₹90",
    img: "https://i.pinimg.com/736x/c4/10/06/c41006049b919e5dbbdbb2e972839e5f.jpg",
  },
  {
    name: "Beef Sheekh Kabab",
    desc: "Minced beef blended with herbs and spices, grilled over an open flame until smoky and juicy.",
    price: "₹100",
    img: "https://i.pinimg.com/1200x/bb/2c/86/bb2c864bb41ee2602b02b58a06b9d9ef.jpg",
  },
  {
    name: "Chilli Chicken",
    desc: "Crispy chicken tossed with onions, capsicum and spicy Indo-Chinese chilli sauce.",
    price: "₹200",
    img: "https://i.pinimg.com/736x/6a/3d/c4/6a3dc4c03b2c0f5f7760471434390a84.jpg",
  },
];

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
              <div className="relative h-60 overflow-hidden ">
                <img
                  src={dish.img}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />


              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-lg text-white">{dish.name}</h3>
                  <span className="shrink-0 font-display font-extrabold text-yolk text-lg">{dish.price}</span>
                </div>
                <p className="text-smoke text-sm mt-2 leading-relaxed">{dish.desc}</p>


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
