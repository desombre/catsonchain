import "./Header.css";

const Header = () => {
  return (
    <div className="bar">
      <div className="socialContainer">
        <a href="https://discord.gg/TNQeUq2ZH9">
          {" "}
          <i class="fab fa-discord"></i>
        </a>
        <a href="https://www.medium.com/@pmd.gifnft">
          <i class="fab fa-medium-m"></i>
        </a>
        <a href="https://opensea.io/collection/catsonchain">
          <i class="fas fa-ship"></i>
        </a>
      </div>
      <div className="divider"></div>
      <div className="anchorsContainer"></div>
    </div>
  );
};

export default Header;
