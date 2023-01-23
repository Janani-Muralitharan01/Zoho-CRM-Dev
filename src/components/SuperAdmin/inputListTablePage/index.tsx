import { TabView, TabPanel } from "primereact/tabview";
import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useSelector, useDispatch } from "react-redux";
import { MultiSelect } from "primereact/multiselect";
import {
  ModuleNameGet,
  ModuleNameDelete,
  ModuleNameUpdate,
} from "../../../features/Modules/module";
import { SpeedDial } from "primereact/speeddial";
import NavBar from "../navBar";
import TablePageSideBar from "./listTableSidebar";
import "./tablePage.css";
import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import { ModuleNameGetFormsaa } from "../../../features/Modules/module";
import { leadGenerationTableGet } from "../../../features/Modules/leadGeneration";
import { LoginUserDetails } from "../../../features/Auth/userDetails";

//rolesGetForms
const FieldListTablePage = (props: any) => {
  const [value, setValue] = useState("");
  const [getdata, setgetdata] = useState<any>();
  const [modulename, setmodulename] = useState("");
  const [state, setState] = useState<any>([]);
  const [id, setid] = useState<any>();
  const [Get, setGet] = useState<any>([]);
  const [DataGet, setDataGet] = useState<any>([]);
  const [Getdata, setGetdata] = useState<any>([]);
  const [forms, setForms] = useState<any>([]);
  const [formData, setformData] = useState<any>([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [TableData, setTableData] = useState<any>([]);
  const [moduleElements, setModuleElements] = useState<any>();
  const navigate: any = useNavigate();
  const dispatch: any = useAppDispatch();
  const count: any = useSelector((state) => state);
  let { editTableId } = useParams();
  const user: any = useAppSelector((state) => state);
  const [buttonName, setButtonName] = useState<any>();

  async function firstGetApi() {
    let app = {};
    let res = await dispatch(ModuleNameGetFormsaa(editTableId));
    if (res) {
      setButtonName(res?.payload?.data?.data[0]?.modulename);
    }

    let response = await dispatch(leadGenerationTableGet(editTableId));

    let resp = response.payload.data;
    resp = resp.map((x: any, i: number) => {
      return x.tableData.tableData[0];
    });

    setgetdata(resp);

    // let resultId = response.payload.data[0].recuriter;

    // setid(resultId);

    const value = res.payload.data.data
      ? res.payload.data.data[0].moduleelements
      : [];

    Object.keys(value).map((list, index) => {
      Object.keys(value[list] || []).map((heading: any, index: any) => {
        formData.push(list);
        Get.push({
          formData: list,
          DataHeader: value[list][heading].fieldname,
          value: value[list][heading].defaultvalue,
        });
        TableData.push(heading);
        forms.push(value[list][heading]);
      });
    });

    setGet(Get);
    setForms(forms);
    setTableData(TableData);
    setformData(formData);

    // let recuriter =
    //   res.payload.data.data && res.payload.data.data[0].recuriter
    //     ? res.payload.data.data[0].recuriter
    //     : [];
    // let modulename =
    //   res.payload.data.data && res.payload.data.data[0].modulename
    //     ? res.payload.data.data[0].modulename
    //     : [];
    // let id =
    //   res.payload.data.data && res.payload.data.data[0]._id
    //     ? res.payload.data.data[0]._id
    //     : [];
    // let moduleElement =
    //   res.payload.data.data && res.payload.data.data[0]._id
    //     ? res.payload.data.data[0].moduleelements
    //     : [];

    // setModuleElements(moduleElement);
    // setValue(recuriter);
    // setmodulename(modulename);
    // setid(id);
  }

  useEffect(() => {
    firstGetApi();
  }, []);

  const columns = [
    { field: "Single Line", header: "Single Line" },
    { field: "Multi-Line", header: "Multi-Line" },
    { field: "Email", header: "Email" },
    { field: "Phone", header: "Phone" },
    { field: "Pick List", header: "Pick List" },
    { field: "Date", header: "Date" },
    { field: "Date/Time", header: "Date/Time" },
    { field: "Number", header: "Number" },
    { field: "Currency", header: "Currency" },
    { field: "Decimal", header: "Decimal" },
    { field: "Percent", header: "Percent" },
    { field: "Long integer", header: "Long integer" },
    { field: "Checkbox", header: "Checkbox" },
    { field: "URL", header: "URL" },
    { field: "File Upload", header: "File Upload" },
    { field: "Image Upload", header: "Image Upload" },
  ];
  const [selectedColumns, setSelectedColumns] = useState(columns);
  // useEffect(() => {
  //   GetModuleName();
  // }, []);

  const onColumnToggle = (event: any) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some(
        (sCol: { field: string }) => sCol.field === col.field
      )
    );
    setSelectedColumns(orderedSelectedColumns);
  };

  const header = (
    <div className="flex justify-content-between">
      <MultiSelect
        value={selectedColumns}
        options={columns}
        optionLabel="header"
        onChange={onColumnToggle}
        style={{ width: "20em" }}
      />
      <Link
        to="/super-admin/CustomModule/being"
        state={{
          from: Get,
          // form: value,
          // name: modulename,
          id: id,
          recId: editTableId,
          // moduleElements: moduleElements,
        }}
      >
        <Button label={`Create a ${buttonName}`} />
      </Link>

      {/* <Button label="Create a Lead" onClick={()=> navigate("/super-admin/CustomModule/being")} /> */}
    </div>
  );

  const columnComponents = selectedColumns.map((col) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return (
    <div style={{ background: "rgb(250, 250, 251)", height: "100vh" }}>
      <div>
        <NavBar />
        <div className="flex mt-3 create_form_main">
          <div style={{ background: "gainsboro" }}>
            <TablePageSideBar />
          </div>

          <div className="create_form_main_division ml-3">
            <div>
              <div>
                <DataTable
                  value={getdata}
                  paginator
                  responsiveLayout="scroll"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                  rows={5}
                  rowsPerPageOptions={[5, 10, 15]}
                  selectionMode="single"
                  header={header}
                  resizableColumns
                  columnResizeMode="fit"
                  selection={selectedProducts}
                  onSelectionChange={(e) => setSelectedProducts(e.value)}
                >
                  <Column
                    selectionMode="multiple"
                    headerStyle={{ width: "3rem" }}
                    exportable={false}
                  ></Column>
                  <Column field="Single Line" header="Single Line"></Column>
                  <Column field="Multi-Line" header="Multi-Line"></Column>
                  <Column field="Email" header="Email"></Column>
                  <Column field="Phone" header="Phone"></Column>
                  <Column field="Pick List" header="Pick List"></Column>
                  <Column field="Date" header="Date"></Column>
                  <Column field="Date/Time" header="Date/Time"></Column>
                  <Column field="Number" header="Number"></Column>
                  <Column field="Currency" header="Currency"></Column>
                  <Column field="Decimal" header="Decimal"></Column>
                  <Column field="Percent" header="Percent"></Column>
                  <Column field="Long integer" header="Long integer"></Column>
                  <Column field="Checkbox" header="Checkbox"></Column>
                  <Column field="URL" header="URL"></Column>
                  <Column field="File Upload" header="File Upload"></Column>
                  <Column field="Image Upload" header="Image Upload"></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(FieldListTablePage);
