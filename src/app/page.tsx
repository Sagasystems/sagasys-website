import Image from 'next/image'
import MenuNav from './components/menu'
import MainContent from './components/main'

export default function Home() {
  return (
    <>
      <MenuNav />
      <MainContent />
    </>
  )
}
