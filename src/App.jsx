import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './pages/About'
import Clients from './pages/Clients'
import Main from './components/Main'
import Testimonials from './components/Testimonials'
import Logo from './components/Logo'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Features />
            <Main />
            <Testimonials />
            <Logo />
            <CTA />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/clients"
        element={
          <>
            <Navbar />
            <Clients />
            <Footer />
          </>
        }
      />
    </Routes>
  )
}

export default App
