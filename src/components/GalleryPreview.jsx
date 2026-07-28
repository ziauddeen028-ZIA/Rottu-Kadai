import { motion } from 'framer-motion'
import { FiImage, FiArrowRight } from 'react-icons/fi'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80', span: 'sm:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80', span: 'sm:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80', span: '' },
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
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 bg-yolk text-ink font-display font-bold px-6 py-3 rounded-full hover:bg-white transition-colors duration-300 w-fit"
          >
            <FiImage /> View Gallery <FiArrowRight />
          </a>
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
