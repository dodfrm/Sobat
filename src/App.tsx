import AnimatedContent from "./Animations/AnimatedContent/AnimatedContent2";
import ClickSpark from "./Animations/ClickSpark/ClickSpark";
import FadeContent from "./Animations/FadeContent/FadeContent";
import "./App.css";
import FooterSection from "./Component/footer";
import Navbar from "./Component/Navbar";
import { OurTeam } from "./Component/Team";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "./img/1.jpg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "./img/2.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
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
        <Navbar />
        <div id="home" className="h-[100vh] bg-gray-400 p-10">
          <h2 className="mt-20 text-center text-3xl font-bold text-black">
            Home
          </h2>
        </div>
        <div id="about" className="bg-blue min-h-[100vh] p-10">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-800">
            2
          </h2>

          <AnimatedContent
            direction="horizontal"
            reverse
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <p>This content slides in from the left</p>
          </AnimatedContent>
        </div>
        <div
          id="our-team"
          className="flex min-h-screen flex-col items-center justify-center bg-red px-10 py-20"
        >
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-in-out"
            initialOpacity={0}
          >
            <h2 className="mb-16 text-center text-4xl font-bold text-gray-800">
              Our Team
            </h2>
            <p>ayo kenalan bersama tim sobat</p>
          </FadeContent>
          <AnimatedContent direction="vertical" distance={50} delay={200} once={false}> 
            <OurTeam testimonials={testimonials} />;
          </AnimatedContent>
        </div>
        <FooterSection />
      </ClickSpark>
    </>
  );
}

export default App;
