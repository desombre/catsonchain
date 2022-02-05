import TextDecorator from "../text-decorator/TextDecorator";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="info textBox ">
      <h1>
        <TextDecorator>About this project</TextDecorator>
      </h1>
      <p className="text">{about.text}</p>

      <ul className="text">
        {about.list.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
