import { motion } from 'framer-motion'
import { FiImage, FiArrowRight } from 'react-icons/fi'
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.png";

const IMAGES = [

  { src: img10 },
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },


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

        <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[300px] gap-3 sm:gap-4">
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
                className="w-full h-full object-cover brightness-90 contrast-110 saturate-110 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500" />

              {/* Gold Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-yellow-500/5 opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
