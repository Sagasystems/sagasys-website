import Image from 'next/image'
import MenuNav from './components/menu'
import MainContent from './components/main'
import Footer from './components/footer'
import ContactForm from './components/contact-form'

export default function Home() {
  return (
    <>
      <MenuNav />
      <MainContent />
      <ContactForm />
      <Footer />
    </>
  )
}
