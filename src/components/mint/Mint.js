import { useState, useEffect } from "react";
import { detectMetaMask, connectToMetaMask } from "../../utils";
import "./Mint.css";

const Mint = () => {
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(false);

  useEffect(() => {
    setMetaMaskInstalled(detectMetaMask());
  }, []);

  const mint = () => {
   /*  console.log(
      `Metamask is ${metaMaskInstalled ? "installed" : "not installed"}.`
    ); */
    if (metaMaskInstalled) {
      connectToMetaMask();
    } else {
      window.open("https://metamask.io/", "_blank");
    }
  };

  return (
    <div className="buttonWrapper">
      <button className="btn mintButton" onClick={mint}>
        {metaMaskInstalled ? "Adopt a cat!" : "Install MetaMask"}
      </button>
    </div>
  );
};

export default Mint;
