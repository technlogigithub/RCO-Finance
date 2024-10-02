import Banner from "@/components/LandingPage/Banner";
import CompareUs from "@/components/LandingPage/CompareUs";
import Faq from "@/components/LandingPage/Faq";
import Innovative from "@/components/LandingPage/Innovative";
import LatestNews from "@/components/LandingPage/LatestNews";
import Offer from "@/components/LandingPage/Offer";
import PowerfulPerformance from "@/components/LandingPage/PowerfulPerformance";
import RcofHolder from "@/components/LandingPage/RCOFHolder";
import Roadmap from "@/components/LandingPage/Roadmap";
import Token from "@/components/LandingPage/Token";
import Tokenomics from "@/components/LandingPage/Tokenomics";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="bg-foreground">
        <div className="px-20">
          <Innovative />
          <PowerfulPerformance />
        </div>
        <div className="bg-black-dark px-20">
          <Offer />
        </div>
        <div className="px-20">
          <CompareUs />
          <RcofHolder />
        </div>
        <div className="bg-black-dark px-20">
          <Token />
        </div>
        <div className="px-20">
          <Roadmap/>
        </div>
        <div className="bg-token-bg w-full bg-top bg-cover bg-no-repeat px-20">
          <Tokenomics />
        </div>
        <div className="px-20">
          <Faq/>
        </div>
        <div className="bg-black-dark px-20">
          <LatestNews/>
        </div>
      </div>
    </div>
  );
};

export default Home;
