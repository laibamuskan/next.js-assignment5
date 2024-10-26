// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#6C5B7E] p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/" className="text-white hover:text-blue-700">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-blue-700">About</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-blue-700">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
