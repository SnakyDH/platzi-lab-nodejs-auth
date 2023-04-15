import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Login():JSX.Element {
  return (
    <div className='grid grid-rows-1 place-content-center items-center w-screen h-screen'>
      <main className="h-1/2 w-full ">
        <section className='flex bg-white rounded-xl'>
          <Image
            className='hidden rounded-s-xl sm:block'
            src='/CodingMe.png'
            alt='Holi'
            loading='lazy'
            width={300}
            height={400}
          />
        <section className='grid grid-rows-3 gap-3 text-black'>
          <header className='grid text-center pt-8 items-center'>
            <h1 className='text-4xl font-bold'>Log In</h1>
          </header>
          <main className='grid grid-cols-1 grid-rows-4 justify-items-center gap-1'>
            <label htmlFor="user">
              User:
            </label>
            <input className="rounded-md w-1/2 border-2 border-emerald-400" type="text" id="user" />
            <label htmlFor="password">
              Password:
            </label>
              <input className="rounded-md w-1/2 border-2 border-emerald-400"type="password" id="password" />
          </main>
          <footer className='py-5 text-center items-end'>
            <span>You can register </span>
            <Link
            className='link cursor-pointer text-blue-600'
            href='/signup'
            >
            Sign Up
            </Link>
          </footer>
        </section>
      </section>
    </main>
  </div>
  )
}
