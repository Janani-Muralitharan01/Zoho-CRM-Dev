
import { Button } from "primereact/button";
import { useState } from "react";
import { InputText } from 'primereact/inputtext';
const AddInputs = () => {
     const [click,setclick] = useState(false);
     const clickButton =() =>{
          setclick(!click)
     }
     return (
     <div className="flex w-12">
          {/* <div className="Add_input_page"> */}
          {click?
          <div className="w-12">
               <div>
               <div className="Add_input_page"> 
                    <span>Add Title</span><br/>
                    <span>
                         <InputText className="w-7" style={{height: '36px'}}/>
                    </span>
               </div></div>
          </div>
          
          :
          
          <div className="Add_input_page">
          <Button label="+ Add New Fields" onClick={clickButton}/>
          <p>or drag fields from the lists</p></div>
          }
          </div>
     );
   }
   
   export default AddInputs;
   