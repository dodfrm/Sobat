import AnimatedContent from "./Animations/AnimatedContent/AnimatedContent";
import ClickSpark from "./Animations/ClickSpark/ClickSpark";
import FadeContent from "./Animations/FadeContent/FadeContent";
import "./App.css";

import {HeroHeader} from "./Component/Nav";
import FooterSection from "./Component/footer";
import { OurTeam } from "./Component/Team";
import ExpandableSections from "./Component/ExpandableSections";
import { Timeline } from "./Component/Timeline";

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

const dataTimeline = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Global temperatures reached record highs, with July 2024 being the
          hottest month ever recorded. Wildfires ravaged Canada, Greece, and
          Australia, releasing unprecedented amounts of CO2.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1682686580391-615b3f4f56bd?q=80&w=2070&auto=format&fit=crop"
            alt="Wildfires"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1682686580391-615b3f4f56bd?q=80&w=2070&auto=format&fit=crop"
            alt="Melting glaciers"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop"
            alt="Drought"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=1932&auto=format&fit=crop"
            alt="Plastic pollution"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          The year saw catastrophic flooding in Libya (over 11,000 deaths) and
          Pakistan, while the Amazon rainforest experienced its worst drought in
          recorded history, threatening biodiversity.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Ocean temperatures reached record highs, causing mass coral bleaching
          events across the Caribbean and Great Barrier Reef.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1695060452598-d3b8c58bd413?q=80&w=2070&auto=format&fit=crop"
            alt="Libya floods"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1695060452598-d3b8c58bd413?q=80&w=2070&auto=format&fit=crop"
            alt="Amazon drought"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1695060452598-d3b8c58bd413?q=80&w=2070&auto=format&fit=crop"
            alt="Coral bleaching"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1695060452598-d3b8c58bd413?q=80&w=2070&auto=format&fit=crop"
            alt="Deforestation"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020-2022",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Key environmental crises during the pandemic years:
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🔥 Australia's "Black Summer" fires (2019-20) burned 46 million
            acres
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🌊 Great Pacific Garbage Patch grew to 1.6 million km²
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🏭 Global CO2 emissions rebounded sharply post-pandemic lockdowns
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🐝 45% decline in global insect populations since 1970s accelerated
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🌡️ Arctic warmed nearly 4 times faster than global average
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1582123387347-97b27e7b4e0c?q=80&w=2070&auto=format&fit=crop"
            alt="Australian fires"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1582123387347-97b27e7b4e0c?q=80&w=2070&auto=format&fit=crop"
            alt="Plastic pollution"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1582123387347-97b27e7b4e0c?q=80&w=2070&auto=format&fit=crop"
            alt="Melting Arctic"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1582123387347-97b27e7b4e0c?q=80&w=2070&auto=format&fit=crop"
            alt="Deforestation"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
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

          {/* Section Timeline */}
          <div className="relative w-full overflow-clip">
            <Timeline data={dataTimeline} />
          </div>

          {/* Section Action */}
          <div id="actions" className="min-h-svh lg:pt-19 pt-20 lg:px-10 px-3 bg-green-200 ">
            <AnimatedContent direction="vertical">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-green-800">
                  Aksi Kecil, Dampak Besar untuk Planet Kita
                </h2>
                <p className="mt-2 text-base text-gray-700">
                  Mulailah dari hal kecil di sekitar kita untuk menciptakan
                  dampak besar bagi lingkungan.
                </p>
              </div>
            </AnimatedContent>
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
            <AnimatedContent direction="vertical" distance={50}>
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
