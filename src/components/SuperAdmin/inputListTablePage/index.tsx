import { TabView, TabPanel } from 'primereact/tabview';
import { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { MultiSelect } from 'primereact/multiselect';
import {
  ModuleNameGet,
  ModuleNameDelete,
  ModuleNameUpdate,
  ModuleNameGetForms,
} from '../../../features/Modules/module';
import { SpeedDial } from 'primereact/speeddial';
import NavBar from '../navBar';
import TablePageSideBar from "./listTableSidebar"
import "./tablePage.css"
import { Link } from 'react-router-dom';
import React from 'react';

//rolesGetForms
const FieldListTablePage = (props: any) => {
  const [value3, setValue3] = useState('');
  const [getdata, setgetdata] = useState();
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [state, setState] = useState<any>([]);
  const [Get, setGet] = useState<any>([]);
  const [forms, setForms] = useState<any>([]);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const [TableData, setTableData] = useState<any>([]);
  const navigate: any = useNavigate();
  const dispatch: any = useAppDispatch();
  const count: any = useSelector((state) => state);

  const user: any = useAppSelector((state) => state);

   
  const formArray = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]
   const columns = [
    {field: 'Single Line', header: 'Single Line'},
    {field: 'Multi-Line', header: 'Multi-Line'},
    {field: 'Email', header: 'Email'},
    {field: 'Phone', header: 'Phone'},
    {field: 'Pick List', header: 'Pick List'},
    {field: 'Date', header: 'Date'},
    {field: 'Date/Time', header: 'Date/Time'},
    {field: 'Number', header: 'Number'},
    {field: 'Currency', header: 'Currency'},
    {field: 'Decimal', header: 'Decimal'},
    {field: 'Percent', header: 'Percent'},
    {field: 'Long integer', header: 'Long integer'},
    {field: 'Checkbox', header: 'Checkbox'},
    {field: 'URL', header: 'URL'},
    {field: 'File Upload', header: 'File Upload'},
    {field: 'Image Upload', header: 'Image Upload'},

];
const [selectedColumns, setSelectedColumns] = useState(columns);
  useEffect(() => {
    GetModuleName();
  }, []);

  const GetModuleName = async () => {
    const value = count?.module?.rolesGetForms && count?.module?.rolesGetForms[0].moduleelements ? count?.module?.rolesGetForms[0].moduleelements : []
    await setState(value);
    // const forms = count?.module?.rolesGetForms && count?.module?.rolesGetForms[0] ? count?.module?.rolesGetForms[0].moduleelements: [];
    // setForms(forms);
  };

  useEffect(() => {
  
    const value = count?.module?.rolesGetForms && count?.module?.rolesGetForms[0].moduleelements ? count?.module?.rolesGetForms[0].moduleelements : [] 
      Object.keys(value).map((list, index) => {
        
          Object.keys(value[list] || []).map((heading: any, index: any) => {
            
            Get.push({
              DataHeader:value[list][heading].fieldname,
              value:value[list][heading].defaultvalue
            })
            
            TableData.push(heading)
            forms.push(value[list][heading]);
            //  setTableData(forms)
           
          });
        
      });
      setGet(Get)
       setForms(forms)
       setTableData(TableData)
       
  }, []);

  const onColumnToggle = (event:any) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter(col => selectedColumns.some((sCol: { field: string; }) => sCol.field === col.field));
    setSelectedColumns(orderedSelectedColumns);
}

const header = (
    <div style={{ textAlign:'left' }}>
        <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
    </div>
);

const columnComponents = selectedColumns.map(col=> {
    return <Column key={col.field} field={col.field} header={col.header} />;
});
  const layoutPagelick = (rowdata: any) => {
    
    return (
      <div>
        <span className="text-blue-500">{rowdata.value}</span>
      </div>
    );
  };

  return (
    <div style={{ background: 'rgb(250, 250, 251)', height: '100vh' }}>
      <div>
        <NavBar />
        <div className="flex mt-3 create_form_main">
          <div style={{ background: 'gainsboro' }}>
            <TablePageSideBar />
          </div>

          <div className="create_form_main_division ml-3">
            <div>
              <div>

                
                <DataTable
                  value={Get}
                  paginator
                  responsiveLayout="scroll"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                  rows={5}
                  rowsPerPageOptions={[5, 10, 15]}
                  selectionMode="single"
                  header={header}
                  resizableColumns columnResizeMode="fit"
                  selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                >
                 
                  <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                 
                  {Get.map((form: any) => {
                 
                    return (
                      <Column
                      sortable 
                      filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} 
                        field='value'
                        header={form.DataHeader}
                       
                      ></Column>
                      
                       );
                    })} 

                   {columnComponents}
                </DataTable>

                {/* <table className='flex'>
         
         {Object.keys(state || []).map((list, index) => {
        return (
          
          < >
            {Object.keys(state[list]|| []).map((heading: any, index: any) => {
             

              
               return(
                
                <div>
                  
                <tr >
                <th >{heading}</th>
                
              </tr>
               <tr>
                <td>Anom</td>
                <td>19</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Megha</td>
                <td>19</td>
                <td>Female</td>
              </tr>
              <tr>
                <td>Subham</td>
                <td>25</td>
                <td>Male</td>                </tr> 
              </div>
               )
            
                
                
              
            })}

            
          </>
        );
      })}
         
        
       
      </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(FieldListTablePage);
