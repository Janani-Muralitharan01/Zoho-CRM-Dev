import './createRecruiterForm.css';
import noavathar from '../../../images/Group.png';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
const CreateRecruiterForm = () => {
   const cards = [
    {
      names: 'Full Name',
      subname: ' Basheer',

      id: 1,
    },
    {
      names: 'Designation',
      subname: ' Software Engineer',
      id: 2,
    },
    {
      names: 'Date of Birth',
      subname: ' Sep 5th',
      id: 3,
    },
    {
      names: 'Gender',
      subname: ' Male',
      id: 4,
    },
    {
      names: 'Phone number',
      subname: ' 987654321',
      id: 5,
    },
    {
      names: 'Email Address',
      subname: ' basheer@squashapps.com',
      id: 6,
    },
  ];
  return (
    <div>
      <span className="flex justify-content-between p-5">
        <span className="text-2xl">Add Recruiters</span>{' '}
        {/* <span>
          <i className="pi pi-pencil"></i>
          <span className="ml-2 font-semibold">Edit</span>
        </span> */}
      </span>
      <div >
      <div className='flex align-items-center ml-8'>
        <span className="ml-5 mt-5">
          {' '}
          <img src={noavathar} style={{ width: '130px' }}></img>
        </span>
        <button className="UploadButton ml-5">Upload Image</button>
      </div>
      
      
      </div>
       <div className="p-8 RequirtersGrid">
         {cards.map((list: any) => {
          return (
            <div className=" px-2 backgroundStyle p-2 ">
              {' '}
              <div>
              <span className="mt-2 " style={{color: '#8083A3'}}>{list.names}</span>
              <br />
              <span className="mt-2 flex text-800" style={{color: '#171721'}}>{list.subname}</span>
            </div></div>
          );
        })} 
         {/* <InputText placeholder='User Name' /> */}
      </div>  
       <div className="ButtonsEnd mt-6">
        <button className="buttonStyle ml-8 " style={{ height: '41px' }}>
          {' '}
          Cancel{' '}
        </button>
        
        <Button label="Save" />
      </div> 
    </div>
  );
};
export default CreateRecruiterForm;
