import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Signup(): JSX.Element {
  return (
    <div className="grid grid-rows-1 items-center w-screen h-screen">
      <main className="grid place-content-center xl:h-1/2 w-full h-screen">
        <section className="flex bg-white rounded-xl w-full">
          <Image
            className="hidden rounded-s-xl sm:block"
            src="/CodingJS.png"
            alt="Imagen of a programmer"
            loading="lazy"
            width={400}
            height={500}
          />
          <section className="grid grid-rows-5 text-black w-80">
            <header className="grid  row-span-1 text-center items-center">
              <h1 className="text-4xl font-bold">Sign Up</h1>
            </header>
            <main className="grid row-span-3 grid-cols-1 grid-rows-5 justify-items-center gap-3">
              <label htmlFor="user">User:</label>
              <input
                className="rounded-md w-1/2 border-2 border-violet-400"
                type="text"
                id="user"
              />
              <label htmlFor="password">Password:</label>
              <input
                className="p-1 rounded-md w-1/2 border-2 border-violet-400"
                type="password"
                id="password"
              />
              <label htmlFor="password">Password Again:</label>
              <input
                className="p-1 rounded-md w-1/2 border-2 border-violet-400"
                type="password"
                id="password"
              />
              <button className="py-3 px-5 bg-violet-600 text-white rounded-xl">
                Sign Up
              </button>
            </main>
            <footer className="row-span-1 pt-5 text-center">
              <span>You can </span>
              <Link className="link cursor-pointer text-blue-600" href="/login">
                Log In
              </Link>
            </footer>
          </section>
        </section>
      </main>
    </div>
  );
}
