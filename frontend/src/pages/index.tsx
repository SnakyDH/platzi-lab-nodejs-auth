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
          <h2 className="text-3xl mb-10 font-bold">About the project:</h2>
          <p className="text-lg mb-3">
            Este proyecto fue la solución planteada por el autor
            <Link href="https:/github.com/SnakyDH"> @SnakyDH</Link>, como solución al proyecto planteado por
            <Link href="https://platzi.com"> @Platzi </Link>en el laboratorio de Node.js Autenticación y Seguridad, esta solución plantea el
            uso de Json Web Tokens, para validar a los usuarios, los cuales estan guardados usando una base de datos MongoDB.
          </p>
          <p className='text-lg'>
            Para el proyecto que estoy desarrollando, he decidido utilizar TailwindCSS y Next.js para la parte visual de la aplicación. 
            TailwindCSS me permitirá diseñar y personalizar los estilos de manera eficiente y rápida, gracias a su extensa biblioteca 
            de clases predefinidas. Además, Next.js me brindará la posibilidad de crear aplicaciones web escalables y optimizadas para 
            SEO, gracias a su capacidad de renderización del lado del servidor.

            En cuanto a la autenticación, he elegido utilizar JWT (JSON Web Tokens) para manejar la autenticación del usuario. Esto me 
            permitirá generar tokens de acceso seguros y eficientes para el usuario, que podrán ser utilizados para acceder a ciertas 
            funcionalidades de la aplicación. JWT también me brinda la posibilidad de transmitir información adicional en el token, como 
            la fecha de expiración, lo que mejorará la seguridad de la aplicación. En resumen, el uso combinado de TailwindCSS, Next.js y 
            JWT me permitirá crear una aplicación web visualmente atractiva, escalable y segura.
          </p>
        </section>
        <section>
          <h2 className="text-3xl mb-10 font-bold">Project technologies:</h2>
          <ul className="grid grid-cols-4">
            {tecnologies.map((tech) => (
              <li
                key={tech.id}
                className="flex flex-col justify-center gap-1 text-center"
              >
                <Image
                  key={tech.id}
                  className="flex self-center hover:animate-bounce"
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
          <h2 className="row-span-1 text-3xl font-bold">Copyright:</h2>
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
          Make it with love ❤ Platzi 💚
        </Link>
      </footer>
    </>
  );
}
