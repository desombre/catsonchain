//import "./Faqs.css";

import FaqItem from "../faq-item/FaqItem";
import TextDecorator from "../text-decorator/TextDecorator";

const Faqs = () => {
  return (
    <div className="info textBox ">
      <h1>
        <TextDecorator>FAQs</TextDecorator>
      </h1>
      <div>
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
            </a>
          </p>
        </FaqItem>
      </div>
      <div>
        <FaqItem
          question={
            "What makes CatsOnChain different from other OnChain projects?"
          }
        >
          <p className="text">
            CatsOnChain is the first 100% On-Chain generated GIF-collection on
            the Ethereum blockchain. We compared COnC with other OnChain
            projects:{" "}
            <a
              href="https://medium.com/@pmd.gifnft/catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe "
              target="_blank"
              rel="noreferrer"
            >
              https://medium.com/&#10;@pmd.gifnft/&#10;catsonchain-the-first-collection-with-100-randomly-generated-on-chain-gifs-1cb6520a4cfe{" "}
            </a>
          </p>
        </FaqItem>
      </div>
    </div>
  );
};

export default Faqs;
