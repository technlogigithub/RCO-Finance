import { IconCheck } from "../Icons/Icons";
import Container from "../shared/Container";
import GlobalButton from "../shared/GlobalButton";
const PowerfulPerformance = () => {
const listItem = [
    {
        title:"Investment & Trading Recommendations"
    },
    {
        title:"Timely Transaction Execution"
    },
    {
        title:"Automated Liquidity Provision"
    },
    {
        title:"Machine Learning Algorithms Behind Robo Advisor"
    },
    {
        title:"Access to over 15m sources of investment banking grade information"
    },
    {
        title:"Investment and hedge fund level strategies at a retail price"
    }
]
  return (
    <Container>
      <div className="mb-8 sm:mb-16 2xl:mb-24 max-lg:-mx-4">
        <img src="./powerfullperformance.png" alt="powerfullperformance" />
      </div>
      <div className="max-w-[1000px] flex flex-col justify-center items-center text-center mx-auto mb-12 lg:mb-24">
        <h2>
          AI-Powered for <br/>
          <span className="text-secondary/50"> Powerful Performance</span>
        </h2>
        <div className="max-w-[820px] mx-auto">
          <p className="pb-4 pt-6">
            Blend into the power of AI-driven Robo Advisory that has investment
            banking & hedge fund grade AI-algorithms to help retail traders
            compete with the institutions at a low monthly subscription price.
            Drive real-time market insights, automated portfolio management, and
            custom strategies based on your financial goals, RCO Finance helps
            you make data-driven decisions that maximize gains and minimize
            risks.
          </p>
          <p>Let the future of finance work for you.</p>
        </div>
      </div>
      <ul  className="flex items-center gap-3 sm:gap-6 flex-wrap sm:justify-center">
        {listItem.map((item) => (
          <li className="flex items-center gap-4 lg:pb-2" key={item.title}>
            <div className="w-7 h-7 greenBoxShadow flex items-center bg-white rounded-full opacity-70">
              <IconCheck />
            </div>
            <p className="max-sm:text-sm">{item.title}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 sm:mt-12 lg:mt-16 2xl:mt-24 flex justify-center">
        <GlobalButton title="Join Presale" />
      </div>
    </Container>
  );
};

export default PowerfulPerformance;
