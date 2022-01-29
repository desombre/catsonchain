import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introductionContainer textBox">
      <h1>Introduction</h1>

      <p className="text">
        CatsOnChain is the first 100% On-Chain generated GIF-collection on the
        Ethereum blockchain. If you look at the current on-chain NFT projects,
        you will notice that most of them use vector images (SVG). We haven't
        found a single collection that generates on-chain gifs. So here we are.
        Please check these Medium Posts for more information:{" "}
        <a
          href="https://medium.com/@pmd.gifnft"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          https://medium.com/@pmd.gifnft{" "}
        </a>
      </p>
      <p className="text">
        Our goal is to develop innovations on the blockchain. CatsOnChain is the
        first project but not the last. We have more new, innovative ideas that
        we will implement in the coming months. The COnS owners will receive
        benefits for these.
      </p>
      <p className="text">
        Because we are the first ever to create GIFs on-chain, we like to share
        this knowledge with other projects. For this "consulting" we want to get
        a certain amount of the NFTs from the new project in return. These NFTs
        will then be drawn between all CatsOnChain holders. Please contact us
        via Twitter or Discord, if you want to set up an OnChain Gif project.
      </p>
    </div>
  );
};

export default Introduction;
