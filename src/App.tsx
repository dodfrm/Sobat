import AnimatedContent from "./Animations/AnimatedContent/AnimatedContent";
import ClickSpark from "./Animations/ClickSpark/ClickSpark";
import FadeContent from "./Animations/FadeContent/FadeContent";
import "./App.css";
import {HeroHeader} from "./Component/Nav";
import { Compare } from "./Component/compare";
import FooterSection from "./Component/footer";
import { OurTeam } from "./Component/Team";

const testimonials = [
  {
    quote:
      "Orang Yang Suka Bermain Badminton dan Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
    name: "Dodi Firmansyah",
    designation: "3SI1-222212572",
    src: "./img/1.jpg",
  },
  {
    quote:
      "Manis kayak gula, tapi nggak bikin diabetes Senyumku siap melelehkan hati yang beku~ Hai semuanya~ aku Wilfaa!",
    name: "Wilfa Afriyani",
    designation: "3SD1-222212915",
    src: "./img/wilfa.jpeg",
  },
  {
    quote:
      "Lembut kayak awan, hangat kayak pelukan~ Halo, aku Titha!",
    name: "Titha Nur Izzah",
    designation: "3SI1-222212898",
    src: "./img/3.jpg",
  },
];
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
        <div className="relative w-full">
          {/* Navbar */}
          <HeroHeader />
          <div className="h-svh lg:pt-19 pt-20 lg:px-10 px-3">
            <div className="overflow-hidden relative rounded-2xl border border-black/10 lg:rounded-4xl h-[calc(100svh-90px)]">
              <img
                src="./img/hero.jpeg"
                alt="hero background"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="relative z-10 flex items-end h-full px-4 pb-8 lg:px-12 lg:pb-16">
                <FadeContent
                  blur={true}
                  duration={600}
                  easing="ease-in-out"
                  initialOpacity={0}
                  delay={200}
                >
                  <div className="text-white max-w-md lg:max-w-xl">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight drop-shadow-md">
                      Selamatkan Laut Kita, <br /> Mulai dari Sekarang.
                    </h1>
                    <p className="mt-4 text-base lg:text-lg text-white/90">
                      Bersama{" "}
                      <span className="text-green-500 font-semibold">
                        Sobat Bumi
                      </span>
                      , kita bisa hentikan jejak plastik di samudera.
                    </p>
                  </div>
                </FadeContent>
              </div>
            </div>
          </div>

          <div
            id="a"
            className="min-h-[100vh] p-10 flex flex-col items-center justify-center relative"
          >
            {/* Background dengan mask */}
            <div className="absolute inset-0 bg-green-200 -z-10 mask-b-from-50%"></div>

            {/* Konten utama */}
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <FadeContent
                blur={true}
                duration={300}
                easing="ease-in-out"
                initialOpacity={0}
                delay={200}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                  Dua Wajah Pantai Kita:
                  <span className="text-blue-600"> Harapan</span> vs.
                  <span className="text-red-600"> Kenyataan</span>
                </h2>
              </FadeContent>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify max-w-3xl mx-auto">
                Setiap tahun,{" "}
                <strong className="font-semibold">8 juta ton plastik</strong>{" "}
                berakhir di lautan. Sampah plastik telah mengubah
                <strong className="font-semibold">
                  {" "}
                  surga pantai menjadi tempat pembuangan
                </strong>{" "}
                dalam hitungan tahun.
              </p>
            </div>
            <AnimatedContent
              direction="vertical"
              distance={100}
              delay={200}
              scale={1}
              config={{ tension: 80, friction: 10 }}
            >
              <Compare
                firstImage="./img/before.png"
                secondImage="./img/after.png"
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="h-[230px] w-[350px] md:h-[400px] md:w-[500px]"
                slideMode="drag"
              />
            </AnimatedContent>
          </div>

          {/* Section About */}
          <div id="about" className="h-[100vh] p-10">
            <h2 className="mb-16 text-center text-4xl font-bold text-gray-800">
              2
            </h2>

            <AnimatedContent direction="horizontal" reverse>
              <p>This content slides in from the left</p>
            </AnimatedContent>
          </div>

          {/* Section Our Team */}
          <div
            id="our-team"
            className="relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-green-200 mask-b-from-60%">
              <div className="absolute opacity-10 top-20 left-10 w-32 h-32 rounded-full bg-green-500 mix-blend-multiply"></div>
              <div className="absolute opacity-10 bottom-20 right-10 w-40 h-40 rounded-full bg-teal-500 mix-blend-multiply"></div>
            </div>

            <FadeContent
              blur={true}
              duration={300}
              easing="ease-in-out"
              initialOpacity={0}
              delay={200}
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                  Tim Kreatif Kami
                </h2>
                <p className="text-lg sm:text-sm md:text-xl lg:text-2xl text-gray-700 font-medium mb-12">
                  Orang-Orang Yang Berada Di Balik Layar
                </p>

                <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
              </div>
            </FadeContent>
            <AnimatedContent
              direction="vertical"
              distance={150}
              delay={200}
              scale={1}
              config={{ tension: 80, friction: 10 }}
            >
              <OurTeam testimonials={testimonials} />
            </AnimatedContent>
          </div>

          {/* Footer */}
          <FooterSection />
        </div>
      </ClickSpark>
    </>
  );
}

export default App;
