import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [catId, setCatId] = useState(Math.floor(Math.random() * 10));

  return (
    <div className="profileContainer">
      <div
        className="profile"
        onDoubleClick={() =>
          setCatId((oldID) => {
            let newID = Math.floor(Math.random() * 10);
            while (oldID === newID) newID = Math.floor(Math.random() * 10);
            return newID;
          })
        }
      >
        <img src={`cat${catId}.gif`} alt="cat gif"></img>
      </div>
    </div>
  );
};

export default Profile;
