let web3;
let abi;

const detectMetaMask = () => typeof window.ethereum !== "undefined";
const handleAccountsChanged = (accounts) => {   
    if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
        //$('#enableMetamask').html('Connect with Metamask')
    } 
    console.log('WalletAddress in HandleAccountChanged = '+ window.ethereum.selectedAddress)
}

const connectToMetaMask = () => {
    window.ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
    if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
        //$('#status').html('You refused to connect Metamask')
    } else {
        console.error(err);
    }
    });
}
export { detectMetaMask, connectToMetaMask };
