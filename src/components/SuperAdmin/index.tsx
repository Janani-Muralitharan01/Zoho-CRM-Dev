import "./index.css";
import React, { useState, useEffect } from "react";
import SuperAdminSideBar from "./superAdminSideBar";
import CreateRecruiterForm from "./createRecruiterForm";
import CreateRecrutierTable from "./createRecruiterTable";

const SuperAdmin = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <div className="layout h-full">
        <div className="sideContent">
          <SuperAdminSideBar />
        </div>
        <div className="mainContent">
          {state ? <CreateRecrutierTable /> : <CreateRecruiterForm />}
        </div>
      </div>
    </div>
  );
};
export default SuperAdmin;
