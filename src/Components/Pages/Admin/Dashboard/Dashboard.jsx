import React, { useState } from "react";
import "./Dashboard.css";
import Summary from "../Summary/Summary";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import PatientDetails from "../PatientDetails/PatientDetails";
import TransactionDetails from "../TransactionDetails/TransactionDetails";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("summary");

  const handlePage = (page) => {
    setActivePage(page);
  };

  const changeActivePage = () => {
    switch (activePage) {
      case "summary":
        return <Summary />;
      case "doctordetails":
        return <DoctorDetails />;
      case "patientdetails":
        return <PatientDetails />;
      case "transactiondetails":
        return <TransactionDetails />;
    }
  };

  return (
    <div className="adminDashboard">
      <div className="adminNavbar">
        <h3>PORTAL - Admin Dashboard</h3>
      </div>

      <div className="bottom-content">
        <div className="adminsidebar">
          <ul>
            <li>
              <button
                className={`sidebarElement ${
                  activePage === "summary" ? "active" : ""
                }`}
                onClick={() => handlePage("summary")}
              >
                Summary
              </button>
            </li>
            <li>
              <button
                className={`sidebarElement ${
                  activePage === "doctordetails" ? "active" : ""
                }`}
                onClick={() => handlePage("doctordetails")}
              >
                Doctor Details
              </button>
            </li>
            <li>
              <button
                className={`sidebarElement ${
                  activePage === "patientdetails" ? "active" : ""
                }`}
                onClick={() => handlePage("patientdetails")}
              >
                Patient Details
              </button>
            </li>
            <li>
              <button
                className={`sidebarElement ${
                  activePage === "transactiondetails" ? "active" : ""
                }`}
                onClick={() => handlePage("transactiondetails")}
              >
                Transaction Details
              </button>
            </li>
          </ul>
        </div>

        <div className="content">{changeActivePage(activePage)}</div>
      </div>
    </div>
  );
};

export default Dashboard;
