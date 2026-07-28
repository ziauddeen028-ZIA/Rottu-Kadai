import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import PagePlaceholder from './pages/PagePlaceholder.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={<PagePlaceholder title="Full Menu" subtitle="The complete Rottu Kadai menu is being plated up." />}
          />
          <Route
            path="/gallery"
            element={<PagePlaceholder title="Gallery" subtitle="More sizzling shots coming soon." />}
          />
          <Route
            path="/about"
            element={<PagePlaceholder title="About Us" subtitle="Our story, from tawa to table." />}
          />
          <Route
            path="/contact"
            element={<PagePlaceholder title="Contact" subtitle="We'd love to hear from you." />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
