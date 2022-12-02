import { InputSwitch } from 'primereact/inputswitch';
import { Avatar } from 'primereact/avatar';
import Footer from '../createFile/footer';
import './create.css'
const UntitleImage = () => {
     // const [checked1, setChecked1] = false;
     return (
     <div><div className='untitlee'><div className='boder'>
          <span>Untitle image<InputSwitch/><br/>
     <span>
     <Avatar icon="pi pi-user" size="xlarge" className="p-overlay-badge"
     
     style={{ backgroundColor: '#4caf4f', color: '#ffffff' }}/>
     </span>
     </span></div>
     <h5 className='preview'>Preview</h5>
     </div>
     <Footer/>
     </div>
     
     );
   }
   
   export default UntitleImage;