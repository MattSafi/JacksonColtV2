// src/app/components/SocialLinks.tsx
import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="button-container text-center my-8">
      <p className="mb-4 text-lg font-medium">Follow Us!</p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://open.spotify.com/artist/3gIIWO1zON6oNM0MSWUeJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button hover:scale-110 ease-in-out duration-300"
        >
          <Image src="/spotify.svg" alt="spotify" width={40} height={40} />
        </a>

        <a
          href="https://www.facebook.com/JacksonColtRock/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button hover:scale-110 ease-in-out duration-300"
        >
          <Image
            src="/facebook-logo.png"
            alt="facebook"
            width={40}
            height={40}
          />
        </a>

        <a
          href="https://www.instagram.com/jacksoncoltrock/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button hover:scale-110 ease-in-out duration-300"
        >
          <Image src="/instagram.png" alt="instagram" width={40} height={40} />
        </a>

        <a
          href="https://linktr.ee/jacksoncoltrock"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button hover:scale-110 ease-in-out duration-300"
        >
          <Image src="/linktree.png" alt="linktree" width={40} height={40} />
        </a>

        <a
          href="https://www.youtube.com/@JacksonColt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button hover:scale-110 ease-in-out duration-300"
        >
          <Image src="/Youtube_logo.png" alt="youtube" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
