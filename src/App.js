import "./App.css";
import { Header, Profile, Introduction, Info, Timeline, Faqs, TeamMembers } from "./components";

function App() {
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
          <Introduction />
        </div>

        <div className="item">
          <Info />
        </div>

        <div className="item">
          <Timeline />
        </div>
        <div className="item">
          <TeamMembers />
        </div>
        <div className="item">
          <Faqs />
        </div>
      </div>
    </div>
  );
}

export default App;
