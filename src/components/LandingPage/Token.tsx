
import Container from "../shared/Container";
import OwlCarousel from "react-owl-carousel";
import Cards from "../shared/Cards";
import { IconLineArrow } from "../Icons/Icons";
import GlobalButton from "../shared/GlobalButton";

const tokenList = [
    {
      title: "Level 1",
      amount: "1,000,000",
      value:"1%"
    },
    {
        title: "Level 2",
        amount: "2,000,000",
        value:"3%"
      },
      {
        title: "Level 3",
        amount: "5,000,000",
        value:"3%"
      },
      {
        title: "Level 4",
        amount: "8,000,000",
        value:"4.5%"
      },
      {
        title: "Level 5",
        amount: "10,000,000",
        value:"6%"
      },
  ];
const Token = () => {
    const options = {
        responsive: {
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          900: {
            items: 3,
          },
          1199: {
            items:4,
          },
          1536: {
            items: 5,
          },
        },
        nav: true,
        dots: false,
        autoHeight: false,
      };
  return (
    <Container>
      <div className="text-center">
        <h2 className="max-w-96 mx-auto">
        Token <br/>
          <span className="text-secondary/50">Remunerations</span>
        </h2>
      </div>
      <div className="mt-8 sm:mt-16 2xl:mt-24">
      <OwlCarousel
        className="owl-theme section tokenCarousel"
        loop={false}
        margin={16}
        autoplay={false}
        {...options}
      >
        {/* Carousel items */}
        {tokenList.map((item) => (
            <Cards classNames="h-auto w-auto text-center" key={item.title}>
                <div className="border rounded-full border-white/40 min-h-14 flex justify-center items-center">
                    <h4>{item.title}</h4>
                </div>
                <p className="py-8">Holding</p>
                <h3 className="pb-8">{item.amount}</h3>
                <IconLineArrow className="max-2xl:w-[230px]"/>
                <p className="-mt-4">{item.value} dividends</p>
            </Cards>
        ))}
       
      </OwlCarousel>
      </div>
      <div className="mt-24 sm:mt-12 lg:mt-16 2xl:mt-24 flex justify-center sm:justify-end">
        <GlobalButton title="Join Presale" />
      </div>
    </Container>
  );
};

export default Token;
