import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function App() {
  return (
    <>
      <div className="font-sans">
        <Parallax
          pages={2}
          style={{ width: "100%", height: "100%" }}
          className="z-1 relative d-block"
        >
          {/* Background image */}
          <ParallaxLayer offset={0} speed={0.7}>
            <img
              src="./img/hero-bg.jpg"
              alt="background"
              className="w-full h-screen object-cover"
            />
          </ParallaxLayer>

          {/* Penyu - positioned right */}
          <ParallaxLayer offset={0} speed={0.4}>
            <div className="absolute right-4 md:right-10 bottom-1/4 md:bottom-1/2 transform translate-y-1/2 w-1/2 md:w-1/4">
              <img src="./img/12.png" alt="penyu" className="w-full" />
            </div>
          </ParallaxLayer>

          {/* sampah */}
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="absolute left-4 md:left-10 bottom-1/3 md:bottom-1/2 transform translate-y-1/2 w-1/2 md:w-1/4">
              <img src="./img/13.png" alt="sampah" className="w-2/3" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="absolute left-4 md:hidden top-1/7 transform translate-y-1/2 w-1/2">
              <img src="./img/sf.png" alt="sampah" className="w-2/3" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="absolute top-36 md:top-10 left-5/6 md:left-3/4 transform -translate-x-1/2 w-1/2 md:w-1/4">
              <img src="./img/botol.png" alt="sampah" className="w-1/2" />
            </div>
          </ParallaxLayer>

          {/* Ikan - positioned center bottom */}
          <ParallaxLayer offset={0} speed={0.45}>
            <div className="absolute top-1 left-0 w-1/2 md:w-1/4">
              <img src="./img/14.png" alt="ikan" className="w-full" />
            </div>
          </ParallaxLayer>

          {/* Coral - positioned bottom */}
          <ParallaxLayer offset={0} speed={0.7}>
            <div className="absolute bottom-0">
              <img
                src="./img/coral.png"
                alt="coral"
                className="w-full object-cover"
              />
            </div>
          </ParallaxLayer>

          {/* Hero Text Section */}
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="absolute z-0 inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-blue-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                Selamatkan Laut Kita
              </h1>
              <p className="mt-4 text-blue-300 text-base sm:text-lg md:text-xl max-w-xl drop-shadow-md">
                Bergabunglah dalam misi mengurangi sampah plastik dan menjaga
                ekosistem laut untuk generasi masa depan.
              </p>
            </div>
          </ParallaxLayer>

          {/* Section A */}
          <ParallaxLayer offset={0.9999999} speed={0.7}>
            <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#f9e1c2]">
              <p>Section A</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
