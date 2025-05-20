import AnimatedContent from "./Animations/AnimatedContent/AnimatedContent";
import ClickSpark from "./Animations/ClickSpark/ClickSpark";
import FadeContent from "./Animations/FadeContent/FadeContent";
import "./App.css";
import {HeroHeader} from "./Component/Nav";
import FooterSection from "./Component/footer";
import { OurTeam } from "./Component/Team";
import ExpandableSections from "./Component/ExpandableSections";
import { Timeline } from "./Component/Timeline";
import { Line, Bar, Pie } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  annotationPlugin,
  Legend
);
// Custom theme colors
const theme = {
  colors: {
    co2: "#ca3c25",
    temp: "#355070",
    wildfire: "#ff9f1c",
    drought: "#e71d36",
    flood: "#2ec4b6",
    textLight: "#f8f9fa",
    textDark: "#212529",
    bgLight: "#f8f9fa",
    bgDark: "#212529"
  }
};

// Typography styles
const typography = {
  h1: "text-3xl md:text-5xl font-bold mb-6",
  h2: "text-2xl md:text-3xl font-semibold mb-4",
  h3: "text-xl md:text-2xl font-medium mb-3",
  body: "text-base md:text-lg leading-relaxed mb-4",
  caption: "text-sm md:text-base opacity-80"
};
const chartAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
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

const climateData = {
  co2: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025*"],
    datasets: [
      {
        label: "Global CO₂ Emissions (Gigatons)",
        data: [35.1, 35.3, 35.7, 36.1, 36.4, 35.5, 36.2, 36.6, 37.1, 37.5, 38.0],
        borderColor: theme.colors.co2,
        backgroundColor: "rgba(202, 60, 37, 0.2)",
        pointBackgroundColor: theme.colors.co2,
        tension: 0.3,
        fill: true
      }
    ]
  },
  temp: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025*"],
    datasets: [
      {
        label: "Global Temperature Anomaly (°C vs 1951-1980)",
        data: [0.87, 0.99, 0.91, 0.83, 0.95, 1.01, 0.84, 1.15, 1.26, 1.34, 1.4],
        borderColor: theme.colors.temp,
        backgroundColor: "rgba(53, 80, 112, 0.2)",
        pointBackgroundColor: theme.colors.temp,
        tension: 0.3,
        fill: true
      }
    ]
  },
  wildfire: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025*"],
    datasets: [
      {
        label: "Global Wildfire Area Burned (Million hectares)",
        data: [8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 22],
        backgroundColor: theme.colors.wildfire,
        borderRadius: 4
      }
    ]
  },
  disasters: {
    labels: ["Wildfires", "Floods", "Droughts", "Heatwaves", "Storms"],
    datasets: [
      {
        label: "Climate Disaster Distribution (2024)",
        data: [32, 25, 20, 15, 8],
        backgroundColor: [
          theme.colors.wildfire,
          theme.colors.flood,
          theme.colors.drought,
          theme.colors.co2,
          theme.colors.temp
        ],
        borderWidth: 1
      }
    ]
  }
};

// Enhanced timeline data with more metrics and stories
const dataTimeline = [
  {
    title: "2022",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div>
            <h3 className={typography.h3}>Carbon Emissions Surge</h3>
            <p className={typography.body}>
              Global CO₂ emissions rebounded sharply after the pandemic dip,
              reaching 36.6 Gt as economies reopened. The Arctic experienced its
              6th warmest year on record, with sea ice extent 12% below the
              1981-2010 average.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <h3 className={typography.h3}>Extreme Weather Events</h3>
            <p className={typography.body}>
              Pakistan faced catastrophic floods covering 1/3 of the country,
              affecting 33 million people. Europe experienced its hottest summer
              on record, with temperatures exceeding 40°C in the UK for the
              first time.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={chartAnimation}
          className="mt-6 h-[300px] md:h-[400px] w-full"
        >
          <Line
            data={climateData.co2}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: "Global CO₂ Emissions Trend (2015-2025)",
                  font: { size: 16 },
                },
                annotation: {
                  annotations: {
                    pandemic: {
                      type: "line",
                      yMin: 35.5,
                      yMax: 35.5,
                      borderColor: "rgb(75, 192, 192)",
                      borderWidth: 2,
                      label: {
                        content: "COVID-19 Dip",
                        display: true,
                        position: "end",
                      },
                    },
                  },
                },
              },
            }}
          />
          <p className={typography.caption}>
            *2025 data projected based on current trends
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div>
            <h3 className={typography.h3}>Temperature Records Shattered</h3>
            <p className={typography.body}>
              July 2023 became the hottest month ever recorded globally, with
              many regions experiencing temperatures 2-3°C above average.
              Antarctic sea ice reached its lowest extent since satellite
              records began, at 1.79 million km² in February.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <h3 className={typography.h3}>Unprecedented Wildfires</h3>
            <p className={typography.body}>
              Canadian wildfires burned over 18 million hectares, releasing 1.5
              Gt of CO₂ - more than the country's annual emissions. Greece faced
              devastating fires that destroyed 20% of its forests in some
              regions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={chartAnimation}
            className="h-[300px] md:h-[350px] w-full"
          >
            <Line
              data={climateData.temp}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: "Global Temperature Anomaly",
                    font: { size: 16 },
                  },
                },
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={chartAnimation}
            className="h-[300px] md:h-[350px] w-full"
          >
            <Bar
              data={climateData.wildfire}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: "Global Wildfire Area Burned",
                    font: { size: 16 },
                  },
                },
              }}
            />
          </motion.div>
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
            <h3 className={typography.h3}>Ecosystem Collapse</h3>
            <p className={typography.body}>
              The Amazon faced its worst drought in recorded history, with river
              levels dropping 5m below average. This led to mass fish deaths and
              isolated indigenous communities. Simultaneously, global coral
              bleaching affected over 60% of reefs.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <h3 className={typography.h3}>Deadly Climate Extremes</h3>
            <p className={typography.body}>
              Storm Daniel caused catastrophic flooding in Libya, with 11,000+
              deaths in Derna alone after two dams collapsed. Meanwhile, Texas
              experienced its worst drought in a decade, with agricultural
              losses exceeding $7 billion.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={chartAnimation}
            className="h-[300px] md:h-[350px] w-full"
          >
            <Pie
              data={climateData.disasters}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: "2024 Climate Disaster Distribution",
                    font: { size: 16 },
                  },
                },
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={chartAnimation}
            className="h-[300px] md:h-[350px] w-full"
          >
            <Bar
              data={{
                labels: [
                  "North America",
                  "Europe",
                  "Asia",
                  "Africa",
                  "South America",
                  "Oceania",
                ],
                datasets: [
                  {
                    label: "Climate Disaster Count (2024)",
                    data: [42, 38, 56, 48, 32, 18],
                    backgroundColor: [
                      theme.colors.temp,
                      theme.colors.co2,
                      theme.colors.flood,
                      theme.colors.drought,
                      theme.colors.wildfire,
                      "#6a4c93",
                    ],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: "Disasters by Continent (2024)",
                    font: { size: 16 },
                  },
                },
              }}
            />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "2025*",
    content: (
      <div className="space-y-6">
        <div className="bg-[#f8d7da] p-4 rounded-lg border border-[#f5c2c7]">
          <h3 className={`${typography.h3} text-[#842029]`}>
            Critical Thresholds Approaching
          </h3>
          <p className={`${typography.body} text-[#842029]`}>
            Early data suggests 2025 may become the hottest year on record,
            potentially exceeding +1.5°C above pre-industrial levels
            temporarily. Scientists warn we may be approaching several climate
            tipping points, including Greenland ice sheet collapse and Amazon
            dieback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={chartAnimation}
            className="h-[300px] md:h-[350px] w-full"
          >
            <Line
              data={climateData.temp}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: "Temperature Projections",
                    font: { size: 16 },
                  },
                  annotation: {
                    annotations: {
                      threshold: {
                        type: "line",
                        yMin: 1.5,
                        yMax: 1.5,
                        borderColor: "#dc3545",
                        borderWidth: 2,
                        borderDash: [6, 6],
                        label: {
                          content: "Paris Agreement Limit",
                          display: true,
                        },
                      },
                    },
                  },
                },
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={chartAnimation}
            className="h-[300px] md:h-[350px] w-full"
          >
            <Line
              data={climateData.co2}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: "CO₂ Emissions Projections",
                    font: { size: 16 },
                  },
                },
              }}
            />
          </motion.div>
        </div>

        <div className="bg-[#e7f5ff] p-4 rounded-lg border border-[#d0ebff]">
          <h3 className={`${typography.h3} text-[#1864ab]`}>
            The Path Forward
          </h3>
          <p className={`${typography.body} text-[#1864ab]`}>
            While the projections are alarming, experts emphasize that
            immediate, drastic emissions reductions could still stabilize the
            climate. Renewable energy adoption is accelerating, with solar
            capacity growing 40% year-over-year in 2024.
          </p>
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
                        A Greener Future Starts With Us
                      </h1>
                    </div>
                  </AnimatedContent>
                </div>
                <AnimatedContent direction="horizontal">
                  <div className="absolute max-w-md text-balance bottom-10 right-4 lg:right-12 z-10 text-[#033009] text-3xl lg:text-4xl font-bold leading-tight drop-shadow-md text-right">
                    Let’s take meaningful steps toward a healthier planet,
                    together.
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>

          {/* Section Timeline */}
          <div className="min-h-svh lg:pt-19 pt-20 lg:px-10 px-3 bg-[#d7dacf]">
            <h2 className="pl-3 lg:pl-15 text-3xl lg:text-5xl font-bold text-green-800 drop-shadow-md">
              A Planet in Crisis: Year by Year
            </h2>
            <Timeline data={dataTimeline} />
          </div>

          {/* Section Action */}
          <div
            id="actions"
            className="min-h-svh lg:pt-19 pt-20 lg:px-10 px-3 bg-[#d7dacf]"
          >
            <AnimatedContent direction="vertical">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-green-800 drop-shadow-md">
                  Small Steps, Powerful Change for the Planet
                </h2>
                <p className="mt-2 text-base text-gray-700 max-w-2xl mx-auto">
                  Real change begins with everyday actions. By rethinking how we
                  live, consume, and care for nature, we each hold the power to
                  shape a healthier, more sustainable world—one step at a time.
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
            <div className="absolute inset-0 bg-[#d7dacf] mask-b-from-60%"></div>

            <FadeContent
              blur={true}
              duration={300}
              easing="ease-in-out"
              initialOpacity={0}
              delay={200}
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="mb-6 text-3xl font-bold text-green-800 drop-shadow-md">
                  Our Team
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
