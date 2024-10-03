
import Cards from "../shared/Cards";
import Container from "../shared/Container";
import OwlCarousel from "react-owl-carousel";
import GlobalButton from "../shared/GlobalButton";

const featureList = [
  {
    title: "How do you Trade Cryptocurrency? A Beginner's Guide",
    description:
      "Cryptocurrency trading has become increasingly popular as these assets continue to gain traction in the financial world. But how do you trade cryptocurrency?… In this beginner's guide, we'll explore the",
      imgUrl:"/blog_one.png"
  },
  {
    title: "Crafting Your Cryptocurrency Investment Strategy",
    description:
      "The cryptocurrency world offers crypto investors compelling potential but comes with unique risks. Due to the market's ever-changing nature, investors must develop a solid strategy to navigate… these fluctuations effectively.",
      imgUrl:"/blog_two.png"
  },
  {
    title: "What is Contract Trading in Cryptocurrency",
    description:
      "Contract trading in cryptocurrency leverages an agreement between a broker and trader, which allows contract - based trading on a particular cryptocurrency. Platforms like RCO… Finance (RCOF) are revolutionizing this ",
      imgUrl:"/blog_three.png"
  },
  {
    title: "Crypto vs Stocks: Understanding the Key Differences",
    description:
      "As crypto trading continues to rock the financial landscape, a rising number of people now want to invest in DeFi trading platforms like RCO Finance (RCOF), perhaps at the expense of their equities,… and knowing how the two compare is",
      imgUrl:"/blog_two.png"
  },
];
const LatestNews = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
    dots: false,
    autoHeight: false,
    stagePadding: 80,
  };
  return (
    <Container>
      <div className="mb-24">
        <h2 className="text-secondary/50">Our Latest News</h2>
      </div>
      <div className="-mr-20">
        <OwlCarousel
          className="owl-theme section offerCarousel"
          loop={false}
          margin={40}
          autoplay={false}
          {...options}
        >
          {/* Carousel items */}
          {featureList.map((item) => (
            <Cards
              classNames="h-auto w-auto !p-0"
              key={item.title}
            >
              <div className="mb-8">
                <img src={item.imgUrl} alt="blog" />
              </div>
              <div className="px-8">
                <h4 className="pb-3">{item.title}</h4>
                <p>{item.description}</p>
                <div className="mt-8 flex pb-12">
                  <GlobalButton title="Read More" />
                </div>
              </div>
            </Cards>
          ))}
        </OwlCarousel>
      </div>
    </Container>
  );
};

export default LatestNews;
