import { InputText } from "primereact/inputtext";
import Vector from "../../../assets/Vector.png";
import Bell from "../../../assets/Bell.svg";
import Email from "../../../assets/email.png";
import Profile from "../../../assets/profile.png";
import "./NavBar.css";
import Cookies from "js-cookie";
import { logOut } from "../../../features/Auth/logOut";
import SuperAdminSideBar from "../superAdminSideBar/index";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import Dashboard from "../../../assets/dashboard.svg";
import CreateRecruiter from "../../../assets/createRecruiter.png";
import Recruiter from "../../../assets/recruiter.png";
import Logout from "../../../assets/logout.png";
import Settings from "../../../assets/settings.png";
import Contact from "../../../assets/contact.png";
import Create from "../../../assets/create.png";
import { useNavigate } from "react-router-dom";
import { ModuleNameGet } from "../../../features/Modules/module";

const NavBar = (props: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let res = dispatch(ModuleNameGet());
    console.log("ddddd", res);
  }, []);

  return (
    <div className="p-2 flex justify-content-between align-items-center NavBar_Main">
      <section className="flex NavBar_Division  align-items-center">
        <img src={Vector} alt="Vector" width={30} height={30} />
        <p className="font-bold text-2xl line-height-1 white-space-nowrap ml-1">
          Req-Portal
        </p>
        <section className="flex">
          <div className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick">
            <img src={Dashboard} width={16} height={16} className="mr-2 ml-4" />
            <p>Dashboard</p>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(1)}
          >
            <img src={Create} width={16} height={16} className="mr-2 ml-4" />
            <div> Recruiter</div>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(2)}
          >
            <img src={Recruiter} width={16} height={16} className="mr-2 ml-4" />
            <div>Recruiters</div>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(3)}
          >
            <img src={Create} width={16} height={16} className="mr-2 ml-4" />
            <div> Candidate</div>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(4)}
          >
            <img src={Contact} width={16} height={16} className="mr-2 ml-4" />
            <div>Candidate</div>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(5)}
          >
            <img src={Create} width={16} height={16} className="mr-2 ml-4" />
            <div> Form</div>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(6)}
          >
            <img src={Contact} width={16} height={16} className="mr-2 ml-4" />
            <div> Submission</div>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(7)}
          >
            <img src={Create} width={16} height={16} className="mr-2 ml-4" />
            <div>Interviews</div>
          </div>
          <div
            className="flex align-items-center mt-2 super_Admin_Sidebar_Dashboard sideBarOnClick"
            onClick={(e: any) => props.handleClick(8)}
          >
            <img src={Contact} width={16} height={16} className="mr-2 ml-4" />
            <div>Status</div>
          </div>
        </section>
      </section>
      <section className="">
        <i
          className="pi pi-cog ml-3 mr-2 pog"
          onClick={(e: any) => props.handleClick(9)}
        ></i>
        <img src={Bell} width={26} height={26} alt="Bell" />
        {/* <img src={Email} width={26} height={26} alt="Email" className="ml-4" /> */}
        <img
          src={Profile}
          width={26}
          height={26}
          alt="Profile"
          className="ml-4"
        />
      </section>
    </div>
  );
};
export default React.memo(NavBar);
