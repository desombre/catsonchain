import "./Member.css";

const Member = ({ name, picture, children }) => {
  return (
    <div className="member-container">
      <div className="member-container member-title">
        <div className="image-container">
          <img src={picture} alt="cat gif" />
        </div>
        <span>{name}</span>
      </div>
      <div className="image-container svg-mover">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
        >
          <g fill="white">
            <path
              d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
            />
          </g>
        </svg>
      </div>
      <div className="speech">{children}</div>
    </div>
  );
};

export default Member;
