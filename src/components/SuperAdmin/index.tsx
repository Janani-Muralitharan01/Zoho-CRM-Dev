import "./index.css";
import SuperAdminSideBar from "./superAdminSideBar";
import CreateRecruiterForm from "./createRecruiterForm";
import CreateRecrutierTable from "./createRecruiterTable";

const SuperAdmin = () => {
  return (
    <div>
      <div className="layout h-full">
        <div className="sideContent">
          <SuperAdminSideBar />
        </div>
        <div className="mainContent">
          <CreateRecrutierTable />
        </div>
      </div>
    </div>
  );
};
export default SuperAdmin;
