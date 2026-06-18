import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Statistics from '../components/Statistics'
import Government from '../components/Government'
import News from '../components/News'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Government />
      <News />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </>
  )
}

export default Home