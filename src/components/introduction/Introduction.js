import TextDecorator from "../text-decorator/TextDecorator";
import "./Introduction.css";

const Introduction = ({ paragraphs }) => {
  return (
    <div className="introductionContainer textBox">
      <h1>
        <TextDecorator>Introduction</TextDecorator>
      </h1>
      {paragraphs.map((paragraph, index) => (
        <p
          className="text"
          key={index}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      ))}
    </div>
  );
};

export default Introduction;
