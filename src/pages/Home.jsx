import Hero from '../components/Hero.jsx'
import PopularDishes from '../components/PopularDishes.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Reviews from '../components/Reviews.jsx'
import GalleryPreview from '../components/GalleryPreview.jsx'
import ContactPreview from '../components/ContactPreview.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDishes />
      <WhyChooseUs />
      <Reviews />
      <GalleryPreview />
      <ContactPreview />
    </>
  )
}
