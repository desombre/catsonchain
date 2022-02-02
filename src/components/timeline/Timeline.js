import TimelineEntry from "../timeline-entry/TimelineEntry";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline textBox ">
      <TimelineEntry side={"left"}>
        <h2>September 2021</h2>
        <p>
          Initial Project Idea. There is no NFT collection with 100% on-chain
          GIFs yet. We want to be the first.
        </p>
      </TimelineEntry>
      <TimelineEntry side={"right"}>
        <h2>November 2021</h2>
        <p>
          Build knowledge of how a GIF is constructed at bit level. Unlike other
          projects, we don't use "human-readable" SVG format but the very common
          but complex GIF format.
        </p>
      </TimelineEntry>
      <TimelineEntry side={"left"}>
        <h2>December 2021</h2>
        <p>Start of the developments of the smart contract.</p>
      </TimelineEntry>
      <TimelineEntry side={"right"}>
        <h2>1st week January 2022</h2>
        <p>Creating the cats properties </p>
      </TimelineEntry>
      <TimelineEntry side={"left"}>
        <h2>16th of January 2022</h2>
        <p>Deployment of the projects</p>
      </TimelineEntry>
      <TimelineEntry side={"right"}>
        <h2>January 2022</h2>
        <p>Setting up the Discord and Website</p>
      </TimelineEntry>
    
      <TimelineEntry side={"left"}>
        <h2>Q1 2022</h2>
        <p>
          Support new projects in setting up on-chain GIF smart contracts. In
          return, we would like to receive NFTs from the project, which will be
          distributed among the CatsOnChain owners.
        </p>
      </TimelineEntry>
      <TimelineEntry side={"right"}>
        <h2>Q2-Q4 2022</h2>
        <p>
          New projects with innovative On Chain ideas. The NFTs can only be
          minted by CatsOnChain owners.
        </p>
      </TimelineEntry>
    </div>
  );
};

export default Timeline;
