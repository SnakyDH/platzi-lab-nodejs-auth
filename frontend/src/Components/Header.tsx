import Link from 'next/link';
export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-10 bg-indigo-800 py-3">
      <nav className="text-center">
        <ul className="grid grid-cols-2 bg-red-500">
          <li className="col-span-1 bg-red-400">
            <Link href="/">SnakyDH</Link>
          </li>
          <li className="col-span-1">
            <ul className="grid grid-cols-2">
              <li className="bg-green-500 z-30">
                <Link href="/login">Login</Link>
              </li>
              <li className="bg-slate-600">
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
