import './createRecruiterForm.css';
import noavathar from '../../../images/noavathar.jpg';
import { Button } from 'primereact/button';
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
        <span className="text-2xl">Create Recruiters</span>{' '}
        <span>
          <i className="pi pi-pencil"></i>
          <span className="ml-2 font-semibold">Edit</span>
        </span>
      </span>
      <div>
        <span className="ml-5 mt-5">
          {' '}
          <img src={noavathar} style={{ width: '130px' }}></img>
        </span>
        <button className="UploadButton">Upload Image</button>
      </div>
      <div className="p-8 RequirtersGrid">
        {cards.map((list: any) => {
          return (
            <div className=" px-2 backgroundStyle p-2 ">
              {' '}
              <span className="mt-2">{list.names}</span>
              <br />
              <span className="mt-3  text-600">{list.subname}</span>
            </div>
          );
        })}
      </div>
      <div className="ButtonsEnd mt-6">
        <button className="buttonStyle ml-8 mt-1" style={{ height: '39px' }}>
          {' '}
          Cancel{' '}
        </button>
        <Button label="Save" />
      </div>
    </div>
  );
};
export default CreateRecruiterForm;
