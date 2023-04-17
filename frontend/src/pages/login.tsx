import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Login(): JSX.Element {
  return (
    <div className="grid grid-rows-1 items-center w-screen h-screen">
      <main className="grid place-content-center xl:h-1/2 w-full h-screen">
        <section className="flex bg-white rounded-xl w-full">
          <Image
            className="hidden rounded-s-xl sm:block"
            src="/CodingMe.png"
            alt="Imagen of coding"
            loading="lazy"
            width={400}
            height={500}
          />
          <section className="grid grid-rows-6 text-black w-80">
            <header className="grid xl:rows-span-2 row-span-2 text-center items-center">
              <h1 className="text-4xl font-bold">Log In</h1>
            </header>
            <main className="grid xl:row-span-2 row-span-3 grid-cols-1 grid-rows-4 justify-items-center gap-3">
              <label htmlFor="user">User:</label>
              <input
                className="rounded-md w-1/2 border-2 border-emerald-400"
                type="text"
                id="user"
              />
              <label htmlFor="password">Password:</label>
              <input
                className="p-1 rounded-md w-1/2 border-2 border-emerald-400"
                type="password"
                id="password"
              />
              <button className="py-3 px-5 bg-green-800 text-white rounded-xl">
                Log In
              </button>
            </main>
            <footer className="row-span-1 pt-5 text-center">
              <span>You can register </span>
              <Link
                className="link cursor-pointer text-blue-600"
                href="/signup"
              >
                Sign Up
              </Link>
            </footer>
          </section>
        </section>
      </main>
    </div>
  );
}
