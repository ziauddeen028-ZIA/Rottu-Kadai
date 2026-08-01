import { motion } from 'framer-motion'
import { FiImage, FiArrowRight } from 'react-icons/fi'

const IMAGES = [
  
  { src: 'https://i.pinimg.com/1200x/da/ab/58/daab58e2f73abf9c9fef0dbdfbd5009c.jpg',  },
  { src: 'https://i.pinimg.com/1200x/dd/8e/0d/dd8e0d821ed439f0aecb3574c9709dee.jpg', },
  { src: 'https://i.pinimg.com/736x/c4/10/06/c41006049b919e5dbbdbb2e972839e5f.jpg', },
  { src: 'https://i.pinimg.com/736x/e3/e6/9b/e3e69bc7cff447a430913b1fc2a388c0.jpg',  },
  { src: 'https://i.pinimg.com/1200x/bb/2c/86/bb2c864bb41ee2602b02b58a06b9d9ef.jpg',  },
  { src: 'https://i.pinimg.com/736x/6a/3d/c4/6a3dc4c03b2c0f5f7760471434390a84.jpg',  },
]

export default function GalleryPreview() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-ink-card/40 border-y border-ink-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-yolk font-display font-bold tracking-[0.3em] text-xs uppercase">
              Inside The Kadai
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-3">
              Gallery
            </h2>
          </div>

        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[140px] sm:auto-rows-[160px] gap-3 sm:gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt="Rottu Kadai food gallery"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
