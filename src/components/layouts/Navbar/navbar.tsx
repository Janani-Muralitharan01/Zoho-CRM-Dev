import React, { useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import './navbar.css'
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import { OverlayPanel } from 'primereact/overlaypanel';
const NavBar = () => {
  const op:any = useRef(null);
  const setting:any = useRef(null);
  
    return (
      
    <div className="navbar ">
      <span></span>
      <div className='untitle'  onClick={(e) => op.current.toggle(e)} >Untitled <br/><span className='line'>________________________</span></div>
      <div className='standard'>Standard
      <i className="pi pi-cog mr-2 icon" onClick={(e) => setting.current.toggle(e)}></i>
      </div>
      
      <button className='buttonStyle'> Cancel </button>
      <button className='buttonStyle'> Save and Close </button>
      {/* <Button label="Save and Close"/> */}
      <Button label="Save"/>
      <OverlayPanel
      ref={op}
      style={{width: '450px'}} className="overlaypanel-demo"
      >
<div>
<InputText type="text" className=" mb-2 w-12 inputBorder" placeholder="Untitle" /><br/>
<span className="text-400">Plural form of module name</span>
<InputText type="text" className=" mb-2 w-12 inputBorder" placeholder="Untitle" /><br/>
<span className="text-400">Singular form of module name</span><br/>
<span className="flex justify-content-end"><Button label="Done"/></span>
</div>
      </OverlayPanel>
      {/* settings */}
      <OverlayPanel
      ref={setting}
      >
     <div>Rename</div><br/>
     <div>Module Permisson</div>
      </OverlayPanel>
      </div>
    );
  }
  
  export default NavBar;
  