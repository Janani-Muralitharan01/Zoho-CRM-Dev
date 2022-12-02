
import { Button } from 'primereact/button';
import './navbar.css'
const NavBar = () => {
    return (
    <div className="navbar m-5">
      <div className='untitle'>Untitled</div>
      <div className='standard'>Standard
      <i className="pi pi-cog mr-2 icon"></i>
      </div>
      
      <Button label="Cancel" className='btn-C'/>
      <Button label="Save and Close"/>
      <Button label="Save"/>
      
      </div>
    );
  }
  
  export default NavBar;
  