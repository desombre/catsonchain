//import "./Faqs.css";

import FaqItem from "../faq-item/FaqItem";
import TextDecorator from "../text-decorator/TextDecorator";

const Faqs = ({ faqs }) => {
  return (
    <div className="info textBox ">
      <h1>
        <TextDecorator>FAQs</TextDecorator>
      </h1>

      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question}>
          <p className="text" dangerouslySetInnerHTML={{__html: faq.answer}}></p>
        </FaqItem>
      ))}
    </div>
  );
};

export default Faqs;
