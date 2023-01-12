import { InputText } from "primereact/inputtext";
import Vector from "../../../assets/Vector.png";
import Bell from "../../../assets/Bell.svg";
import Email from "../../../assets/email.png";
import Profile from "../../../assets/profile.png";
import "./NavBar.css";
import CreateForm from "../createForm/index";
import Cookies from "js-cookie";

import { logOut } from "../../../features/Auth/logOut";
import SuperAdminSideBar from "../superAdminSideBar/index";
import React, { useEffect, useState, useRef } from "react";
import { useAppDispatch } from "../../../app/hooks";
import Dashboard from "../../../assets/dashboard.svg";
import CreateRecruiter from "../../../assets/createRecruiter.png";
import Recruiter from "../../../assets/recruiter.png";
import Logout from "../../../assets/logout.png";
import Settings from "../../../assets/settings.png";
import Contact from "../../../assets/contact.png";
import Create from "../../../assets/create.png";
import { OverlayPanel } from "primereact/overlaypanel";
import { useNavigate } from "react-router-dom";
import { ModuleNameGet } from "../../../features/Modules/module";
import { Link } from "react-router-dom";

const NavBar = (props: any) => {
  const [value3, setValue3] = useState("");
  const [state, setState] = useState<any>([]);
  const [displayNav, setdisplayNav] = useState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const op = useRef<OverlayPanel>(null);
  useEffect(() => {
    GetModuleName();
  }, []);

  const GetModuleName = async () => {
    let res = await dispatch(ModuleNameGet());
    setState(res.payload.data.user);
  };
  const ShowNav = (items: any) => {
    setdisplayNav(items);
  };
  const NextPage = () => {
    navigate("/super-admin/create-form");
  };

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
          <span className="nav_text  flex align-items-center mt-2 white-space-nowrap ml-2">
            {displayNav}
          </span>
          {state
            ? state.map((x: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="flex align-items-center mt-2 white-space-nowrap ml-2"
                  >
                    <div>
                      {" "}
                      {index <= 5 ? (
                        <div>
                          <div className="nav_text">{x.modulename} </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })
            : ""}

          <div onClick={(e) => op.current?.toggle(e)}>
            <i className="pi pi-angle-double-right mr-6 mt-4"></i>
          </div>
          <OverlayPanel
            ref={op}
            showCloseIcon
            id="overlay_panel"
            style={{ width: "210px" }}
            className="overlaypanel-demo"
          >
            <div>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  value={value3}
                  onChange={(e) => setValue3(e.target.value)}
                  placeholder="Search"
                  style={{ width: "148px" }}
                />
              </span>
              <div className="overflow_overlay">
                {state
                  ? state.map((x: any, index: any) => {
                      return (
                        <div key={index} className="">
                          <div className="">
                            {" "}
                            {index >= 0 ? (
                              <div>
                                <div
                                  className="nav_text_overlay"
                                  onClick={() => ShowNav(x.modulename)}
                                >
                                  {x.modulename}{" "}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
              <div
                className="mt-5 cursor-pointer text-primary"
                onClick={NextPage}
              >
                {" "}
                + Create New Module{" "}
              </div>
            </div>
          </OverlayPanel>
          {/*  
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
          </div> */}
        </section>
      </section>

      <section className="">
        <i
          className="pi pi-cog ml-3 mr-2 pog"
          onClick={(e: any) => {
            // props.handleClick(9);
            navigate("/super-admin/settings");
          }}
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
