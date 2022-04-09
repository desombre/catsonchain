import { useEffect, useState } from "react";
import { isConnectedSub, onConnect } from "../../utils";
import { mintCat } from "../../utils/minting";
import "./Mint.css";

const Mint = () => {
  const [isConnected, setIsConnected] = useState(false);

  isConnectedSub.subscribe(setIsConnected);

  useEffect(() => {
    console.log(`isConnected ${isConnected}`)
  

  }, [isConnected])
  

  const mint = async () => {
    /*  console.log(
      `Metamask is ${metaMaskInstalled ? "installed" : "not installed"}.`
    ); */
    if (isConnected) {
      mintCat();
    } else {
      onConnect();
    }
  };

  return (
    <div className="buttonWrapper">
      <button className="btn mintButton" onClick={mint}>
        {isConnected ? "Adopt a cat [0.08 Eth]" : "Connect to MetaMask!"}
      </button>
    </div>
  );
};

export default Mint;
