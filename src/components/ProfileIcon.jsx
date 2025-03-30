import { Link } from "react-router-dom";

const ProfileIcon = ({ icon }) => {
  return (
    <Link to="/profile">
      <div className="profile-icon">
        {icon}
      </div>
    </Link>
  );
};

export default ProfileIcon;
