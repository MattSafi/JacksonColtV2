export default function Parallax() {
  return (
    <div>
      {/* Parallax Section */}
      <div className="bg-parallax bg-fixed bg-center pt-10 bg-no-repeat h-screen"></div>

      {/* Content Section */}
      <div className="p-20 border-4 border-customRed bg-blackBG border-double rounded-lg transition-transform duration-300 ease-in-out hover:md:scale-105">
        <h1 className="text-4xl text-center font-extrabold mb-10">
          Welcome to the Jackson Colt Website!
        </h1>
        <p className="mt-4 text-center text-lg">
          Jackson Colt embodies the spirit of 80s rock with a modern twist. His
          music captures the essence of the golden age of guitar with infectious
          choruses, melodic riffs, and electrifying solos. Influenced by classic
          rock legends, Jackson blends retro vibes with a fresh, contemporary
          sound that resonates across generations.{" "}
        </p>
        <p className="mt-4 text-center text-lg">
          His journey began at age 9 when he picked up his first guitar from a
          second-hand store, learning tracks from icons like Creedence
          Clearwater Revival, The Who, and Grand Funk Railroad. Growing up
          immersed in the sounds of Deep Purple, AC/DC, Def Leppard, and Guns
          N&apos; Roses, Jackson credits his family for shaping his timeless
          rock-inspired style.
        </p>
      </div>

      {/* Another Parallax Section */}
      <div className="bg-parallax bg-fixed bg-center bg-no-repeat h-screen"></div>
    </div>
  );
}