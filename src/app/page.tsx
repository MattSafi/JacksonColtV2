// src/app/Page.tsx
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Videos from "./components/Videos";

export default function Page() {
  return (
    <div>
      <Header />

      <Navbar />
      <main className="container mx-auto p-4">
        <section id="home" className="my-40">
          <Home />
        </section>
        <section id="about" className="my-40"></section>
        <Videos />
        <section id="contact" className="my-40">
          <ContactUs />
        </section>
        <SocialLinks />
      </main>
    </div>
  );
}
