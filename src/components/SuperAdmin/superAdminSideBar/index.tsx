import "./superAdminSideBar.css";
import { SUPERADMINSIDEBAR } from "../../Constant/const";
import { Button } from "primereact/button";
import Dashboard from "../../../assets/dashboard.svg";
import CreateRecruiter from "../../../assets/createRecruiter.png";
import Recruiter from "../../../assets/recruiter.png";

const SuperAdminSideBar = (props: any) => {
  return (
    <div className="">
      <div className="mx-auto mt-3 flex justify-content-center">
        <Button label="Connect New Account" className="p-button-warning" />
      </div>
      {/* <div>
        {SUPERADMINSIDEBAR.map((x: any, i: any) => (
          <span
            className="block p-2 text-xl surface-500 m-2 sideBarOnClick white-space-nowrap"
            onClick={(e: any) => props.handleClick(x.id)}
            key={i}
          >
            {x.names}
          </span>
        ))}
      </div> */}

      {/* <div>
        {SUPERADMINSIDEBAR.map((x: any, i: any) => (
          <span
            className="block p-2 text-xl surface-500 m-2 sideBarOnClick white-space-nowrap"
            onClick={(e: any) => props.handleClick(x.id)}
            key={i}
          >
            {x.names}
          </span>
        ))}
      </div> */}

      <div className="block justify-content-between align-items-center">
        <section className="flex  ">
          <img src={Dashboard} className="mr-2 ml-4" />
          <p>Dashboard</p>
        </section>
        <section className="ml-4">Recruiters</section>
        <section className="flex align-items-center">
          <img src={Recruiter} width={16} height={16} className="mr-2 ml-4" />
          <p> Create Recruiter</p>
        </section>
        <section className="flex align-items-center">
          <img src={Recruiter} width={16} height={16} className="mr-2 ml-4" />
          <p>Recruiters</p>
        </section>
      </div>
    </div>
  );
};
export default SuperAdminSideBar;
