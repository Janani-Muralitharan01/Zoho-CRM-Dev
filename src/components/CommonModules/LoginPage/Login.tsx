import './Login.css'
import { RadioButton } from 'primereact/radiobutton';
import { useState, useEffect } from "react";
import LoginRight from "./LoginRight"

const Login = () => {
     const [city, setCity] = useState(null);
     // const [selectedCategory, setSelectedCategory] = useState(categories[1]);
     return (
     <div>
          <div className="split left">
  <div className="centered">
   <div style={{padding: '100px'}} className="mt-8">
    <div className='HeadingStyle'>Recruiteas<br/></div>
    <span className='text-50 flex mt-1'>Lorem ipsum is a pseudo-Latin text used in web design</span>
    
    <p className='text-2xl text-50'>Who is Using?</p>
    <div className='flex gap '>
                <div className="field-radiobutton radioButtonorder" >
                    <RadioButton inputId="Human Resources" name="city" value="Human Resources" onChange={(e) => setCity(e.value)} checked={city === 'Human Resources'} />
                    <label htmlFor="Human Resources" className='text-50'>Human Resources</label>
                </div>
                <div className="field-radiobutton  radioButtonorder">
                    <RadioButton inputId="Assistance" name="city" value="Assistance" onChange={(e) => setCity(e.value)} checked={city === 'Assistance'} />
                    <label htmlFor="Assistance" className='text-50'>Assistance</label>
                </div>
                
                <div className="field-radiobutton  radioButtonorder">
                    <RadioButton inputId="Management" name="city" value="Management" onChange={(e) => setCity(e.value)} checked={city === 'Management'} />
                    <label htmlFor="Management" className='text-50'>Management</label>
                </div></div>
    </div>
  </div>
</div>

<div className="splittwo right">
  <div className="centered">
   
    <LoginRight/>
  </div>
</div>
     </div>
     );
   }
   
   export default Login;
   