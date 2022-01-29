//import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="info textBox ">
      <h1>FAQs</h1>
      <div>
        <h2>How can I mint? </h2>

        <p className="text">
          You can only mint via the Smart Contract. Please check this Post for
          more information:
          <a
            href="https://medium.com/@pmd.gifnft/catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://medium.com/@pmd.gifnft/catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe
          </a>
        </p>
      </div>
      <div>
        <h2>What makes CatsOnChain different from other OnChain projects? </h2>

        <p className="text">
          CatsOnChain is the first 100% On-Chain generated GIF-collection on the
          Ethereum blockchain. We compared COnC with other OnChain projects:{" "}
          <a
            href="https://medium.com/@pmd.gifnft/catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe "
            target="_blank"
            rel="noreferrer"
          >
            https://medium.com/@pmd.gifnft/catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Faqs;
