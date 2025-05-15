import AnimatedContent from "./Animations/AnimatedContent/AnimatedContent";
import ClickSpark from "./Animations/ClickSpark/ClickSpark";
import FadeContent from "./Animations/FadeContent/FadeContent";
import "./App.css";
import {HeroHeader} from "./Component/Nav";
import FooterSection from "./Component/footer";
import { OurTeam } from "./Component/Team";
import ExpandableSections from "./Component/ExpandableSections";

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
          <div className="bg-[#EDFFEC]">
            <div className="h-svh lg:pt-19 pt-20 lg:px-10 px-3">
              <div className="overflow-hidden relative rounded-2xl border border-black/10 lg:rounded-4xl h-[calc(100svh-90px)]">
                <img
                  src="./img/hero.jpeg"
                  alt="hero background"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="relative z-10 flex items-start h-full px-4 pt-10 pb-8 lg:px-12 lg:pb-16">
                  <AnimatedContent direction="horizontal" reverse>
                    <div className="max-w-md lg:max-w-xl text-[#033009] ">
                      <h1 className="text-3xl text-balance lg:text-5xl font-bold leading-tight drop-shadow-md">
                        Selamatkan Bumi Untuk Generasi Mendatang
                      </h1>
                    </div>
                  </AnimatedContent>
                </div>
                <AnimatedContent direction="horizontal">
                  <div className="absolute bottom-10 right-4 lg:right-12 z-10 text-[#033009] text-3xl lg:text-5xl font-bold leading-tight drop-shadow-md text-right">
                    Jadilah Sobat Bumi
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>

          {/* Section About */}
          <div id="about" className="h-svh lg:pt-19 pt-20 lg:px-10 px-3">
            <ExpandableSections />
          </div>

          {/* Section Our Team */}
          <div
            id="our-team"
            className="relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-green-200 mask-b-from-60%"></div>

            <FadeContent
              blur={true}
              duration={300}
              easing="ease-in-out"
              initialOpacity={0}
              delay={200}
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="mb-6 text-3xl text-balance lg:text-5xl font-bold leading-tight drop-shadow-md">
                  Tim Kami
                </h2>
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
