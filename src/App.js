import "./App.css";
import { Header, Profile, Introduction } from "./components";

function App() {
  return (
    <div className="container">
      <div className="item">
        <Header />
      </div>
      <div className="item">
        <Profile />
      </div>
      <div className="item">
        <Introduction />
      </div>
    </div>
  );
}

export default App;
