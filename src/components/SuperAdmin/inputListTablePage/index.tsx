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

//rolesGetForms
const FieldListTablePage = (props: any) => {
  const [value, setValue] = useState("");
  const [getdata, setgetdata] = useState(false);
  const [modulename, setmodulename] = useState('');
  const [state, setState] = useState<any>([]);
  const [id, setid] = useState<any>();
  const [Get, setGet] = useState<any>([]);
  const [DataGet, setDataGet] = useState<any>([]);
  const [Getdata, setGetdata] = useState<any>([]);
  const [forms, setForms] = useState<any>([]);
  const [formData, setformData] = useState<any>([]);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const [TableData, setTableData] = useState<any>([]);
  const navigate: any = useNavigate();
  const dispatch: any = useAppDispatch();
  const count: any = useSelector((state) => state);
  
  const user: any = useAppSelector((state) => state);
useEffect(()=>{
  let recuriter = count?.module?.rolesGetForms &&
  count?.module?.rolesGetForms[0].recuriter
    ? count?.module?.rolesGetForms[0].recuriter
    : [];
    let modulename = count?.module?.rolesGetForms &&
  count?.module?.rolesGetForms[0].modulename
    ? count?.module?.rolesGetForms[0].modulename
    : [];
    let id = count?.module?.rolesGetForms &&
  count?.module?.rolesGetForms[0]._id
    ? count?.module?.rolesGetForms[0]._id
    : [];
  setValue(recuriter)
  setmodulename(modulename)
  setid(id)
})
  const formArray = [
    {
      color: "red",
      value: "#f00",
    },
    {
      color: "green",
      value: "#0f0",
    },
    {
      color: "blue",
      value: "#00f",
    },
    {
      color: "cyan",
      value: "#0ff",
    },
    {
      color: "magenta",
      value: "#f0f",
    },
    {
      color: "yellow",
      value: "#ff0",
    },
    {
      color: "black",
      value: "#000",
    },
  ];
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
  useEffect(() => {
    GetModuleName();
  }, []);

  const GetModuleName = async () => {
    const value =
      count?.module?.rolesGetForms &&
      count?.module?.rolesGetForms[0].moduleelements
        ? count?.module?.rolesGetForms[0].moduleelements
        : [];
    await setState(value);
    // const forms = count?.module?.rolesGetForms && count?.module?.rolesGetForms[0] ? count?.module?.rolesGetForms[0].moduleelements: [];
    // setForms(forms);
  };

  useEffect(() => {
    const value =
      count?.module?.rolesGetForms &&
      count?.module?.rolesGetForms[0].moduleelements
        ? count?.module?.rolesGetForms[0].moduleelements
        : [];
        
    Object.keys(value).map((list, index) => {
      
      Object.keys(value[list] || []).map((heading: any, index: any) => {
        formData.push(list)
        Get.push({
          formData:list,
          DataHeader: value[list][heading].fieldname,
          value: value[list][heading].defaultvalue,
        });
        TableData.push(heading);
        forms.push(value[list][heading]);
        //  setTableData(forms)
      });
    });
    setGet(Get);
    setForms(forms);
    setTableData(TableData);
    setformData(formData)
  }, []);

  

  useEffect(()=>{
    const tableData =
    count?.module?.rolesGetForms &&
    count?.module?.rolesGetForms[0].tableData
      ? count?.module?.rolesGetForms[0].tableData
      : [];
      Getdata.push(tableData)
      Object.keys(tableData).map((list:any, index) => {
 
  tableData[list] .map((Zero: any, index: any) => {
  
    
    Object.keys(Zero.data).map((onnsss:any, index) => {
  
  DataGet.push(onnsss)
    })
    
    // Object.values(Zero.data).map((jackk:any, index) => {
      
    //   DataGet.push(onnsss)
    //     })
    // Object.keys(tableData[list][Zero]).map((Data:any, index) => {
    // })
  
  })
      })
      setDataGet(DataGet)
     
      setGetdata(Getdata)
  },[]);

  const onColumnToggle = (event: any) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some(
        (sCol: { field: string }) => sCol.field === col.field
      )
    );
    setSelectedColumns(orderedSelectedColumns);
  };
  const clickNextPage =()=>{
    setgetdata(!getdata)
  }

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
          state={{ from:Get ,form:value,name:modulename,id:id}}
        >
          <Button label="Create a module"/>
        </Link>
     
    </div>
  );

  const columnComponents = selectedColumns.map((col) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });
  const layoutPagelick = (rowdata: any) => {
    
    return (
      <div>
        <span className="text-blue-500">ssss</span>
      </div>
    );
  };

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
                  value={Getdata}
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

                  {Object.values(DataGet).map((form: any) => {
                    return (
                      <Column
                        sortable
                        filter
                        filterPlaceholder="Search by name"
                        style={{ minWidth: "12rem" }}
                        body={form}
                        header={form}
                      ></Column>
                    );
                  })}

                  {columnComponents}
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
