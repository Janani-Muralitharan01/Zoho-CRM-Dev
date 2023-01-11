import SideBar from "./sideBar";
import FormSideBar from "../formSidebar/index";
import DropArea from "./dropArea";
import { InputText } from 'primereact/inputtext';
import TopBars from "./topBars";
import AddInputs from "./addInputs";
import QuickAction from "./quickAction";
import Arrow from "../../../assets/arrow.png";
import "./CreateForm.css";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

interface itemProps {
  label: string;
  icon: string;
}

const CreateForm = () => {
  const [value2, setValue2] = useState('');
  const [page, setpage] = useState(<DropArea />);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.logIn);
  const items: itemProps[] = [
    { label: "Back", icon: "pi pi-fw pi-arrow-circle-left" },
    { label: "Add Inputs", icon: "pi pi-fw pi-plus" },
    { label: "Edit", icon: "pi pi-fw pi-pencil" },
    { label: "Create", icon: "pi pi-fw pi-cog" },
    { label: "Quick Actions", icon: "pi pi-fw pi-cog" },
    { label: "Preview", icon: "pi pi-fw pi-cog" },
  ];

  const pageClick = (e: any) => {
    let get: any;

    if (e.index === 0) {
      get = <DropArea />;
    } else if (e.index === 1) {
      get = <AddInputs />;
    } else if (e.index === 4) {
      get = <QuickAction />;
    } else {
      get = <DropArea />;
    }
    setpage(get);
  };

  return (
    <div className="mx-3">
      <div className="flex align-items-center justify-content-start">
        <div className="mt-3 mb-4 flex">
        
                    <InputText id="username" value={value2} placeholder="Enter Your Module Name" onChange={(e) => setValue2(e.target.value)} style={{background: 'rgb(250, 250, 251)',border: 'none'}} />
                    
               
        </div>
      </div>
      <div>
        <TopBars items={items} pageClick={pageClick} />
      </div>
      <div className="flex mt-3 create_form_main">
        <SideBar />
        <div className="create_form_main_division">{page}</div>
      </div>
    </div>
  );
};

export default React.memo(CreateForm);
