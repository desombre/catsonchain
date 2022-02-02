//import "./Faqs.css";

import FaqItem from "../faq-item/FaqItem";
import TextDecorator from "../text-decorator/TextDecorator";

const Faqs = () => {
  return (
    <div className="info textBox ">
      <h1>
        <TextDecorator>FAQs</TextDecorator>
      </h1>

      <FaqItem
        question={
          "What makes CatsOnChain different from other OnChain projects?"
        }
      >
        <p className="text">
          CatsOnChain is the first 100% On-Chain generated GIF-collection on the
          Ethereum blockchain. We compared COnC with other OnChain projects:{" "}
          <a
            href="https://medium.com/@pmd.gifnft/catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe "
            target="_blank"
            rel="noreferrer"
          >
            https://medium.com/&#10;@pmd.gifnft/&#10;catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe{" "}
          </a>
        </p>
      </FaqItem>

      <FaqItem question={"How can I mint?"}>
        <p className="text">
          You can only mint via the Smart Contract. Please check this Post for
          more information:
          <a
            href="https://medium.com/@pmd.gifnft/catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://medium.com/&#10;@pmd.gifnft/&#10;catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe
          </a>. Aditionally we are planning on implementing minting on this site in the future.
        </p>
      </FaqItem>

      <FaqItem question={"What are the minting details? "}>
        <p className="text">
          There is the first Collection with 100% randomly generated On-Chain
          GIFs. Total mint supply 11 111.
        </p>
      </FaqItem>

      <FaqItem question={"How much will minting be?"}>
        <p className="text">Each CatsOnChain will cost 0.08 ETH plus gas</p>
      </FaqItem>

      <FaqItem question={"What chain is this running on? "}>
        <p className="text">Ethereum Blockchain</p>
      </FaqItem>

      <FaqItem question={"Where can I find more information? "}>
        <p className="text">
          Links to social media, opensea, etc are provided in the navigation bar
          of this web page.
        </p>
      </FaqItem>

      <FaqItem question={"When has minting started? "}>
        <p className="text">Public mint started on January 16th</p>
      </FaqItem>
    </div>
  );
};

export default Faqs;
