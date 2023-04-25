import Link from 'next/link';
export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-10 bg-indigo-800 py-3">
      <nav className="text-center">
        <ul className="grid grid-cols-2 font-bold">
          <li className="col-span-1">
            <Link href="/">SnakyDH</Link>
          </li>
          <li className="col-span-1">
            <ul className="grid grid-cols-2">
              <li className="z-30">
                <Link href="/login">Login</Link>
              </li>
              <li className="h-full">
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
