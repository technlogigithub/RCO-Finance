import Container from "../shared/Container";
import {
  IconCheck,
  IconExcution,
  IconLeverage,
  IconLogo,
  IconNoKyc,
  IconRegulate,
  IconSlippage,
  IconSpreads,
} from "../Icons/Icons";
import Cards from "../shared/Cards";
import { cn } from "@/lib/utils";
import OwlCarousel from "react-owl-carousel";

const compareItems = [
  {
    title: "No KYC",
    icon: <IconNoKyc />,
  },
  {
    title: "EU Regulated",
    icon: <IconRegulate />,
  },
  {
    title: "High Leverage",
    icon: <IconLeverage />,
  },
  {
    title: "Low Spreads",
    icon: <IconSpreads />,
  },
  {
    title: "Instant Execution",
    icon: <IconExcution />,
  },
  {
    title: "No Slippage",
    icon: <IconSlippage />,
  },
];

const compareBox = [
  {
    id: 1,
    heading: <IconLogo />,
    listOptions: [
      {
        text: "AI-Powered Robo Advisor",
      },
      {
        text: "Trade Crypto, Shares, Bonds, Commodities, FX",
      },
      {
        text: "Purchase ETFs & Other Real World Assets",
      },
      {
        text: "No KYC Registration",
      },
      {
        text: "Earn Passive Income Staking",
      },
      {
        text: "DeFi Debit Card",
      },
    ],
  },
  {
    id: 2,
    heading: "Robinhood",
    listOptions: [
      {
        text: "AI-Powered Robo Advisor",
      },
      {
        text: "Trade Crypto, Shares, Bonds, Commodities, FX",
      },
      {
        text: "Earn Passive Income Staking",
      },
      {
        text: "DeFi Debit Card",
      },
    ],
  },
  {
    id: 3,
    heading: "Binance",
    listOptions: [
      {
        text: "No KYC Registration",
      },
      {
        text: "DeFi Debit Card",
      },
    ],
  },
  {
    id: 4,
    heading: "Crypto.com",
    listOptions: [
      {
        text: "AI-Powered Robo Advisor",
      },
      {
        text: "Trade Crypto, Shares, Bonds, Commodities, FX",
      },
      {
        text: "Earn Passive Income Staking",
      },
      {
        text: "DeFi Debit Card",
      },
    ],
  },
  {
    id: 5,
    heading: "Coinbase",
    listOptions: [
      {
        text: "AI-Powered Robo Advisor",
      },
      {
        text: "Trade Crypto, Shares, Bonds, Commodities, FX",
      },
      {
        text: "Earn Passive Income Staking",
      },
      {
        text: "DeFi Debit Card",
      },
    ],
  },
];
const CompareUs = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
      },
    },
    nav: true,
    dots: false,
    autoHeight: false,
  };
  return (
    <Container>
      <div className="text-center max-sm:mb-12">
        <h2 className="max-w-96 mx-auto mb-8 sm:mb-12 lg:mb-16">
          Compare Us <br />
          <span className="text-secondary/50"> With Others </span>
        </h2>
        <ul className="flex items-center flex-wrap gap-6 sm:gap-4 xl:gap-12 min-h-16 justify-center">
          {compareItems.map((item) => (
            <li className="flex items-center gap-2" key={item.title}>
              {item.icon}
              <h5>{item.title} </h5>
            </li>
          ))}
        </ul>
        {/* {Mobile Slider} */}
        <div className="sm:hidden mt-8 sm:mt-16">
          <OwlCarousel
            className="owl-theme section offerCarousel"
            loop={false}
            margin={16}
            autoplay={false}
            {...options}
          >
            {/* Carousel items */}
            {compareBox.map((item) => (
              <Cards
              classNames={cn(
                "h-auto w-auto text-left min-h-[430px] sm:min-h-[430px]"
              )}
              
                key={item.id}
              >
                <h4>{item.heading}</h4>

                <ul className="mt-8">
                  {item?.listOptions?.map((option) => (
                    <li
                      className="flex items-center gap-3 mb-4 last:mb-0"
                      key={option.text}
                    >
                      <div className="w-7 h-7 greenBoxShadow flex items-center bg-white rounded-full opacity-70">
                        <IconCheck />
                      </div>
                      <p>{option.text}</p>
                    </li>
                  ))}
                </ul>
              </Cards>
            ))}
          </OwlCarousel>
        </div>
        {/* Desktop Code */}
        <div className="hidden sm:flex gap-4 mt-8 sm:mt-16 max-2xl:flex-wrap justify-center">
          {compareBox.map((item) => (
            <Cards
              classNames={cn(
                "h-auto w-auto text-left",
                item.id === 1
                  ? "max-lg:basis-full max-2xl:basis-[49%]"
                  : "max-sm:basis-full max-lg:basis-[48%] max-2xl:basis-[32%]",
                item.id === 2 &&
                  "max-sm:basis-full max-lg:basis-[48%] max-2xl:basis-[49%]"
              )}
              key={item.id}
            >
              <h4>{item.heading}</h4>

              <ul className="mt-8">
                {item?.listOptions?.map((option) => (
                  <li
                    className="flex items-center gap-3 mb-4 last:mb-0"
                    key={option.text}
                  >
                    <div className="w-7 h-7 greenBoxShadow flex items-center bg-white rounded-full opacity-70">
                      <IconCheck />
                    </div>
                    <p>{option.text}</p>
                  </li>
                ))}
              </ul>
            </Cards>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CompareUs;
