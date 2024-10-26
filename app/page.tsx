// pages/index.tsx
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] ">
      {/* Navigation Bar */}
      <nav className="bg-[#111853] p-4">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link href="/" className="text-white hover:text-yellow-800">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-yellow-800">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-yellow-800">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-white">Hello, I'm Laiba Muskan</h1>
          <p className="mt-4 text-lg text-yellow-300">A Passionate Developer</p>
          <div className="mt-6">
            <Link href="/about" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition">About Me</Link>
            <Link href="/contact" className="ml-4 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition">Contact</Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-[#111536]">Welcome to my Website!</h2>
        <p className="mt-4 text-gray-800">
          I'm excited to share my journey and projects with you. Feel free to explore my work and get in touch!
        </p>
      </section>

      {/* Profile Section */}
      <section className="text-center p-10">
        <h3 className="text-3xl font-bold mt-4 text-[#111538]">About Me</h3>
        <p className="mt-2 text-gray-800">I specialize in creating efficient and user-friendly web applications.</p>
      </section>

      {/* Recent Activities Section */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-bold text-[#111538]">Recent Activities</h2>
        <ul className="mt-4 max-w-md mx-auto text-left pl-16">
          <li>- Completed a project on responsive design.</li>
          <li>- Attended a workshop on JavaScript frameworks.</li>
          <li>- Contributed to an open-source project.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#111538] p-4 text-center text-white">
        <p>© 2024 Laiba Muskan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
