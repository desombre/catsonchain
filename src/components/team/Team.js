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
            Hello, my name is caiojhda aiwsjdioa oiajsdfas f aoijfa faf
            .afsmipoa owefj wef cwojrfwjfon cewiof csjhef ih
          </Member>
        </div>
        <div className="team-item">
          <Member className="team-item" name={"kaimbe"} picture={"cat1.gif"}>
            Hello, my name is kaimbe. I am a software developer by trade and passion. I developed this website and supported pmd with reviewing the code of the catsonchain NFT contract.
          </Member>
        </div>        
      </div>
    </div>
  );
};

export default Team;
