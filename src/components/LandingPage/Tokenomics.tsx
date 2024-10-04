
import Container from "../shared/Container";
import GlobalButton from "../shared/GlobalButton";

const Tokenomics = () => {
  return (
    <Container>
      <div className="text-center">
        <h2 className="max-w-96 mx-auto text-secondary/50">
        Tokenomics 
        </h2>
      </div>
      <div className="mt-12 lg:mt-16 2xl:mt-24 flex justify-center">
        <img src="/tokenomics_graph.png" alt="graph" className="w-[1028px] h-[500px] max-lg:hidden"/>
        <img src="/token_tab.png" alt="graph" className="w-[580px] h-[850px] hidden sm:flex lg:hidden"/>
        <img src="/token_mobile.png" alt="graph" className="w-[330px] h-[733px] sm:hidden"/>
      </div>
      <div className="mt-12 lg:mt-16 2xl:mt-24 flex justify-center">
        <GlobalButton title="Join Presale" />
      </div>
    </Container>
  );
};

export default Tokenomics;
