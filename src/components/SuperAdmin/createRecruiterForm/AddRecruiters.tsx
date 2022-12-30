import './createRecruiterForm.css';
import { useState, useEffect,useRef } from 'react';
import noavathar from '../../../images/Group.png';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
const AddRecruiters = (props: any) => {
     const navigate = useNavigate();
     const toast:any = useRef(null);
     const onBasicUpload = () => {
          toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
      }
      
  return (
    <div>
      <Toast ref={toast}></Toast>
      <span className="flex m-2 ml-2">
        <span className="text-xl ml-2">Add Recruiters</span>{' '}
        {/*  */}
      </span>
      <div >
      <div className='flex align-items-center ml-8'>
        <span className="ml-5 mt-3">
          {' '}
          <img src={noavathar} style={{ width: '110px' }}></img>
        </span>
        <span className='ml-3 mt-4'>
        <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} 
         onUpload={onBasicUpload} chooseLabel="Upload"/>
        </span>
        
      </div>
      
      
      </div>
      <div className='ml-8 mt-3'>
       <div className=" RequirtersGrid ml-5">
       <span className="p-float-label">
    <InputText id="in"  style={{width: '74%'}} className="recrirtersForm mt-4"/>
    <label htmlFor="in" className='mr-3'>Username</label>
</span>
<span className="p-float-label">
    <InputText id="in"  style={{width: '74%'}} className="recrirtersForm mt-4"/>
    <label htmlFor="in">Designation</label>
</span>
<span className="p-float-label">
    <InputText id="in"  style={{width: '74%'}} className="recrirtersForm mt-4"/>
    <label htmlFor="in">Gender</label>
</span>
<span className="p-float-label">
    <InputText id="in"  style={{width: '74%'}} className="recrirtersForm mt-4"/>
    <label htmlFor="in">Date of Birth</label>
</span>
<span className="p-float-label">
    <InputText id="in"  style={{width: '74%'}} className="recrirtersForm mt-4"/>
    <label htmlFor="in">Email Address</label>
</span>
<span className="p-float-label">
    <InputText id="in"  style={{width: '74%'}} className="recrirtersForm mt-4"/>
    <label htmlFor="in">Phone Number</label>
</span>
      </div>  </div>
       <div className="ButtonsEnd mt-5">
        <button className="buttonStyle ml-8 " style={{ height: '41px' }}>
          {' '}
          Cancel{' '}
        </button>
        
        <Button label="Save" 
        onClick={(e: any) => props.handleClick()}
        />
      </div> 
    </div>
  );
};
export default AddRecruiters;
