import { abi, contractAddress } from "../data/data";
//var Contract = require("web3-eth-contract");
import Web3 from "web3";
import Web3Modal from "web3modal";
const WalletConnectProvider = require("wallet-connect-provider");

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;

// Setup the orchestra
function init() {
  console.log("Initializing...");
  console.log("WalletConnectProvider is", WalletConnectProvider);

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // 2112
        infuraId: "9640a6fe19154e329e4fc7f1d0fbdd94",
      },
    },
  };

  web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  });
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  console.log(chainId);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  //console.log("Got accounts", accounts);
  selectedAccount = accounts[0];
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {
  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  //document.querySelector("#connected").style.display = "none";
  //document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  // document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  isConnectedSub.call(true)
  //  document.querySelector("#btn-connect").removeAttribute("disabled")

  provider.on("chainChanged", (chainId) => {
    console.log(chainId);
    fetchAccountData();
  });
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log(chainId);
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
  //document.getElementById("btn-disconnect").style.display = 'none';
  // document.getElementById("btn-connect").innerHTML = 'Connected!';

  await refreshAccountData();
}

// mint
async function mintCat() {
  const web3 = new Web3(provider);
  const account = selectedAccount;

  const contract = new web3.eth.Contract(abi, contractAddress);

  await contract.methods
    .mintCatPublic()
    .send({
      from: account,
      //gas: gas_amount,
      //gasPrice: '20000000000',
      value: 80000000000000000,
    })
    .on("transactionHash", function (hash) {
      console.log(hash);
      console.log(
        'Minting in progress. View on <a href="https://etherscan.io/tx/' +
          hash +
          '">Etherscan</a>'
      );
    })
    .on("confirmation", function (confirmationNumber, receipt) {
      console.log(receipt);
    })
    .on("receipt", function (receipt) {
      // receipt example
      console.log(receipt);
    })
    .then(function (response) {
      console.log(response);
      console.log(
        'Transaction processed. View on <a href="https://etherscan.io/tx/' +
          response.transactionHash +
          '">Etherscan</a>'
      );
    })
    .catch(function (error) {
      console.log(error);
      // alert(error)
    });
}

/**
 * Main entry point.
 */
window.addEventListener("load", async () => {
  init();
  //onConnect();
});

class Subscription {
  constructor() {
    this.subscribers = [];
  }
  subscribe(sub) {
    this.subscribers.push(sub);
  }
  call(value) {
    this.subscribers.map((sub) => sub(value));
  }
}

const isConnectedSub = new Subscription();

export { isConnectedSub, onConnect, mintCat };
