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
import {
  ModuleNameGet,
  ModuleNameDelete,
  ModuleNameUpdate,
} from "../../../features/Modules/module";
import { SpeedDial } from "primereact/speeddial";
import NavBar from "../navBar";
import ModuleSideBar from "../Modules/moduleSidebar";

import { Link } from "react-router-dom";
import React from "react";

//rolesGetForms
const FieldListTablePage = (props: any) => {
  const [value3, setValue3] = useState("");
  const [getdata, setgetdata] = useState();
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [state, setState] = useState<any>([]);
  const [Get, setGet] = useState<any>([]);
  const [forms, setForms] = useState<any>([]);
  // const [Valueforms, setValueforms] = useState<any>([]);
  const [TableData, setTableData] = useState([]);
  const navigate: any = useNavigate();
  const dispatch: any = useAppDispatch();
  const count: any = useSelector((state) => state);

  const user: any = useAppSelector((state) => state);

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
        // const data = <div>{heading} </div>

        forms.push(value[list][heading]);
        //  setTableData(forms)
      });
    });
    setForms(forms);
  }, []);

  // useEffect(() => {

  //   let view:any = [];
  //   view.push(count?.module?.rolesGetForms[0]?.moduleelements)
  //   view?.map((list:any, index:any) => {

  //     // let viewssss:any = [];
  //     for(let keydata in list){

  //     // viewssss.push(list[keydata])

  //     Object.keys(list[keydata])?.map((heading: any, index: any) => {
  //           // const data = <div>{heading} </div>
  //         //   let viewonce:any = [];
  //         //   for(let field in heading){

  //         //   viewonce.push(heading[field])
  //         //   viewonce?.map((lastData: any, index: any) => {

  //         //   })
  //         //   }
  //         Get.push(heading);

  //           //  setTableData(forms)

  //          });
  //         }

  //     });
  //       setGet(Get)
  // }, []);

  // useEffect(() => {
  //   let outData = []
  //   outData.push(Get)
  //   outData?.map((getthis:any)=>{

  //   })
  // },[])

  // const gettableValue = () => {
  //   {
  //     Object.keys(state || []).map((list, index) => {
  //       setGet(list);
  //     });
  //   }
  // };

  const layoutPagelick = (rowdata: any) => {
    return (
      <div>
        <span className="text-blue-500">untitle</span>
      </div>
    );
  };

  return (
    <div style={{ background: "rgb(250, 250, 251)", height: "100vh" }}>
      <div>
        <NavBar />
        <div className="flex mt-3 create_form_main">
          <div style={{ background: "gainsboro" }}>
            <ModuleSideBar />
          </div>

          <div className="create_form_main_division ml-3">
            <div>
              <div>
                <DataTable
                  value={forms}
                  paginator
                  responsiveLayout="scroll"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                  rows={5}
                  rowsPerPageOptions={[5, 10, 15]}
                  selectionMode="single"
                >
                  {forms.map((form: any) => {
                    return (
                      <Column
                        field={form.names}
                        header={form.names}
                        body={layoutPagelick}
                      ></Column>
                    );
                  })}
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
