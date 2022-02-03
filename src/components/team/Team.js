import Member from "../member/Member";
import TextDecorator from "../text-decorator/TextDecorator";
import "./Team.css";

const Team = ({ side, ...props }) => {
  return (
    <div className="info textBox ">
      <h1>
        <TextDecorator>Team members</TextDecorator>
      </h1>
      <div className="team-container">
      <div className="team-item">
          <Member name={"pmd"} picture={"cat0.gif"}>
            Hello, my name is PMD. I started the project to create something that has never been done before. I love new and interesting technologies and like to experiment with them.
          </Member>
        </div>
        <div className="team-item">
          <Member className="team-item" name={"kaimbe"} picture={"cat1.gif"}>
            Heyho, I am kaimbe. I am a software developer by trade and passion. I developed this website and supported PMD with reviewing the code of the catsonchain NFT contract.
          </Member>
        </div>        
      </div>
    </div>
  );
};

export default Team;
