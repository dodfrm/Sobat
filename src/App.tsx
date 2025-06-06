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
import Collapsible from "./Component/Collapsible";
import ScrollReveal from "./Animations/TextAnimations/ScrollReveal";
import LogoCloud from "./components/logo-cloud";
import { Carousel, CarouselContent, CarouselItem } from "./components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import testimonials from "./data/teamData";
import newsItems from "./data/newsData";

const dataTimeline = [
  {
    title: "2022",
    content: (
      <div className="flex items-start text-white">
        <div>
          <TextReveal
            className="mt-2 text-xl text-balance text-green-400 mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Founding Roots
          </TextReveal>
          <ScrollReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
            Our journey began with a small team of environmental enthusiasts who
            saw the urgent need for climate action. We started with community
            clean-ups and tree planting initiatives in local neighborhoods,
            engaging over 200 volunteers in our first year.
          </ScrollReveal>
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
            className="mt-2 text-xl text-balance text-green-400 mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Expanding Our Reach
          </TextReveal>
          <ScrollReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
            We launched our educational program in schools and developed
            partnerships with local businesses to promote sustainable practices.
            Our first major campaign reduced plastic waste in participating
            stores by 40%.
          </ScrollReveal>
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
            className="mt-2 text-xl text-balance text-green-400 mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Project Milestones
          </TextReveal>
          <ScrollReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
            Our urban gardening initiative provided fresh produce to 150
            families while greening city spaces. We also completed a major waste
            management pilot program in two districts, diverting 3 tons of waste
            from landfills monthly and promoting circular economy principles.
          </ScrollReveal>
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
            className="mt-2 text-xl text-balance text-green-400 mx-auto"
            startTrigger="top bottom"
            endTrigger="bottom top"
          >
            Global Ambitions
          </TextReveal>

          <ScrollReveal className="mt-2 text-2xl lg:text-4xl text-balance text-white mx-auto">
            Planning international expansion with pilot programs in 3 countries.
            Developing AI-powered tools for climate prediction and sustainable
            agriculture. Goal to impact 1 million people by 2026.
          </ScrollReveal>
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
          {/* Hero Section */}
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
                        delay={2}
                        duration={1}
                        startTrigger="top bottom"
                        endTrigger="bottom 20%"
                      >
                        A Greener Future. Built by Us.
                      </TextReveal>
                    </h1>
                    <p className="mt-4 font-light text-xl lg:text-xl leading-tight italic drop-shadow-sm">
                      <TextReveal
                        delay={2}
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
            <div className="pl-2 mb-20 flex flex-col lg:flex-row lg:space-x-8">
              <div className="text-start mb-5 lg:mb-0 lg:w-1/3">
                <p className="mt-2 text-xl text-balance text-black mx-auto">
                  <TextReveal startTrigger="top bottom" endTrigger="bottom top">
                    Our Core Purpose
                  </TextReveal>
                </p>
              </div>
              <div className="text-start lg:w-2/3">
                <p className="mt-2 text-3xl lg:text-4xl text-balance text-black mx-auto">
                  <ScrollReveal>
                    Our mission is to empower individuals and communities to
                    drive genuine change against climate change. Through
                    education, sustainable action, and advocacy, we aim to
                    cultivate a healthier planet, ensuring a vibrant future for
                    everyone.
                  </ScrollReveal>
                </p>
              </div>
            </div>
          </div>

          {/* Section Timeline */}
          <div
            id="journey"
            className="min-h-svh mt-30 py-20 lg:py-10 px-4 lg:px-16 bg-black rounded-3xl mx-1 lg:mx-3"
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                  <img
                    src="/logo.svg"
                    className="lg:h-20 h-13 mb-2 lg:mb-4 inline"
                  />{" "}
                  <span className="text-white">Journey</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                  Tracing our path from humble beginnings to making a global
                  impact
                </p>
              </div>

              <div className="relative">
                <AnimatedLine
                  color="white"
                  thickness={2}
                  animationDuration={1.5}
                  className="absolute left-1/2 top-0 h-full transform -translate-x-1/2"
                />
                <Timeline data={dataTimeline} />
              </div>
            </div>
          </div>

          {/* Section Action */}
          <div
            id="actions"
            className="min-h-svh lg:pt-19 pt-20 lg:mb-20 mb-10 lg:px-10 px-3"
          >
            <AnimatedLine
              color="black"
              thickness={2}
              animationDuration={1.5}
              className="mx-2 mb-10"
            />
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
                  <ScrollReveal>
                    Real change begins with everyday actions. By rethinking how
                    we live, consume, and care for nature, we each hold the
                    power to shape a healthier, more sustainable world—one step
                    at a time.
                  </ScrollReveal>
                </p>
              </div>
            </div>
            <ExpandableSections />
          </div>

          {/* Section sponsor */}
          <LogoCloud />

          {/* Section News */}
          <div id="news" className="lg:pt-19 pt-10 lg:px-5 px-1">
            <div className="bg-black overflow-hidden relative rounded-2xl border border-black/10 lg:rounded-4xl">
              <div className="relative z-10 flex flex-col h-full px-4 pt-10 pb-20 lg:px-12 lg:pb-16">
                <div className="text-center mb-10">
                  <p className="mt-2 text-2xl lg:text-3xl text-balance text-white mx-auto font-bolsemibold">
                    <TextReveal
                      startTrigger="top bottom"
                      endTrigger="bottom top"
                    >
                      News and Updates
                    </TextReveal>
                  </p>
                </div>
                <div>
                  <AnimatedLine
                    color="white"
                    thickness={2}
                    animationDuration={1.5}
                    className="mb-10 mx-2"
                  />
                </div>
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                      stopOnInteraction: false, // Lanjutkan autoplay setelah interaksi
                    }),
                  ]}
                  opts={{
                    loop: true, // Pastikan carousel berulang
                  }}
                  className="w-full max-w-6xl mx-auto"
                >
                  <CarouselContent className="-ml-4">
                    {" "}
                    {/* Sesuaikan margin negatif untuk carousel */}
                    {newsItems.map((item, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-4 md:basis-1/2 lg:basis-1/3"
                      >
                        <a
                          href={item.link}
                          className="block hover:scale-105 transition-transform duration-300 group p-2"
                        >
                          {" "}
                          {/* Sesuaikan padding jika perlu */}
                          <figure className="overflow-hidden rounded-lg relative mb-1">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="object-cover object-center aspect-video bg-gray-400"
                            />
                            <span className="absolute top-2 left-2 px-3 py-1 bg-gray-950/20 backdrop-blur-sm text-xs rounded-full text-gray-50">
                              {item.category}
                            </span>
                          </figure>
                          <time
                            dateTime={new Date(item.date).toISOString()}
                            className="text-sm text-gray-50/50"
                          >
                            {item.date}
                            <span> ⦁ </span>
                            {item.readTime}
                          </time>
                          <p className="text-2xl text-pretty mt-2 text-white">
                            {item.title}
                          </p>
                          <p className="line-clamp-3 text-md text-gray-50 opacity-50 mt-1 group-hover:opacity-90 transition-opacity duration-300">
                            {item.description}
                          </p>
                        </a>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>

          {/* Section faq */}
          <div id="faq" className="lg:pt-19 pt-10 lg:px-10 px-3">
            <div className="pl-2 mb-10 flex flex-col lg:flex-row lg:space-x-8">
              <div className="text-start mb-5 pl-3 lg:mb-0 lg:w-1/5">
                <p className="mt-2 text-xl text-balance text-black mx-auto">
                  <TextReveal startTrigger="top bottom" endTrigger="bottom top">
                    Frequently Asked Questions
                  </TextReveal>
                </p>
              </div>
              <div className="text-start lg:w-4/5">
                <div className="max-w-4xl mx-auto space-y-4">
                  <AnimatedLine
                    color="black"
                    thickness={2}
                    animationDuration={1.5}
                    className=" mx-2"
                  />
                  <Collapsible
                    title={
                      <TextReveal
                        className="my-2 text-2xl ml-2 lg:text-3xl font-semibold text-balance text-black"
                        startTrigger="top bottom"
                        endTrigger="bottom top"
                      >
                        What is SOBUM?
                      </TextReveal>
                    }
                  >
                    <p className="mt-2 text-xl ml-2 text-balance text-black mx-auto">
                      SOBUM (Sobat Bumi) is a community-driven initiative
                      focused on combating climate change through education,
                      sustainable practices, and grassroots action. We aim to
                      empower individuals and communities to make a positive
                      impact on the environment.
                    </p>
                  </Collapsible>

                  <AnimatedLine
                    color="black"
                    thickness={2}
                    animationDuration={1.5}
                    className="mx-2"
                  />
                  <Collapsible
                    title={
                      <TextReveal
                        className="text-2xl my-2 ml-2 lg:text-3xl font-semibold text-balance text-black"
                        startTrigger="top bottom"
                        endTrigger="bottom top"
                      >
                        How does solar energy work?
                      </TextReveal>
                    }
                  >
                    <p className="mt-2 ml-2 text-xl text-balance text-black mx-auto">
                      Solar energy works by converting sunlight into electricity
                      using photovoltaic (PV) cells. These cells are made of
                      semiconductor materials that generate direct current (DC)
                      electricity when exposed to sunlight. An inverter then
                      converts this DC electricity into alternating current (AC)
                      electricity, which can be used to power homes and
                      businesses.
                    </p>
                  </Collapsible>

                  <AnimatedLine
                    color="black"
                    thickness={2}
                    animationDuration={1.5}
                    className=" mx-2"
                  />
                  <Collapsible
                    title={
                      <TextReveal
                        className="text-2xl my-2 ml-2 lg:text-3xl font-semibold text-balance text-black"
                        startTrigger="top bottom"
                        endTrigger="bottom top"
                      >
                        How can I get involved with SOBUM?
                      </TextReveal>
                    }
                  >
                    <p className="mt-2 ml-2 text-xl text-balance text-black mx-auto">
                      You can get involved with SOBUM by volunteering for our
                      events, participating in our educational programs, or
                      donating to support our initiatives. Follow us on social
                      media to stay updated on upcoming activities and how you
                      can contribute.
                    </p>
                  </Collapsible>

                  <AnimatedLine
                    color="black"
                    thickness={2}
                    animationDuration={1.5}
                    className="mx-2"
                  />
                  <Collapsible
                    title={
                      <TextReveal
                        className="text-2xl my-2 ml-2 lg:text-3xl font-semibold text-balance text-black"
                        startTrigger="top bottom"
                        endTrigger="bottom top"
                      >
                        What are SOBUM's main programs?
                      </TextReveal>
                    }
                  >
                    <p className="mt-2 ml-2 text-xl text-balance text-black mx-auto">
                      SOBUM has several key programs, including educational
                      workshops on sustainable living, tree-planting campaigns,
                      and the development of small-scale renewable energy
                      projects in local communities. We also regularly hold
                      webinars and open discussions to raise awareness about
                      climate change issues.
                    </p>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>

          {/* Section Our Team */}
          <div id="our-team" className="lg:pt-16 pt-10 lg:px-10 px-3 mb-20">
            <AnimatedLine
              color="black"
              thickness={2}
              animationDuration={1.5}
              className="mb-10 mx-2"
            />
            <div className="pl-2 mb-10 flex flex-col lg:flex-row lg:space-x-8">
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
          <FooterSection />
        </div>
      </ClickSpark>
    </>
  );
}

export default App;
