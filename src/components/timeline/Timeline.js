import TimelineEntry from "../timeline-entry/TimelineEntry";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline textBox ">
      <TimelineEntry side={"left"}>
        <h2>2017</h2>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </TimelineEntry>
      <TimelineEntry side={"right"}>
        <h2>2016</h2>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </TimelineEntry>
    </div>
  );
};

export default Timeline;
