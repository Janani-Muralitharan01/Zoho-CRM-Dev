import { TabView, TabPanel } from "primereact/tabview";
import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import ModuleScreen from "./modules";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useSelector, useDispatch } from "react-redux";
import {
  ModuleNameGet,
  ModuleNameDelete,
  ModuleNameUpdate,
  ModuleNameGetForms,
} from "../../../features/Modules/module";
import { SpeedDial } from "primereact/speeddial";
import NavBar from "../navBar";
import "./Modules.css";

const SettingsModules = (props: any) => {
  const [value3, setValue3] = useState("");
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [state, setState] = useState<any>([]);
  const [id, setId] = useState<any>();
  const navigate = useNavigate();
  const dispatch: any = useAppDispatch();
  const count: any = useSelector((state) => state);

  const NextPage = () => {
    navigate("/super-admin/create-form");
  };

  useEffect(() => {
    GetModuleName();
  }, []);

  const GetModuleName = async () => {
    let res = await dispatch(ModuleNameGet());
    setState(res.payload.data.user);
  };

  const items = [
    {
      label: "Update",
      icon: "pi pi-pencil",
      command: async (y: any) => {
        let res = await dispatch(ModuleNameGetForms(id));

        if (res.payload.status === 200) {
          setId(null);
          navigate("/super-admin/edit");
        }
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: async (y: any) => {
        let res = await dispatch(ModuleNameDelete(id));
        if (res.payload.status == 202) {
          setId(null);
          GetModuleName();
        }
      },
    },
  ];

  const editPolicy = (data: any) => {
    return (
      <div className="speeddial-linear-demo ">
        <SpeedDial
          model={items}
          onClick={(x: any) => {
            setId(data._id);
          }}
          direction="right"
        />
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <TabView
        className="tabview"
        activeIndex={activeIndex1}
        onTabChange={(e) => setActiveIndex1(e.index)}
      >
        <TabPanel header="Modules">
          <div>
            <div className="flex justify-content-between">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  value={value3}
                  onChange={(e) => setValue3(e.target.value)}
                  placeholder="Search"
                />
              </span>
              <span>
                <Button
                  label="New module 2"
                  icon="pi pi-plus"
                  onClick={NextPage}
                />
              </span>
            </div>
            <div>
              <DataTable
                value={state}
                paginator
                responsiveLayout="scroll"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                rows={5}
                rowsPerPageOptions={[5, 10, 15]}
                selectionMode="single"
                dataKey="id"
              >
                <Column field="modulename" header="Display in Tab As"></Column>
                <Column field="modulename" header="Module Name"></Column>
                <Column field="Last Modified" header="Last Modified"></Column>
                <Column body={editPolicy} header="Actions"></Column>
              </DataTable>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Tab Groups"></TabPanel>
        <TabPanel header="WebTabs"></TabPanel>
      </TabView>
    </div>
  );
};
export default SettingsModules;
