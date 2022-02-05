import Member from "../member/Member";
import TextDecorator from "../text-decorator/TextDecorator";
import "./Team.css";

const Team = ({ members }) => {
  return (
    <div className="info textBox ">
      <h1>
        <TextDecorator>Team members</TextDecorator>
      </h1>
      <div className="team-container">
        {members.map((member, index) => (
          <div key={index} className="team-item">
            <Member name={member.name} picture={member.cat}>
              {member.description}
            </Member>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
