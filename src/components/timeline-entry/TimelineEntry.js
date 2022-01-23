import "./TimelineEntry.css"

const TimelineEntry = ({side, ...props}) => {
    return ( <div className={`timeline_container ${side}`}>
    <div className="content">
             {props.children}
       </div>
  </div>)
}

export default TimelineEntry;