import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav>
          <Link href="/" className="px-4 hover:text-gray-200">Home</Link>
          <Link href="/about" className="px-4 hover:text-gray-200">About</Link>
          <Link href="/contact" className="px-4 hover:text-gray-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
