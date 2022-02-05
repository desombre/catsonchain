import TimelineEntry from "../timeline-entry/TimelineEntry";
import "./Timeline.css";

const Timeline = ({ timeline }) => {
  return (
    <div className="timeline textBox ">
      {timeline.map((entry, index) =>
       <TimelineEntry key={index} side={index % 2 ? "right" : "left"}>
       <h2>{entry.date}</h2>
       <p>       {entry.description}       </p>
     </TimelineEntry>
      )}
    </div>
  );
};

export default Timeline;
