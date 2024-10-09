import GlobalButton from "../shared/GlobalButton";
import Container from "../shared/Container";
// import Cards from "../shared/CardsPlain";

const Innovative = () => {
  return (
    <Container>
      <div className="max-w-[1000px] flex flex-col justify-center items-center text-center mx-auto">
        <h2>
          Innovative Problem-Solving for{" "} <br/>
          <span className="text-secondary/50">Your Business Needs</span>
        </h2>
        <div className="max-w-[820px] mx-auto">
          <p className="pb-4 pt-6">
            RCO Finance is the first AI-Powered decentralized trading platform
            that hosts a machine learning robo advisor giving DeFi investors the
            market edge.
          </p>
          <p>
            Experience FULL AUTONOMY, LOW FEES, and 10,000s of stocks, bonds,
            commodities, FX, ETF, derivatives & other RWAs. RCO Finance is the
            first automated AI trading platform harnessing blockchain
            technology.
          </p>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-16 2xl:my-24 h-[400px]">
        {/* <Cards> */}
          <video
            className="w-full h-full rounded-[32px]"
            src="/video/RCO-ready-optimized.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        {/* </Cards> */}
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-16 2xl:mt-20 flex justify-center">
        <GlobalButton title="Read Whitepaper" />
      </div>
    </Container>
  );
};

export default Innovative;
