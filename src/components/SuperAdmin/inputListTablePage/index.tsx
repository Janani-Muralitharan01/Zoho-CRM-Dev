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
import {
  ModuleNameGet,
  ModuleNameDelete,
  ModuleNameUpdate,
  ModuleNameGetForms,
} from '../../../features/Modules/module';
import { SpeedDial } from 'primereact/speeddial';
import NavBar from '../navBar';
import ModuleSideBar from '../Modules/moduleSidebar';

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
  // const [Valueforms, setValueforms] = useState<any>([]);
  const [TableData, setTableData] = useState([]);
  const navigate: any = useNavigate();
  const dispatch: any = useAppDispatch();
  const count: any = useSelector((state) => state);

  const user: any = useAppSelector((state) => state);

   console.log(count, 'statestatestate');

  useEffect(() => {
    GetModuleName();
  }, []);

  const GetModuleName = async () => {
    await setState(count?.module?.rolesGetForms[0].moduleelements);
    // const forms = count?.module?.rolesGetForms && count?.module?.rolesGetForms[0] ? count?.module?.rolesGetForms[0].moduleelements: [];
    // setForms(forms);
  };
  useEffect(() => {
    // console.log("usee",count?.module?.rolesGetForms[0].moduleelements)
      Object.keys(count?.module?.rolesGetForms[0].moduleelements || []).map((list, index) => {
        
          Object.keys(count?.module?.rolesGetForms[0].moduleelements[list] || []).map((heading: any, index: any) => {
            // const data = <div>{heading} </div>
            // console.log(heading, 'heading');
            forms.push(heading);
            //  setTableData(forms)
            // console.log(forms, 'formsforms');
          });
        
      });
       setForms(forms)
  }, []);

  useEffect(() => {
    console.log("helooooowwwwwwwwwwww",state,count)
    let view:any = [];
    view.push(count?.module?.rolesGetForms[0]?.moduleelements)
    view?.map((list:any, index:any) => {
      console.log(list,"list")
      let viewssss:any = [];
      viewssss.push(list?.personalform)
      viewssss?.map((heading: any, index: any) => {
            // const data = <div>{heading} </div>
            // for(let keydata in heading){
            //   let getdataaa = {}
              

            // }
            console.log(heading, 'heading');
             Get.push(heading);
            //  setTableData(forms)
            console.log(Get, 'formsforms');
           });
        
      });
        setGet(Get)
  }, []);


  // useEffect(() => {
  //   let outData = []
  //   outData.push(Get)
  //   outData?.map((getthis:any)=>{
  //   console.log(getthis,"getthisgetthisgetthis")
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
    console.log(rowdata, 'rowdata');
    return (
      <div>
       
        <span className="text-blue-500">untitle</span>
      </div>
    );
  };

  return (
    <div style={{ background: 'rgb(250, 250, 251)', height: '100vh' }}>
      <div>
        <NavBar />
        <div className="flex mt-3 create_form_main">
          <div style={{ background: 'gainsboro' }}>
            <ModuleSideBar />
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
                  
                >
                  {forms.map((getname: any) => {
                  //  console.log(state,"state")
                    return (
                      <Column
                        field={getname.defaultvalue}
                        header={getname}
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
