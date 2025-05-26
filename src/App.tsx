import AnimatedContent from "./Animations/AnimatedContent/AnimatedContent";
import ClickSpark from "./Animations/ClickSpark/ClickSpark";
import "./App.css";
import {HeroHeader} from "./Component/Nav";
import FooterSection from "./Component/footer";
import { OurTeam } from "./Component/Team";
import ExpandableSections from "./Component/ExpandableSections";
import { Timeline } from "./Component/Timeline";
import TextReveal from "./Animations/TextAnimations/TextReveal";
import TextReveal2 from "./Animations/TextAnimations/TextReveal2";
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


// Enhanced timeline data with more metrics and stories
const dataTimeline = [
  {
    title: "2022",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repudiandae provident repellendus error qui veritatis vitae cumque
            similique quod beatae vel voluptate consectetur impedit animi,
            tempora officiis placeat dicta adipisci?
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repudiandae provident repellendus error qui veritatis vitae cumque
            similique quod beatae vel voluptate consectetur impedit animi,
            tempora officiis placeat dicta adipisci?
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repudiandae provident repellendus error qui veritatis vitae cumque
            similique quod beatae vel voluptate consectetur impedit animi,
            tempora officiis placeat dicta adipisci?
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2025*",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repudiandae provident repellendus error qui veritatis vitae cumque
            similique quod beatae vel voluptate consectetur impedit animi,
            tempora officiis placeat dicta adipisci?
          </div>
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
          <div className="min-h-svh lg:pt-19 pt-20 lg:px-10 px-3">
            <h2 className="pl-3 lg:pl-15 text-3xl lg:text-5xl font-bold text-black drop-shadow-md">
              <TextReveal2 delay={0.5} duration={1}>
                time line
              </TextReveal2>
            </h2>
            <Timeline data={dataTimeline} />
          </div>

          {/* Section Action */}
          <div
            id="actions"
            className="min-h-svh lg:pt-19 pt-20 lg:px-10 px-3"
          >
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
          <div
            id="our-team"
            className="lg:pt-19 pt-20 lg:px-10 px-3"
          >
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
          <AnimatedContent animateOpacity={false} distance={200} delay={1}>
            <FooterSection />
          </AnimatedContent>
        </div>
      </ClickSpark>
    </>
  );
}

export default App;
