import * as React from "react";
import { useHistory } from "react-router-dom";
import type { IEsopProps } from "../IEsopProps";
import { faPlus, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sonaLogo from "../../assets/Images/SonaLogo.jpg";
import UserAvatar from "../../assets/Images/UserAvatar.png";
import "../CSS/Dashboard.scss";
import "../Esop.module.scss";

export interface IEsopItem {
  Id?: number;
  EmployeeCode?: string;
  EmployeeName?: string;
  Designation?: string;
  Department?: string;
  EmailId?: string;
}

const Dashboard: React.FC<IEsopProps> = (props) => {
  const history = useHistory();
  const [dashboardData, setDashboardData] = React.useState<IEsopItem[]>([]);
  const [filteredData, setFilteredData] = React.useState<IEsopItem[]>([]);
  const [searchText, setSearchText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const getDashboardData = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response: IEsopItem[] = [];

      setDashboardData(response || []);
    } catch (error) {
      console.error("Dashboard Fetch Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (props.userEmail) getDashboardData();
  }, [props.userEmail]);

  React.useEffect(() => {
    let data = [...dashboardData];

    if (searchText.trim()) {
      const search = searchText.toLowerCase();

      data = data.filter(
        (item) =>
          item.EmployeeCode?.toLowerCase().includes(search) ||
          item.EmployeeName?.toLowerCase().includes(search) ||
          item.Designation?.toLowerCase().includes(search) ||
          item.Department?.toLowerCase().includes(search) ||
          item.EmailId?.toLowerCase().includes(search),
      );
    }

    setFilteredData(data);
    setCurrentPage(1);
  }, [searchText, dashboardData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = (): (number | string)[] => {
    const delta = 2;
    const pages: (number | string)[] = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) pages.push("...");

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <section className="dashboard-wrapper">
      {isLoading && (
        <div className="black-loader-overlay">
          <div className="black-spinner"></div>
        </div>
      )}

      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-left">
            <div className="company-logo">
              <img src={sonaLogo} alt="Company Logo" />
            </div>
          </div>

          <div className="header-center">
            <span className="header-title">ESOP Employee Master – Admin Dashboard</span>
          </div>

          <div className="header-right">
            <span className="user-name">{props.userDisplayName}</span>

            <div className="user-icon">
              <img src={UserAvatar} alt="User" />
            </div>
          </div>
        </div>

        <div className="dashboard-body">

          <div className="dashboard-filter-card">
            <input
              className="dashboard-input"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button
              className="new-po-btn"
              onClick={() => history.push("/NewRequest")}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Add New Employee</span>
            </button>
          </div>

          <div className="table-card">
            <div className="table-wrapper">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Employee Code</th>
                    <th>Employee Name</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Email ID</th>
                    <th>View</th>
                    <th>Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedData.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="no-data">
                        No records found
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map((item) => (
                      <tr key={item.Id || 0}>
                        <td>{item.EmployeeCode}</td>
                        <td>{item.EmployeeName}</td>
                        <td>{item.Designation}</td>
                        <td>{item.Department}</td>
                        <td>{item.EmailId}</td>
                        <td>
                          <button
                            className="action-btn view-btn"
                            onClick={() =>
                              history.push(`/ViewEsopRequest/${item.Id}`)
                            }
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                        </td>
                        <td>
                          <button
                            className="action-btn edit-btn"
                            onClick={() =>
                              history.push(`/EditEsopRequest/${item.Id}`)
                            }
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {filteredData.length > 0 && (
              <div className="pagination-wrapper">
                <button
                  className="page-btn"
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                >
                  Prev
                </button>

                {getPageNumbers().map((page, i) =>
                  page === "..." ? (
                    <span key={`ellipsis-${i}`} className="page-ellipsis">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      className={`page-btn ${
                        currentPage === page ? "active-page" : ""
                      }`}
                      onClick={() => changePage(page as number)}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  className="page-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;