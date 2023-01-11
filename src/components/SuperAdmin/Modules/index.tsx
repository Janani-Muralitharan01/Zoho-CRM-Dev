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
import { ModuleNameGet } from "../../../features/Modules/module";
import NavBar from "../navBar";

const SettingsModules = (props: any) => {
  const [value3, setValue3] = useState("");
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [state, setState] = useState<any>([]);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
                <Column field="Actions" header="Actions"></Column>
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
