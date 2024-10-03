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
        margin={20}
        autoplay={false}
        {...options}
      >
        {/* Carousel items */}
        <div className="flex items-center p-1 bg-hero-pattern w-full h-[700px] xl:h-[900px] 2xl:h-[1080px] bg-top bg-cover bg-no-repeat">
          <div className="flex items-center px-16 2xl:px-20 pt-16 2xl:pt-40">
            <div className="text-white basis-3/5 max-2xl:pr-6">
              <h1 className="mb-2 font-clashDisplay-regular">
                Advanced <span className="font-clashDisplay-bold"> AI</span>{" "}
                Powered DeFi{" "}
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
              <div className="mt-16">
                <GlobalButton title="Join Now" icon={<IconRightArrow />} />
              </div>
            </div>
            <div className=" basis-2/5">
              {/* <img src="./AI_Img.png" alt="banner_img" /> */}
              <video
                className="w-full h-full rounded-[32px]"
                src="/video/RCO-ready-optimized.mp4"
                controls
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>

        <div className="pb-4 bg-hero-pattern w-full h-[700px] xl:h-[900px] 2xl:h-[1080px] bg-top bg-cover bg-no-repeat">
          <div className="px-16 2xl:px-20 pt-40">
            <div className="text-white max-w-[1150px] mx-auto text-center flex flex-col items-center">
              <h1 className="font-clashDisplay-bold">
                Presale Tokens <br />
                <span className="font-clashDisplay-regular text-white/30">
                  Ends Soon!
                </span>
              </h1>
              <div className="flex flex-col items-center my-4 2xl:my-8">
                <div className="flex items-center gap-4 -ml-16">
                  <IconTrophy />
                  <p className="font-24">1st Round</p>
                </div>
                <div className="flex items-center gap-12 my-8">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6 px-8 py-12 bg-secondary/10 bannerBtnShadow rounded-[32px]">
                      <IconLaywer />
                      <p className="font-24">1 RCOF = $0.034375</p>
                    </div>
                    <div className=" flex 2xl:hidden items-center gap-2 mt-3">
                      <IconUpArrow />
                      <p className="font-24">
                        22 087 474.56{" "}
                        <span className="text-lg font-normal">Tokens Sold</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-64 h-64">
                    <img src="/first_round.png" alt="first round" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6 px-8 py-12 bg-secondary/10 bannerBtnShadow rounded-[32px]">
                      <IconTrophy />
                      <p className="font-24">2nd Round: 0.05588 USD</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-lg font-normal">
                        Total Raised:{" "}
                        <span className="font-24 pl-0.5">$2.01M</span>
                      </p>
                      <IconUpArrow />
                    </div>
                  </div>
                </div>
                <div className="-ml-16">
                  <GlobalButton
                    title="Join Presale"
                    icon={<IconRightArrow />}
                  />
                </div>
              </div>
              <div className="hidden 2xl:flex items-center flex-col">
                <div className="flex items-center gap-2 mb-3 -ml-20">
                  <IconUpArrow />
                  <p className="font-24">
                    22 087 474.56{" "}
                    <span className="text-lg font-normal">Tokens Sold</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 -ml-20">
                  <p className="text-lg font-normal">
                    Total Raised: <span className="font-24 pl-0.5">$2.01M</span>
                  </p>
                  <IconUpArrow />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 2xl:mt-14 text-white">
              <div className="flex gap-3 mr-4">
                <p className="min-w-32">Audit Completed</p>
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
              <div className="max-2xl:max-w-[378px]">
                <p>
                  RCO Finance Contract Address:
                  0xfE27ce858f924763Ab61D0FC982e184B9eD5F528
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center pb-4 bg-hero-pattern-three w-full h-[700px] xl:h-[900px] 2xl:h-[1080px] bg-top bg-cover bg-no-repeat">
          <div className="text-white max-w-[1150px] mx-auto text-center flex flex-col items-center px-16 2xl:px-20 pt-40">
            <h1 className="font-clashDisplay-bold capitalize">
              Beta platform <br />
              <span className="font-clashDisplay-regular text-white/30">
                coming soon! 
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
