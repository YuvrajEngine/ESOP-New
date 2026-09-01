import * as React from "react";
import { useHistory } from "react-router-dom";
import type { IEsopProps } from "../IEsopProps";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../Pages/SideBar";
import "../Esop.module.scss";

export interface IExerciseItem {
  Id?: number;
  Scheme?: string;
  GrantedOn?: string;
  ExercisePrice?: string;
  VestedOptions?: string;
  VestedOn?: string;
  LastExerciseDate?: string;
}

const ExerciseDashboard: React.FC<IEsopProps> = (props) => {
  const history = useHistory();
  const [exerciseData, setExerciseData] = React.useState<IExerciseItem[]>([]);
  const [filteredData, setFilteredData] = React.useState<IExerciseItem[]>([]);
  const [searchText, setSearchText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const getExerciseData = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response: IExerciseItem[] = [];

      setExerciseData(response || []);
    } catch (error) {
      console.error("Exercise Dashboard Fetch Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (props.userEmail) {
      void getExerciseData();
    }
  }, [props.userEmail]);

  React.useEffect(() => {
    let data = [...exerciseData];

    if (searchText.trim()) {
      const search = searchText.toLowerCase();

      data = data.filter((item) => item.Scheme?.toLowerCase().includes(search));
    }

    setFilteredData(data);
    setCurrentPage(1);
  }, [searchText, exerciseData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const changePage = (page: number): void => {
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
      <Sidebar userDisplayName={props.userDisplayName} />

      {isLoading && (
        <div className="black-loader-overlay">
          <div className="black-spinner" />
        </div>
      )}

      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-center">
            <span className="header-title">CREATE EXERCISE DASHBOARD</span>
          </div>
        </div>

        <div className="dashboard-body">
          <div className="dashboard-filter-card">
            <input
              className="dashboard-input"
              placeholder="Search Scheme"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="table-card">
            <div className="table-wrapper">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Scheme</th>
                    <th>Granted On</th>
                    <th>Exercise Price</th>
                    <th>Vested Options</th>
                    <th>Vested On</th>
                    <th>Last Exercise Date</th>
                    <th>Exercise Form</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedData.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="no-data">
                        No Records Found
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map((item, index) => (
                      <tr key={item.Id || 0}>
                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td>{item.Scheme}</td>
                        <td>{item.GrantedOn}</td>
                        <td>{item.ExercisePrice}</td>
                        <td>{item.VestedOptions}</td>
                        <td>{item.VestedOn}</td>
                        <td>{item.LastExerciseDate}</td>
                        <td>
                          <button
                            className="action-btn view-btn"
                            onClick={() =>
                              history.push(`/ExerciseForm/${item.Id}`)
                            }
                          >
                            <FontAwesomeIcon icon={faFileAlt} />
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

export default ExerciseDashboard;