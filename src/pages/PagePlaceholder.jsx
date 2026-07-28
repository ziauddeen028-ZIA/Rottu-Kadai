import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function PagePlaceholder({ title, subtitle }) {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-32">
      <span className="text-yolk font-display font-bold tracking-[0.3em] text-xs uppercase mb-4">
        Rottu Kadai
      </span>
      <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">{title}</h1>
      <p className="text-smoke max-w-md mb-8">{subtitle}</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-yolk text-ink font-display font-bold px-6 py-3 rounded-full hover:bg-yolk-dark transition-colors"
      >
        <FiArrowLeft /> Back to Home
      </Link>
    </section>
  )
}
