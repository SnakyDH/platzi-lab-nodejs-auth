import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Inter } from 'next/font/google';
// Commponets
import Header from '../Components/Header';
// Data
import { tecnologies } from '@/data/technologies';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile App - Home</title>
      </Head>
      <Header />
      <h1 className="py-5 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-indigo-800">
        SnakyDH - Sesion and JWT Aplication
      </h1>
      <main className="container mx-auto my-5 flex flex-col gap-10 bg-slate-200 text-black rounded-lg p-5">
        <section>
          <h2 className="text-3xl mb-10">About the project:</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquam expedita rerum, dicta esse ab? Quia placeat iure quos
            aliquid eius tempore, natus accusantium, ipsa vitae nulla aut?
            Recusandae, eligendi? Iste maiores aliquam quasi laborum ut,
            incidunt doloribus voluptatum deleniti, quaerat totam non distinctio
            quis quo qui. Quos vitae totam minus? Voluptate aliquam repellat eos
            assumenda saepe quia veritatis aperiam? Nisi omnis quos eum culpa in
            suscipit nam, corporis accus dicta eos nulla reprehenderit, qui cum
            asperiores suscipit impedit commodi maiores repellendus vero vel
            doloribus doloremque! Unde quidem doloribus sed ipsam. Minus earum
            similique aperiam laboriosam tempore us? Accusamus nostrum
            distinctio unde iure fuga earum at molestiae a. Facere recusandae
            nobis voluptatibus tempora dolores! Voluptatum expedita tenetur
            corrupti itaque mollitia repudiandae esse quos repellat porro nobis
            dicta vel est deleniti
          </p>
        </section>
        <section>
          <h2 className="text-3xl mb-10">Project technologies:</h2>
          <ul className="grid grid-cols-4">
            {tecnologies.map((tech) => (
              <li
                key={tech.id}
                className="flex flex-col justify-center gap-1 text-center"
              >
                <Image
                  key={tech.id}
                  className="flex self-center"
                  width={50}
                  height={50}
                  src={tech.icon}
                  alt="icon of technology"
                />
                {tech.name}
              </li>
            ))}
          </ul>
        </section>
        <section className="grid grid-rows-3">
          <h2 className="row-span-1 text-3xl">Copyright:</h2>
          <div className="grid grid-cols-2 text-center">
            <small className="row-span-1 text-center">
              For images: &copy; Unsplash
            </small>
            <small className="rows-span-1">For icons: &copy; Icons8</small>
          </div>
        </section>
      </main>
      <footer className="bg-indigo-800 text-center py-3">
        <Link className=" cursor-pointer" href="https://github.com/snakydh">
          Make it With love ❤ Platzi 💚
        </Link>
      </footer>
    </>
  );
}
