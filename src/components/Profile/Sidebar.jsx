import React, { useState } from "react";
import "./Sidebar.scss";
import {
  MdCallMade,
  MdNotifications,
  MdOutlineDashboard,
  MdOutlineReportGmailerrorred,
  MdSwitchAccount,
} from "react-icons/md";
import {
  CgSearchFound,
  CgNotes,
  CgMenuLeftAlt,
  CgMenuRightAlt,
} from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = ({ page }) => {
  const { user } = useSelector((state) => state.user);

  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  return (
    <div
      className="sidebar"
      style={{
        width: !showSidebar ? "4rem" : "20rem",
      }}
    >
      <div className={showSidebar ? "upper" : "upper upper1"}>
        {showSidebar ? (
          <CgMenuLeftAlt onClick={() => setShowSidebar(false)} />
        ) : (
          <CgMenuRightAlt onClick={() => setShowSidebar(true)} />
        )}
        {showSidebar && <Link to="/">FiNDER</Link>}
      </div>
      {!showSidebar && (
        <div className="lower lower1">
          <div
            className={location.pathname === "/submitreport" ? "active" : ""}
          >
            <Link to="/submitreport">
              <CgNotes />
            </Link>
          </div>
          {user.role === "admin" && (
            <div>
              <Link to="/admin/dashboard">
                <MdOutlineDashboard />
              </Link>
            </div>
          )}
          <div className={location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">
              <MdSwitchAccount />
            </Link>
          </div>

          <div>
            <Link to="/missingreport">
              <MdOutlineReportGmailerrorred />
            </Link>
          </div>
          <div>
            <Link to="/foundmissing">
              <CgSearchFound />
            </Link>
          </div>
          <div
            className={
              page === "viewreport" || location.pathname === "/allreports"
                ? "active"
                : ""
            }
          >
            <Link>
              <MdCallMade />
            </Link>
          </div>
          <div
            className={location.pathname === "/notifications" ? "active" : ""}
          >
            <Link to="/notifications">
              <MdNotifications />
            </Link>
          </div>
        </div>
      )}
      {showSidebar && (
        <div className="lower">
          <div
            className={location.pathname === "/submitreport" ? "active" : ""}
          >
            <Link to="/submitreport">
              <CgNotes /> Submit Report
            </Link>
          </div>
          {user.role === "admin" && (
            <div>
              <Link to="/admin/dashboard">
                <MdOutlineDashboard /> Dashboard
              </Link>
            </div>
          )}
          <div className={location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">
              <MdSwitchAccount /> Profile
            </Link>
          </div>

          <div>
            <Link to="/missingreport">
              <MdOutlineReportGmailerrorred /> Report Missing Person
            </Link>
          </div>
          <div>
            <Link to="/foundmissing">
              <CgSearchFound /> Report Found Person
            </Link>
          </div>
          <div
            className={
              page === "viewreport" || location.pathname === "/allreports"
                ? "active"
                : ""
            }
          >
            <Link to="/allreports">
              <MdCallMade /> All Reports
            </Link>
          </div>
          <div
            className={location.pathname === "/notifications" ? "active" : ""}
          >
            <Link to="/notifications">
              <MdNotifications /> Notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
