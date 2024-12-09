export default function Videos() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-10">
        Have You Seen Jackson Colt's Videos?
      </h2>
      <p className="flex direction-row place-content-evenly gap-20 mt-4 text-lg text-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KPbFXbEbOEI?si=B33vW0mFKUZBS0v3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/N3NafJh5Y54?si=mLjlH7f4eC1_hL5g"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Lhs9vKqv118?si=gdoLHY6hLiAWwqhZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </p>
    </>
  );
}
