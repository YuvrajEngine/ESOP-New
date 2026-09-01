import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sonaLogo from "../../assets/Images/SonaLogo.jpg";
import "../Esop.module.scss";

export interface ISidebarProps {
  userDisplayName: string;
}

interface INavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: INavItem[] = [
  { label: "Employee Dashboard", path: "/" },
  { label: "Create Exercise", path: "/ExerciseDashboard" },
];

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-brand">
        <img src={sonaLogo} alt="Company Logo" className="sidebar-logo" />
        <span className="sidebar-brand-name">SONA COMSTAR</span>
      </div>

      <div className="sidebar-user">
        <FontAwesomeIcon icon={faUserCircle} />
        <span>{props.userDisplayName}</span>
      </div>

      <div className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.path}
            className={`sidebar-nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => history.push(item.path)}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;