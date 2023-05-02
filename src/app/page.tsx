import { Form } from '@/components/Form'
import { KVViewContacts } from '@/components/KVViewContacts'
// import { Form } from '@/components/PostgreForm'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex flex-col min-h-screen p-24`}>
      <h2 className='mb-12 text-4xl font-bold tracking-tight text-center'>Contacta conmigo</h2>

      <div className='flex flex-col max-w-2xl mx-auto text-center'>
        <Form />

        <KVViewContacts />
      </div>

    </main>
  )
}
