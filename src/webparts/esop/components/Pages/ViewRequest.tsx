import * as React from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";
import type { IEsopProps } from "../IEsopProps";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sonaLogo from "../../assets/Images/SonaLogo.jpg";
import UserAvatar from "../../assets/Images/UserAvatar.png";
import "../Esop.module.scss";

type IViewRequestProps = IEsopProps & RouteComponentProps<{ id: string }>;

// Pure UI, read-only. All fields are disabled — this page only displays
// data. Once the backend is ready, fetch the record using props.match.params.id
// and bind each field's value below.
const ViewRequest: React.FC<IViewRequestProps> = (props) => {
  const history = useHistory();

  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-left">
            <div className="company-logo">
              <img src={sonaLogo} alt="Company Logo" />
            </div>
          </div>

          <div className="header-center">
            <span className="header-title">VIEW EMPLOYEE REQUEST</span>
          </div>

          <div className="header-right">
            <span className="user-name">{props.userDisplayName}</span>

            <div className="user-icon">
              <img src={UserAvatar} alt="User" />
            </div>
          </div>
        </div>

        <div className="dashboard-body">
          <div className="form-card">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="EmployeeCode">
                  Employee Code
                </label>
                <input id="EmployeeCode" type="text" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="EmployeeName">
                  Employee Name
                </label>
                <input id="EmployeeName" type="text" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="DateOfBirth">
                  Date of Birth
                </label>
                <input id="DateOfBirth" type="date" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="DateOfJoining">
                  Date of Joining
                </label>
                <input id="DateOfJoining" type="date" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="DateOfResignation">
                  Date of Resignation
                </label>
                <input
                  id="DateOfResignation"
                  type="date"
                  className="form-input"
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="MobileNo">
                  Mobile No
                </label>
                <input id="MobileNo" type="text" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="EmailId">
                  Email Id
                </label>
                <input id="EmailId" type="text" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="PANNo">
                  PAN No
                </label>
                <input id="PANNo" type="text" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="PinCode">
                  Pin Code
                </label>
                <input id="PinCode" type="number" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="Age">
                  Age
                </label>
                <input id="Age" type="number" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="Gender">
                  Gender
                </label>
                <select id="Gender" className="form-select" defaultValue="" disabled>
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="Department">
                  Department
                </label>
                <select id="Department" className="form-select" defaultValue="" disabled>
                  <option value="" disabled>
                    Select Department
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="Role">
                  Role
                </label>
                <input id="Role" type="text" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="Designation">
                  Designation
                </label>
                <input id="Designation" type="text" className="form-input" disabled />
              </div>

              <div className="form-group form-group-full">
                <label className="form-label" htmlFor="Address">
                  Address
                </label>
                <textarea id="Address" className="form-textarea" rows={4} disabled />
              </div>
            </div>

            <div className="form-grid-4">
              <div className="form-group">
                <label className="form-label" htmlFor="LevelName">
                  Level Name
                </label>
                <select id="LevelName" className="form-select" defaultValue="" disabled>
                  <option value="" disabled>
                    Select Level Name
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="FatherName">
                  Father Name
                </label>
                <input id="FatherName" type="text" className="form-input" disabled />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="IsActive">
                  Is Active
                </label>
                <select id="IsActive" className="form-select" defaultValue="" disabled>
                  <option value="" disabled>
                    Select Is Active
                  </option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="DateOfTermination">
                  Date of Termination
                </label>
                <input id="DateOfTermination" type="date" className="form-input" disabled />
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="form-cancel-btn"
                onClick={() => history.push("/")}
              >
                <FontAwesomeIcon icon={faTimes} />
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewRequest;