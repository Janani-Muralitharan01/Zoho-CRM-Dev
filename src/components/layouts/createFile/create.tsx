import { InputSwitch } from 'primereact/inputswitch';
import { Avatar } from 'primereact/avatar';
import Footer from '../createFile/footer';
import { useState, useEffect } from "react";
import './create.css'
const UntitleImage = () => {
     const [checked1, setChecked1] = useState(true);
     // setChecked1 : false
      function handlerClick () {
        console.log("heyy")
      }
     return (
     <div><div className='untitlee' ><div className='boder'>
          <span >Untitle image<InputSwitch onClick={handlerClick} checked={checked1} onChange={(e) => setChecked1(e.value)}  /><br/>
     <span>
     <Avatar icon="pi pi-user" size="xlarge" className="p-overlay-badge"/>
     </span>
     </span></div>
     <h5 className='preview'>Preview</h5>
     </div>
     <Footer/>
     </div>
     
     );
   }
   
   export default UntitleImage;