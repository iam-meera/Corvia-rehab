import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ConditionsPage from './Pages/ConditionsPage'
import ContactPage from './Pages/ContactPage'
import FaqPage from './Pages/FaqPage'
import Home from './Pages/Home'
import ServicesPage from './Pages/ServicesPage'
import TestimonialsPage from './Pages/TestimonialsPage'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
