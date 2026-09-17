import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
