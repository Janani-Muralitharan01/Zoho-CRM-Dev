import "./superAdminSideBar.css";
import { SUPERADMINSIDEBAR } from "../../Constant/const";

const SuperAdminSideBar = (props: any) => {
  return (
    <div className="">
      <div>
        {SUPERADMINSIDEBAR.map((x: any) => (
          <span
            className="grid justify-content-center align-items-center p-2 text-xl surface-500 m-2 sideBarOnClick"
            onClick={(e: any) => props.handleClick(x.id)}
          >
            {x.names}
          </span>
        ))}
      </div>
    </div>
  );
};
export default SuperAdminSideBar;
