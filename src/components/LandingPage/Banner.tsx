import OwlCarousel from "react-owl-carousel";
import {
  IconLaywer,
  IconRightArrow,
  IconTrophy,
  IconUpArrow,
} from "../Icons/Icons";
import "./landing.css";
import Timer from "../shared/Timer";
import GlobalButton from "../shared/GlobalButton";
import RadialBarChart from "./RadialBarChart";

const Banner = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
    dots: true,
    autoHeight: true,
  };

  return (
    <div className="">
      <OwlCarousel
        className="owl-theme section"
        loop={false}
        margin={0}
        autoplay={false}
        {...options}
      >
        {/* Carousel items */}
        {/* First Slide */}
        <div className="flex items-center w-full  h-screen relative">
          <div className="px-5 md:px-10 lg:px-12 lgg:px-16 2xl:px-20 pt-[90px] xl:pt-28 h-full flex flex-col justify-center pb-12 sm:pb-4 w-full">
            <div className="text-white lg:basis-3/5 max-2xl:pr-6 max-lg:order-2 max-lg:mt-8 max-lg:text-center relative z-30">
              <h1 className="mb-2 font-clashDisplay-regular">
                Advanced <span className="font-clashDisplay-bold"> AI</span>{" "}
                <br />
                Powered DeFi <br />
                <span className="font-clashDisplay-bold text-white/30">
                  Trading Platform
                </span>
              </h1>
              <p className="pb-4 pt-6">
                Experience advanced AI & ML powered investing like never before
                with our fully automated AI-powered robo advisor
              </p>
              <p>
                Easily convert your crypto into ETFs, Derivatives and other
                Real-World Assets
              </p>
              <div className="mt-12 sm:mt-8 max-lg:flex max-lg:justify-center">
                <GlobalButton title="Join Now" icon={<IconRightArrow />} />
              </div>
            </div>
            <div className="lg:absolute lg:inset-0 justify-center w-full video-height lg:h-full">
              <video
                className="w-full h-full rounded-[32px] hidden lg:flex"
                src="/video/banner_AI.mp4"
                controls ={false}
                autoPlay
                loop
                muted
                playsInline
              ></video>

              <video
                className="w-full h-full rounded-[32px] flex lg:hidden"
                src="/video/banner_AI_mobile.mp4"
                controls ={false}
                autoPlay
                loop
                muted
                playsInline
              ></video>

            </div>
          </div>
        </div>

        {/* Second Slide  */}
        <div className="bg-hero-pattern w-full bg-top bg-cover bg-no-repeat h-screen">
          <div className="px-5 md:px-10 lg:px-12 lgg:px-16 2xl:px-20 pt-12 xl:pt-28 h-full flex flex-col justify-center pb-12 sm:pb-4">
            <div className="text-white max-w-[1150px] mx-auto text-center flex flex-col items-center flex-grow justify-center">
              <h1 className="font-clashDisplay-bold">
                Presale Tokens <br />
                <span className="font-clashDisplay-regular text-white/30">
                  Ends Soon!
                </span>
              </h1>
              <div className="flex flex-col items-center mt-4 min-[1360px]:mt-16 mb-4 2xl:my-8">
                <div className="flex items-center gap-4 lg:-ml-16 -mb-4 lg:-mb-5">
                  <IconTrophy />
                  <p className="font-24">1st Round</p>
                </div>
                <div className="flex items-center gap-2 md:gap-6 xll:my-8 max-lg:flex-wrap max-lg:justify-center">
                  <div className="lgg:hidden  max-lgg:basis-full max-lgg:-mb-8">
                    <RadialBarChart />
                  </div>
                  <div className="flex flex-col items-center max-sm:w-full max-[380px]:mt-3 max-sm:mt-11">
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-0 px-8 py-4 sm:py-6 lg:py-12 bg-secondary/10 bannerBtnShadow rounded-[32px] max-sm:flex-row max-lg:flex-col max-lg:min-w-72 max-sm:w-full max-sm:justify-center">
                      <IconLaywer className="max-sm:w-5 max-sm:h-5" />
                      <p className="font-24">1 RCOF = $0.034375</p>
                    </div>
                    <div className="hidden lgg:flex 3xl:hidden items-center gap-2 mt-3">
                      <IconUpArrow />
                      <p className="font-24">
                        22 087 474.56{" "}
                        <span className="text-lg font-normal">Tokens Sold</span>
                      </p>
                    </div>
                  </div>
                  <div className="max-lgg:hidden w-[250px] h-[250px]">
                    {/* <img src="/first_round.png" alt="first round" /> */}

                    <RadialBarChart />
                  </div>
                  <div className="flex flex-col items-center max-sm:w-full">
                    <div className="flex items-center gap-4 sm:gap-6 px-8 py-4 sm:py-6 lg:py-12 bg-secondary/10 bannerBtnShadow rounded-[32px] max-sm:flex-row max-lg:flex-col max-lg:min-w-72 max-sm:w-full max-sm:justify-center">
                      <IconTrophy className="max-sm:w-5 max-sm:h-5" />
                      <p className="font-24">2nd Round: 0.05588 USD</p>
                    </div>
                    <div className="hidden lgg:flex 3xl:hidden items-center gap-2 mt-3">
                      <p className="text-lg font-normal">
                        Total Raised:{" "}
                        <span className="font-24 pl-0.5">$2.01M</span>
                      </p>
                      <IconUpArrow />
                    </div>
                  </div>
                </div>
                <div className="max-sm:hidden mt-6 lg:-mt-4 lg:-ml-16">
                  <GlobalButton
                    title="Join Presale"
                    icon={<IconRightArrow />}
                  />
                </div>
              </div>
              <div className="flex lgg:hidden 3xl:flex items-center flex-col max-sm:mt-0 max-lg:mt-10">
                <div className="flex items-center gap-2 mb-3 lg:-ml-20">
                  <IconUpArrow />
                  <p className="font-24">
                    22 087 474.56{" "}
                    <span className="text-lg font-normal">Tokens Sold</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:-ml-20">
                  <p className="text-lg font-normal">
                    Total Raised: <span className="font-24 pl-0.5">$2.01M</span>
                  </p>
                  <IconUpArrow />
                </div>
              </div>
            </div>
            <div className="flex justify-between md:mt-6 lg:mt-0 3xl:mt-8 text-white items-center max-sm:flex-col">
              <div className="flex gap-3 mr-4 max-sm:order-2 max-sm:mt-3">
                <p className="min-w-32 max-sm:text-xs">Audit Completed</p>
                <img
                  src="/audit_one.png"
                  alt="audit_one"
                  className="!w-[22px] h-6"
                />
                <img
                  src="/audit_two.png"
                  alt="audit_two"
                  className="!w-6 h-6"
                />
              </div>
              <div className="max-sm:max-w-full max-2xl:max-w-[378px] max-lgg:max-w-[218px] break-words">
                <p className="max-sm:text-xs max-sm:text-center">
                  RCO Finance Contract Address:
                  0xfE27ce858f924763Ab61D0FC982e184B9eD5F528
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Slide */}
        <div className="flex items-center pb-4 bg-hero-pattern-three w-full h-screen bg-cover xl:bg-contain bg-center bg-no-repeat">
          <div className="text-white max-w-[1150px] mx-auto text-center flex flex-col items-center px-5 md:px-10 lg:px-12 lgg:px-16 2xl:px-20 pt-12 xl:pt-28 h-full justify-center">
            <h1 className="font-clashDisplay-bold capitalize">
              Beta platform <br />
              <span className="font-clashDisplay-regular text-white/30">
                coming soon! 
              </span>
            </h1>
            <p className="pb-4 pt-4 sm:pt-6">
              Experience advanced AI & ML powered investing like never before
              with our fully automated AI-powered robo advisor
            </p>
            <p>
              Easily convert your crypto into ETFs, Derivatives and other
              Real-World Assets
            </p>
            <div className="mt-12">
              <Timer />
            </div>
            <div className="mt-16 2xl:mt-20">
              <GlobalButton title="Buy Now" icon={<IconRightArrow />} />
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Banner;
