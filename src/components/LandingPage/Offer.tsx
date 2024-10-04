import { IconDatabase } from "../Icons/Icons";
import Cards from "../shared/Cards";
import Container from "../shared/Container";
import OwlCarousel from "react-owl-carousel";

const featureList = [
  {
    title: "Borrowing & Lending",
    description:
      "Borrow against your assets at industry-low interest rates, using your crypto as collateral. Lenders earn attractive returns on their assets, while borrowers enjoy flexible terms that adapt to their financial needs. Our AI ensures real-time monitoring and adjusts interest rates based on market conditions to keep your borrowing affordable and your lending profitable.",
  },
  {
    title: "DeFi Debit Card",
    description:
      "Your bridge between the worlds of fiat and decentralized finance. With our proprietary DeFi Debit Card, spend your crypto assets instantly, anywhere in the world, without worrying about geographic restrictions or lengthy KYC processes. Our card provides direct access to your DeFi portfolio, converting your crypto to fiat in real-time at the point of sale. Empower your everyday transactions with the speed and freedom of DeFi. ",
  },
  {
    title: "Tokenize RWA",
    description:
      "We’re not just about digital assets. We bring you the ability to tokenize real-world assets (RWA) such as property, commodities, and more. Imagine investing in a diversified portfolio that includes both traditional financial instruments and cutting-edge decentralized assets – all managed through one seamless platform. ",
  },
  {
    title: "Borrowing & Lending123456",
    description:
      "Borrow against your assets at industry-low interest rates, using your crypto as collateral. Lenders earn attractive returns on their assets, while borrowers enjoy flexible terms that adapt to their financial needs. Our AI ensures real-time monitoring and adjusts interest rates based on market conditions to keep your borrowing affordable and your lending profitable.",
  },
];
const Offer = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
        margin:12,
        stagePadding:30
      },
      800: {
        items: 2,
        margin:16,
        stagePadding:50
      },
      1199: {
        items: 2,
        margin:24
      },
      1536: {
        items: 3,
        margin:40,
      },
    },
    nav: true,
    dots: false,
    autoHeight: false,
    
  };
  return (
    <Container>
      <div className="mb-8 md:mb-12 lg:mb-16 2xl:mb-24">
        <h2 className="max-w-96 sm:max-w-xl max-sm:text-center sm:pr-20 lg:pr-0">
          Our Key Features
          <span className="text-secondary/50"> That We Offer </span>
        </h2>
      </div>
      <div className="-mr-5 md:-mr-10 lg:-mr-12 lgg:-mr-16 2xl:-mr-20 max-sm:mb-14">
      <OwlCarousel
        className="owl-theme section offerCarousel"
        loop={true}
        stagePadding ={80}
        autoplay={false}
        {...options}
      >
        {/* Carousel items */}
        {featureList.map((item) => (
            <Cards classNames="flex h-auto w-auto min-h-[460px] min-[480px]:min-h-[360px] min-[800px]:min-h-[500px] min-[1023px]:min-h-[400px] lg:min-h-[320px] 2xl:min-h-[428px] min-[1750px]:min-h-[356px]" key={item.title}>
              <div className="flex gap-4 sm:gap-8 max-sm:flex-col">
                <div className="w-14 h-14 rounded-full bg-primary min-w-14 blueBoxShadow flex items-center justify-center">
                  <IconDatabase />
                </div>
                <div className="flex-grow">
                  <h4 className="pb-3">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </Cards>
        ))}
       
      </OwlCarousel>
      </div>
    </Container>
  );
};

export default Offer;
