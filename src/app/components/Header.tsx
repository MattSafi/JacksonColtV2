import StarryBackground from "./StarryBackground";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-64 flex items-center justify-center bg-black text-white">
      <StarryBackground />

      <div className="absolute z-10 text-center hover:scale-110 ease-in-out duration-300">
        <Image
          src="/JC-Logo.png"
          alt="Website Logo"
          width={240}
          height={240}
          className="z-10"
        />
      </div>
    </header>
  );
}
