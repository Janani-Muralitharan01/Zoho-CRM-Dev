import "./index.css";
import SuperAdminSideBar from "./superAdminSideBar";
import CreateRecruiterForm from "./createRecruiterForm";
import CreateRecrutierTable from "./createRecruiterTable";

const SuperAdmin = () => {
  return (
    <div>
      <h1>SuperAdmin</h1>

      <div>
        <SuperAdminSideBar />
        <section>
          <CreateRecruiterForm />
          <CreateRecrutierTable />
        </section>
      </div>
    </div>
  );
};
export default SuperAdmin;
