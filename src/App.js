import "./App.css";
import { Header, Profile, Introduction, About, Timeline, Faqs, TeamMembers } from "./components";

function App() {
  const data = require('./config.json');

  return (
    <div className="container gradient__bg">
      <div className="" style={{ paddingBottom: "40px" }}>
        <Header />
      </div>

      <div className="content_container">
        <div className="item">
          <Profile />
        </div>

        <div className="item">
          <Introduction paragraphs={data.introduction} />
        </div>

        <div className="item">
          <About about={data.about}/>
        </div>

        <div className="item">
          <Timeline timeline={data.timeline} />
        </div>
        <div className="item">
          <TeamMembers members={data.members}/>
        </div>
        <div className="item">
          <Faqs faqs={data.faqs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
