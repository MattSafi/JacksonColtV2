export default function Parallax() {
  return (
    <div>
      {/* Parallax Section */}
      <div className="bg-parallax bg-fixed bg-center pt-10 bg-no-repeat h-screen"></div>

      {/* Content Section */}
      <div className="p-10 md:p-20 bg-black border border-gray-200 rounded-md shadow-lg">
        <h1 className="text-3xl font-extrabold text-white mb-6">
          Welcome to the Jackson Colt Website!
        </h1>
        <p className="text-base text-white leading-relaxed mb-4">
          Jackson Colt channels the raw energy of 80s rock, infusing it with a
          fresh, modern edge. His music celebrates the golden era of
          guitar-driven anthems, combining infectious choruses, soulful riffs,
          and electrifying solos. Drawing inspiration from legendary rock icons,
          Jackson seamlessly merges nostalgic influences with a contemporary
          sound that transcends generations.
        </p>
        <p className="text-base text-white leading-relaxed">
          His musical journey began at the age of nine when he discovered his
          first guitar in a second-hand store. Self-taught and driven, he
          mastered tracks from greats like Creedence Clearwater Revival, The
          Who, and Grand Funk Railroad. Immersed in the powerful sounds of Deep
          Purple, AC/DC, Def Leppard, and Guns N&apos; Roses, Jackson credits
          his family&apos;s support for nurturing his timeless, rock-infused
          style.
        </p>
      </div>

      {/* Another Parallax Section */}
      <div className="bg-parallax bg-fixed bg-center bg-no-repeat h-screen"></div>
    </div>
  );
}
