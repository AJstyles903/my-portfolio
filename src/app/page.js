import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <>
      <main className="w-full max-w-screen-xl p-2 mx-auto">
        <div className="mt-14">
          <Header />
          <Contacts />
          <About />
          <Skills />
          <Reviews />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home