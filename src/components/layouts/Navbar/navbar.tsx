import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import "./navbar.css";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { OverlayPanel } from "primereact/overlaypanel";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [selectedCities2, setSelectedCities2] = useState(null);
  const [sidebarModule, setSidebarModule] = useState(false);
  const op: any = useRef(null);
  const setting: any = useRef(null);
  const navigate = useNavigate();
  function handlerSiebarOptionOne() {
    setSidebar(!sidebar);
  }
  function handlerSiebarOptionTwo() {
    setSidebarModule(!sidebarModule);
  }
  const Options = [
    { name: "Standard", code: "NY" },
    { name: "Administrator", code: "RM" },
    { name: "Squash", code: "LDN" },
  ];
  return (
    <div className="navbar ">
      <span></span>
      <div
        className="untitle font-normal"
        onClick={(e) => op.current.toggle(e)}
      >
        Untitled <br />
        <span className="line">________________________</span>
      </div>
      <div className="standard font-semibold">
        Standard
        <i
          className="pi pi-cog  left-25"
          onClick={(e) => setting.current.toggle(e)}
        ></i>
      </div>
      <span className="buttonGap">
        <button
          className="buttonStyle font-normal"
          onClick={(e: any) => {
            localStorage.clear();
            navigate("/");
          }}
        >
          {" "}
          LogOut{" "}
        </button>
        <button className="buttonStyle font-normal"> Cancel </button>
        <button className="buttonStyle font-normal"> Save and Close </button>
        <Button label="Save" style={{ height: "36px" }} />
      </span>
      <OverlayPanel
        ref={op}
        style={{ width: "450px" }}
        className="overlaypanel-demo"
      >
        <div>
          <InputText
            type="text"
            className=" mb-2 w-12 inputBorder"
            placeholder="Untitle"
          />
          <br />
          <span className="text-400">Plural form of module name</span>
          <InputText
            type="text"
            className=" mb-2 w-12 inputBorder"
            placeholder="Untitle"
          />
          <br />
          <span className="text-400">Singular form of module name</span>
          <br />
          <span className="flex justify-content-end">
            <Button label="Done" />
          </span>
        </div>
      </OverlayPanel>
      {/* settings */}
      <OverlayPanel ref={setting}>
        <div onClick={handlerSiebarOptionOne} className="options">
          Rename
        </div>
        <br />
        <div className="options" onClick={handlerSiebarOptionTwo}>
          Module Permisson
        </div>
      </OverlayPanel>
      <Sidebar
        visible={sidebar}
        position="top"
        className="border-round-lg"
        style={{ width: "45vw", height: "18vw" }}
        onHide={() => setSidebar(!sidebar)}
      >
        <div>
          <span className="optionSideBarHeader">Layout Name</span>
          <br />
          <span>
            <InputText
              type="text"
              className="border-noround ml-2 w-6"
              placeholder="Standard"
            />{" "}
            <i className="pi pi-clone ml-2 mt-2"></i>
          </span>
          <span className="flex justify-content-end btnEndStyle">
            <button
              className="buttonStyle font-normal"
              onClick={() => setSidebar(!sidebar)}
            >
              {" "}
              Cancel{" "}
            </button>
            <Button label="Save" style={{ height: "36px" }} />
          </span>
        </div>
      </Sidebar>
      <Sidebar
        visible={sidebarModule}
        position="top"
        className="border-round-lg"
        style={{ width: "45vw", height: "21vw" }}
        onHide={() => setSidebarModule(!sidebarModule)}
      >
        <div>
          <span className="optionSideBarHeader">Module Permission</span>
          <p>Select the profile(s) that should have access to the module.</p>
          <MultiSelect
            className="w-12"
            value={selectedCities2}
            options={Options}
            onChange={(e) => setSelectedCities2(e.value)}
            optionLabel="name"
            display="chip"
          />
          <span className="flex justify-content-end btnEndStyle">
            <button
              className="buttonStyle font-normal"
              onClick={() => setSidebarModule(!sidebarModule)}
            >
              {" "}
              Cancel{" "}
            </button>
            <Button label="Save" style={{ height: "36px" }} />
          </span>
        </div>
      </Sidebar>
    </div>
  );
};

export default NavBar;
