import Image from 'next/image'
import MenuNav from './components/menu'
import MainContent from './components/main'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <MenuNav />
      <MainContent />
      <Footer />
    </>
  )
}
