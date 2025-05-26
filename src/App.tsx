import AnimatedContent from "./Animations/AnimatedContent/AnimatedContent";
import ClickSpark from "./Animations/ClickSpark/ClickSpark";
import "./App.css";
import {HeroHeader} from "./Component/Nav";
import FooterSection from "./Component/footer";
import { OurTeam } from "./Component/Team";
import ExpandableSections from "./Component/ExpandableSections";
import { Timeline } from "./Component/Timeline";
import TextReveal from "./Animations/TextAnimations/TextReveal";
import AnimatedLine from "./Component/AnimatedLine";
import CombinedTextReveal from "./Animations/TextAnimations/CombinedTextReveal";

const testimonials = [
  {
    quote:
      "Orang Yang Suka Bermain Badminton dan Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
    name: "Dodi Firmansyah",
    designation: "3SI1-222212572",
    src: "./img/dodi.jpeg",
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
    src: "./img/titha.jpeg",
  },
];
const dataTimeline = [
  {
    title: "2022",
    content: (
      <div className="flex items-start text-white">
        <div>
          <TextReveal
            className="mt-2 text-xl text-balance text-white mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Founding Roots
          </TextReveal>
          <CombinedTextReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
            Our journey began with a small team of environmental enthusiasts who
            saw the urgent need for climate action. We started with community
            clean-ups and tree planting initiatives in local neighborhoods,
            engaging over 200 volunteers in our first year.
          </CombinedTextReveal>
          <ul className="mt-3 space-y-2 text-base lg:text-lg">
            <li>🌱 500+ trees planted</li>
            <li>♻️ 3 tons of waste collected</li>
            <li>👥 15 community workshops held</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="flex items-start text-white">
        <div>
          <TextReveal
            className="mt-2 text-xl text-balance text-white mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Expanding Our Reach
          </TextReveal>
          <CombinedTextReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
            We launched our educational program in schools and developed
            partnerships with local businesses to promote sustainable practices.
            Our first major campaign reduced plastic waste in participating
            stores by 40%.
          </CombinedTextReveal>
          <ul className="mt-3 space-y-2 text-base lg:text-lg">
            <li>🏫 Reached 5,000+ students</li>
            <li>🤝 Partnered with 25 local businesses</li>
            <li>📉 Reduced 8 tons of CO2 emissions</li>
            <li>🏆 Won Green Community Award</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex items-start text-white">
        <div>
          <TextReveal
            className="mt-2 text-xl text-balance text-white mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Technological Leap
          </TextReveal>
          <CombinedTextReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
            Developed our first sustainability app that helps users track their
            carbon footprint. Launched large-scale urban farming initiative that
            created 10 community gardens across the city.
          </CombinedTextReveal>
          <ul className="mt-3 space-y-2 text-base lg:text-lg">
            <li>📱 10,000+ app downloads</li>
            <li>🌿 2 acres of urban farmland cultivated</li>
            <li>🍎 1,000+ lbs of organic produce grown</li>
            <li>🌍 Featured in UN Sustainability Report</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2025*",
    content: (
      <div className="flex items-start text-white">
        <div>
          <TextReveal
            className="mt-2 text-xl text-balance text-white mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Global Ambitions
          </TextReveal>

            <CombinedTextReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
              Planning international expansion with pilot programs in 3
              countries. Developing AI-powered tools for climate prediction and
              sustainable agriculture. Goal to impact 1 million people by 2026.
            </CombinedTextReveal>
          <ul className="mt-3 space-y-2 text-base lg:text-lg">
            <li>🌐 First international chapter opening</li>
            <li>🤖 AI sustainability assistant in development</li>
            <li>📚 Comprehensive online education platform</li>
            <li>💡 Renewable energy projects in planning</li>
          </ul>
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
          <div className="">
            <div className="h-svh lg:pt-19 pt-20 lg:px-5 px-1">
              <div className="overflow-hidden relative rounded-2xl border border-black/10 lg:rounded-4xl h-[calc(100svh-90px)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/img/hero-poster.jpeg"
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[45%]"
                  src="/img/hero-video.mp4"
                ></video>
                <div className="relative z-10 flex flex-col justify-end h-full px-4 pt-10 pb-20 lg:px-12 lg:pb-16">
                  <div className="max-w-lg lg:max-w-3xl text-white">
                    <h1 className="text-4xl text-balance lg:text-7xl font-bold leading-tight drop-shadow-md">
                      <TextReveal
                        delay={0.5}
                        duration={1}
                        startTrigger="top bottom"
                        endTrigger="bottom 20%"
                      >
                        A Greener Future. Built by Us.
                      </TextReveal>
                    </h1>
                    <p className="mt-4 font-light text-xl lg:text-xl leading-tight italic drop-shadow-sm">
                      <TextReveal
                        delay={0.5}
                        duration={0.5}
                        startTrigger="top bottom"
                        endTrigger="bottom 20%"
                      >
                        Leading the charge towards a sustainable world for
                        generations to come.
                      </TextReveal>
                    </p>

                    <a
                      href="#actions"
                      className="inline-block mt-8 px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-200 transition duration-300 shadow-lg"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Goal */}
          <div className="lg:pt-19 pt-20 lg:px-10 px-3">
            <AnimatedLine
              color="black"
              thickness={1.5}
              animationDuration={1.5}
              startTrigger="top 90%"
              endTrigger="bottom 10%"
              className="mb-10 mx-2"
            />
            <div className="pl-2 mb-10 flex flex-col lg:flex-row lg:space-x-8">
              <div className="text-start mb-5 lg:mb-0 lg:w-1/3">
                <p className="mt-2 text-xl text-balance text-black mx-auto">
                  <TextReveal startTrigger="top bottom" endTrigger="bottom top">
                    Our Core Purpose
                  </TextReveal>
                </p>
              </div>
              <div className="text-start lg:w-2/3">
                <p className="mt-2 text-3xl lg:text-4xl text-balance text-black mx-auto">
                  <CombinedTextReveal>
                    Our mission is to empower individuals and communities to
                    drive genuine change against climate change. Through
                    education, sustainable action, and advocacy, we aim to
                    cultivate a healthier planet, ensuring a vibrant future for
                    everyone.
                  </CombinedTextReveal>
                </p>
              </div>
            </div>
          </div>

          {/* Section Timeline */}
          <div className="min-h-svh py-20 lg:py-28 px-4 lg:px-16 bg-black rounded-3xl mx-1 lg:mx-3">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 lg:mb-20 text-center">
                  <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                    SOBUM <span className="text-green-400">Journey</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                    Tracing our path from humble beginnings to making a global
                    impact
                  </p>
              </div>

              <div className="relative">
                {/* Animated decorative element */}
                <div className="absolute -top-10 left-0 w-full flex justify-center">
                  <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                </div>
                <Timeline data={dataTimeline} />
              </div>
            </div>
          </div>

          {/* Section Action */}
          <div id="actions" className="min-h-svh lg:pt-19 pt-20 lg:px-10 px-3">
            <div className="pl-2 mb-10 flex flex-col lg:flex-row lg:space-x-8">
              <div className="text-start mb-5 lg:mb-0 lg:w-1/3">
                <p className="mt-2 text-xl text-balance text-black mx-auto">
                  <TextReveal startTrigger="top bottom" endTrigger="bottom top">
                    Take an action
                  </TextReveal>
                </p>
              </div>
              <div className="text-start lg:w-2/3">
                <p className="mt-2 text-3xl lg:text-4xl text-balance text-black mx-auto">
                  <CombinedTextReveal>
                    Real change begins with everyday actions. By rethinking how
                    we live, consume, and care for nature, we each hold the
                    power to shape a healthier, more sustainable world—one step
                    at a time.
                  </CombinedTextReveal>
                </p>
              </div>
            </div>
            <ExpandableSections />
          </div>

          {/* Section Our Team */}
          <div id="our-team" className="lg:pt-19 pt-20 lg:px-10 px-3">
            <AnimatedLine
              color="black"
              thickness={2}
              animationDuration={1.5}
              startTrigger="top 90%"
              endTrigger="bottom 10%"
              className="mb-10 mx-2"
            />
            <div className="pl-2 mb-10 py-10 flex flex-col lg:flex-row lg:space-x-8">
              <div className="text-start mb-5 pl-3 lg:mb-0 lg:w-1/3">
                <p className="mt-2 text-xl text-balance text-black mx-auto">
                  <TextReveal startTrigger="top bottom" endTrigger="bottom top">
                    Our Team
                  </TextReveal>
                </p>
              </div>
              <div className="text-start lg:w-2/3">
                <AnimatedContent direction="vertical" distance={50} delay={0.3}>
                  <OurTeam testimonials={testimonials} />
                </AnimatedContent>
              </div>
            </div>
          </div>
          {/* Footer */}
          {/* <AnimatedContent animateOpacity={false} distance={200} delay={1}> */}
          <FooterSection />
          {/* </AnimatedContent> */}
        </div>
      </ClickSpark>
    </>
  );
}

export default App;
