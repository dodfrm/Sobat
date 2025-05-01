import ClickSpark from './Animations/ClickSpark/ClickSpark';
import './App.css'
import Card from './Component/card';
import FooterSection from './Component/footer';
import Navbar from './Component/Navbar';


function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#8AAEE0"
        sparkSize={15}
        sparkRadius={15}
        sparkCount={8}
        duration={500}
      >
        <Navbar />
        <div id="home" className="h-[100vh] bg-gray-400 p-10">
          <h2 className="mt-20 text-center text-3xl font-bold text-black">
            Scroll untuk melihat efek!
          </h2>
        </div>
        <div id="about" className="bg-black-400 min-h-[100vh] p-10">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-800">
            Our Team
          </h2>
        </div>
        <div
          id="our-team"
          className="flex min-h-screen flex-col items-center justify-center bg-blue-50 px-10 py-20"
        >
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-800">
            Our Team
          </h2>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8">
            <div className="group relative">
              <Card
                name="Titha Nur Izzah"
                title="3SI1"
                photo="/logo.svg"
                socialLinks={{
                  instagram: "https://facebook.com",
                  x: "https://github.com",
                  tiktok: "https://linkedin.com",
                }}
              />
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <div className="group relative">
              <Card
                name="Dodi Firmansyah"
                title="3SI1"
                photo="/dodi.png"
                socialLinks={{
                  instagram: "https://facebook.com",
                  x: "https://github.com",
                  tiktok: "https://linkedin.com",
                }}
              />
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <div className="group relative">
              <Card
                name="Wilfa Afriyani"
                title="3SD1"
                photo="/wilfa.jpg"
                socialLinks={{
                  instagram: "https://facebook.com",
                  x: "https://github.com",
                  tiktok: "https://linkedin.com",
                }}
              />
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
        <FooterSection />
      </ClickSpark>

      <style>{`
                #our-team .group:hover ~ .group .card,
                #our-team .group:has(~ .group:hover) .card {
                  filter: blur(4px);
                  opacity: 0.8;
                  transform: scale(0.98);
                  transition: all 0.4s ease-in-out;
                }
                #our-team .card {
                  transition: all 0.4s ease-in-out;
                }
            `}</style>
    </>
  );
}

export default App
