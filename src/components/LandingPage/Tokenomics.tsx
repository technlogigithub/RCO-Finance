
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
      <div className="mt-24 flex justify-center">
        <img src="/tokenomics_graph.png" alt="graph" className="w-[1028px] h-[500px]"/>
      </div>
      <div className="mt-24 flex justify-center">
        <GlobalButton title="Join Presale" />
      </div>
    </Container>
  );
};

export default Tokenomics;
