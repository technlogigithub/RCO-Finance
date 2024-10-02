import { useState, useEffect } from "react";
import "./landing.css";
import Container from "../shared/Container";
import Cards from "../shared/Cards";
import { IconDatabase, IconSpeed, IconUnion } from "../Icons/Icons";

const roadmapItems = [
    {
        title:"Launch Presale",
        phase:"Ignition Phase",
        phaseItems : [
            { heading: "Whitepaper and Website Launch" },
            { heading: "Platform Setup" },
            { heading: "Security Check" },
            { heading: "Smart Contract Audit" },
          ]
    },
    {
        title:"Launch RCO Finance Platform",
        phase:"Ignition Phase",
        phaseItems : [
            { heading: "Whitepaper launch" },
            { heading: "Unveiling the website" },
            { heading: "Smart Contract Development" },
            { heading: "Contract security audit" },
            { heading: "Community setup" },
            { heading: "Social media blitz" },
          ]
    }
]
const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const roadmapElement = document.getElementById("roadmap");

    if (roadmapElement) {
      const sectionTop =
        roadmapElement.getBoundingClientRect().top + window.scrollY + 500;
      const sectionHeight = roadmapElement.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (
        scrollPosition > sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const phaseHeight = sectionHeight / 4;
        const scrollOffset = scrollPosition - sectionTop;

        if (scrollOffset < phaseHeight) {
          setActivePhase(1);
        } else if (scrollOffset < 2 * phaseHeight) {
          setActivePhase(2);
        } else if (scrollOffset < 3 * phaseHeight) {
          setActivePhase(3);
        } else {
          setActivePhase(4);
        }

        const scrollPercentage = Math.min(
          (scrollOffset / sectionHeight) * 100,
          100
        );
        setProgress(scrollPercentage);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const phase1 =  [
    { heading: "Whitepaper and Website Launch" },
    { heading: "Platform Setup" },
    { heading: "Security Check" },
    { heading: "Smart Contract Audit" },
  ];

  const phase2 = [
    { heading: "Community Building" },
    { heading: "Start Presale" },
    { heading: "Launch RCO Finance" },
    { heading: "Community Engagement" },
    { heading: "Presale scaling" },
  ];

  const phase3 = [
    { heading: "Presale Closure" },
    { heading: "CMC and CG Listing" },
    { heading: "Increased Marketing Efforts" },
    { heading: "Ecosystem Development" },
    { heading: "Token Launch on DEX" },
    { heading: "Beta Testing" },
  ];

  const phase4 = [
    { heading: "Launch DeFi Card" },
    { heading: "Launch on CEX" },
    { heading: "Increase liquidity pools" },
    { heading: "Launch lending protocols" },
    { heading: "Further Smart Contract Audits" },
    { heading: "KOL Partnerships" },
  ];
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h2 className="text-secondary/50 mb-6">Roadmap</h2>
        <p>A Comprehensive Roadmap to Understanding and Success</p>
      </div>

      <div
        className="roadmap-section text-white bg-map-bg w-full bg-center bg-contain bg-no-repeat px-20"
        id="roadmap"
      >
        <div className="grid items-center grid-cols-2 gap-48">
            <Cards classNames="h-auto w-auto mb-7">
              <div
                className="flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
              >
                <h4 className="">Launch Presale</h4>
                <ul className="mt-6 flex items-center gap-3 flex-wrap justify-center">
                  {phase1.map((phase, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                      <p>{phase.heading}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Cards>
            <h4>Ignition Phase</h4>
        </div>
        {/* Second Phase */}
        <div className="grid items-center grid-cols-2 gap-48">
            <h4 className="text-right">Creation Phase</h4>
            <Cards classNames="h-auto w-auto mb-7">
              <div
                className="flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
              >
                <h4 className="">Launch RCO Finance Platform</h4>
                <ul className="mt-6 flex items-center gap-3 flex-wrap justify-center">
                  {phase2.map((phase, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                      <p>{phase.heading}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Cards>
        </div>

        {/* Third Phase */}
        <div className="grid items-center grid-cols-2 gap-48">
            <Cards classNames="h-auto w-auto mb-7">
              <div
                className="flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
              >
                <h4 className="">Token Release</h4>
                <ul className="mt-6 flex items-center gap-3 flex-wrap justify-center">
                  {phase3.map((phase, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                      <p>{phase.heading}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Cards>
            <h4>Launchpad Phase</h4>
        </div>

        {/* Four Phase */}
        <div className="grid items-center grid-cols-2 gap-48">
            <h4 className="text-right">Ultimate Phase</h4>
            <Cards classNames="h-auto w-auto mb-7">
              <div
                className="flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
              >
                <h4 className="">Earn Dividends, Build Community</h4>
                <ul className="mt-6 flex items-center gap-3 flex-wrap justify-center">
                  {phase4.map((phase, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                      <p>{phase.heading}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Cards>
        </div>

        <div className="absolute self-stretch left-1/2 top-64">
          <div className="roadmap-scale">
            <div className="roadmap-progress-area">
              <div className="roadmap-progress-bar" id="roadmapProgressBar">
                <div
                  className="roadmap-progress-fill"
                  style={{ height: `${progress}%` }}
                ></div>

                  <div className="w-[70px] h-[70px] rounded-full bg-primary flex justify-center items-center absolute -top-4 -left-8"><IconUnion/></div>
                  

                  <div className="w-[70px] h-[70px] rounded-full bg-primary flex justify-center items-center absolute top-[216px] -left-8"><IconSpeed/></div>
          
                <div className="w-[70px] h-[70px] rounded-full bg-primary flex justify-center items-center absolute top-[456px] -left-8"><IconDatabase/></div>
                <div className="w-[70px] h-[70px] rounded-full bg-primary flex justify-center items-center absolute -bottom-16 -left-8"><IconUnion/></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};
export default Roadmap;
