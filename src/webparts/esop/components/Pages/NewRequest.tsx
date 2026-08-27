import * as React from "react";
import { useHistory } from "react-router-dom";
import type { IEsopProps } from "../IEsopProps";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sonaLogo from "../../assets/Images/SonaLogo.jpg";
import UserAvatar from "../../assets/Images/UserAvatar.png";
import "../Esop.module.scss";

type FieldType = "text" | "date" | "numeric" | "dropdown" | "textarea";

interface IFieldConfig {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  fullWidth?: boolean;
}

const DEPARTMENT_OPTIONS = ["HR", "Finance", "IT", "Operations", "Sales"];

const FIELD_CONFIG: IFieldConfig[] = [
  { key: "EmployeeCode", label: "Employee Code", type: "text", required: true },
  { key: "EmployeeName", label: "Employee Name", type: "text", required: true },
  { key: "DateOfBirth", label: "Date of Birth", type: "date" },
  { key: "DateOfJoining", label: "Date of Joining", type: "date" },
  { key: "DateOfResignation", label: "Date of Resignation", type: "date" },
  { key: "MobileNo", label: "Mobile No", type: "text" },
  { key: "EmailId", label: "Email Id", type: "text", required: true },
  { key: "PANNo", label: "PAN No", type: "text" },
  { key: "PinCode", label: "Pin Code", type: "numeric" },
  { key: "Age", label: "Age", type: "numeric" },
  { key: "Gender", label: "Gender", type: "dropdown", options: ["Male", "Female", "Other"] },
  { key: "Department", label: "Department", type: "dropdown", options: DEPARTMENT_OPTIONS },
  { key: "Role", label: "Role", type: "text" },
  { key: "Designation", label: "Designation", type: "text" },
  { key: "Address", label: "Address", type: "textarea", fullWidth: true },
  { key: "LevelName", label: "Level Name", type: "dropdown", options: ["User", "Admin"] },
  { key: "FatherName", label: "Father Name", type: "text" },
  { key: "IsActive", label: "Is Active", type: "dropdown", options: ["Yes", "No"] },
  { key: "DateOfTermination", label: "Date of Termination", type: "date" },
];

const NewRequest: React.FC<IEsopProps> = (props) => {
  const history = useHistory();

  const renderField = (field: IFieldConfig): React.ReactElement => {
    let control: React.ReactElement;

    switch (field.type) {
      case "date":
        control = <input id={field.key} type="date" className="form-input" />;
        break;

      case "numeric":
        control = <input id={field.key} type="number" className="form-input" />;
        break;

      case "dropdown":
        control = (
          <select id={field.key} className="form-select" defaultValue="">
            <option value="" disabled>
              Select {field.label}
            </option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
        break;

      case "textarea":
        control = <textarea id={field.key} className="form-textarea" rows={4} />;
        break;

      default:
        control = <input id={field.key} type="text" className="form-input" />;
        break;
    }

    return (
      <div
        key={field.key}
        className={`form-group ${field.fullWidth ? "form-group-full" : ""}`}
      >
        <label className="form-label" htmlFor={field.key}>
          {field.label}
          {field.required && <span className="required-mark"> *</span>}
        </label>
        {control}
      </div>
    );
  };

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
            <span className="header-title">New Employee Request</span>
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
              {FIELD_CONFIG.map((field) => renderField(field))}
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => history.push("/")}>
                Cancel
              </button>

              <button type="button" className="new-po-btn">
                <FontAwesomeIcon icon={faSave} />
                <span>Save Request</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRequest;