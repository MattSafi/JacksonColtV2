import StarryBackground from "./StarryBackground";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center bg-black">
      <StarryBackground />

      <div className="absolute z-10 text-center">
        <Image
          src="/JC-Logo.png"
          alt="Website Logo"
          width={300}
          height={300}
          className="z-10"
        />
      </div>
    </header>
  );
}
