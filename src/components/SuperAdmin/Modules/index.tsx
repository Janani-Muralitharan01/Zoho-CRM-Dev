import { TabView, TabPanel } from 'primereact/tabview';
import { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import ModuleScreen from "./modules"
import { Button } from 'primereact/button';
const SettingsModules = (props:any) =>{
     const [value3, setValue3] = useState('');
     const [activeIndex1, setActiveIndex1] = useState(1);
     const [id, setId] = useState();
     console.log(props,"propp")
     const NextPage = ()=>{
          console.log("helloehelooo")
          props.handleClick(5)
     }
     // const handleClick = (e: any) => {
     //      setId(e);
     //      console.log("idddd",e,id )
          
     //    };

return(
     <div>
          <TabView
                    className="tabview"
                    activeIndex={activeIndex1}
                    onTabChange={(e) => setActiveIndex1(e.index)}
                  >
                    <TabPanel header="Modules">
                    <div>
          {}
          <div className='flex justify-content-between'>
          <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
                </span>
                <span>
                    
               <Button label='New module' icon="pi pi-plus" onClick={NextPage}
               
               
               />
                </span>
                </div>
     </div>

                    </TabPanel>
                    <TabPanel header="Tab Groups">
                     
                    </TabPanel>
                    <TabPanel header="WebTabs">
                     
                    </TabPanel>
                  </TabView>
     </div>
)
}
export default  SettingsModules