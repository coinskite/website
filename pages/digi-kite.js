import DigiKite from "../comp/DigiKiteHome";
import Footer from "../comp/DigiKiteLayout/Footer";
import Nav from "../comp/DigiKiteLayout/Nav";

function digikite() {
  return (
    <div className="digi-wrapper px-4 sm:px-8 bg-[#050607] text-white">
      <Nav />
      <DigiKite />
      <Footer />
    </div>
  )
}

export default digikite