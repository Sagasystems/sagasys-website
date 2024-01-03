import Image from 'next/image'
import MenuNav from './components/menu'
import MainContent from './components/main'
import Footer from './components/footer'
import ContactForm from './components/contact-form'
import About from './components/about'

export default function Home() {
  return (
    <>
      <MenuNav />
      <MainContent />
      <About />
      <ContactForm />
      <Footer />
    </>
  )
}
