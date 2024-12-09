// src/app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-red-800/80 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image
              src="/JC-Logo.png"
              alt="Website Logo"
              width={55}
              height={55}
              className="z-10"
            />
          </div>
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="#home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-300">
              Videos
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
