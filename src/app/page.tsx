import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 p-24">
      <Image 
        src="/assets/images/sagasys-logo.svg"
        alt='Logo'
        width={200}
        height={200}
        className='rounded-lg'
      />
      <h1 className='text-3xl'>Em construção</h1>
    </main>
  )
}
