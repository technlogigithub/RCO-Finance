
import Container from "../shared/Container";
import Cards from "../shared/Cards";
import GlobalButton from "../shared/GlobalButton";

const holderList = [
  {
    title: "Earn Passive Income",
    description:
      "Unlock steady returns with quarterly dividend distributions directly to your wallet. The more you invest, the bigger your rewards. Plus, gain access to exclusive perks like bonus prizes and exciting competitions.",
  },
  {
    title: "Exclusive Token Price Discounts",
    description:
      "Enjoy early access to RCOF tokens at a reduced rate, allowing you to buy in before market prices rise. Benefit from the token’s growth potential while maximizing your investment.",
  },
  {
    title: "Reduced Transaction & Subscription Fees",
    description:
      "Save big with up to 40% off trading fees. As the platform grows, your savings increase, and RCOF holders enjoy complimentary access to the advanced AI Robo-Advisor, further enhancing your trading efficiency. ",
  },
  {
    title: "Active Role in Token Governance",
    description:
      "Shape the future of RCO Finance by participating in governance decisions. As a token holder, you have the power to vote on key protocol upgrades, new features, and the allocation of community resources, giving you direct influence over the platform’s growth and development.",
  },
  {
    title: "Massive Gains from Presale Stages",
    description:
      (<p>Supercharge your investment with substantial growth potential at every presale stage:<br/> <br/> Stage 1 to Stage 2: Enjoy a 169% boost in value. Stage 1 to Stage 3: Watch your investment grow by 337%. Stage 1 to Stage 4: Gain an incredible 509%. Stage 1 to Bonus Round: Leap to a massive 1,580% gain. Stage 1 to Expected Listing Price: Achieve a staggering 3,000% return!</p>),
  },
  {
    title: "Staking & Dividend",
    description:
      "By holding and staking RCOF tokens, you contribute to platform liquidity and receive additional RCOF tokens as rewards. Plus, you'll earn dividends from the platform’s revenue, giving you a share of its profits based on the size of your holdings. The more tokens you hold, the more you earn.",
  },
];
const RcofHolders = () => {
  return (
    <Container>
      <div className="flex items-center mt-[-100px] mb-8 sm:mb-16 2xl:mb-24 max-lg:flex-wrap max-lg:justify-center max-lg:text-center">
        <div className="lg:basis-2/5 max-lg:pb-12">
          <h2 className="max-w-2xl">
            Become $RCOF <br />
            <span className="text-secondary/50">HODLer</span>
          </h2>
        </div>
        <div className="lg:basis-3/5">
          <video
            className="w-full h-full"
            src="/video/coin.webm"
            controls
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 2xl:mb-24">
        {holderList.map((item) => (
          <Cards
            classNames="flex items-center h-auto w-auto text-center"
            key={item.title}
          >
            <div className="flex-grow">
              <h4 className="pb-3">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Cards>
        ))}
      </div>
      <div className="flex justify-center">
        <GlobalButton title="Join Presale" />
      </div>
    </Container>
  );
};

export default RcofHolders;
