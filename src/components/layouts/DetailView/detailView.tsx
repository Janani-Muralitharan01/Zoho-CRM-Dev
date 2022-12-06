import { InputSwitch } from 'primereact/inputswitch';
import './detailView.css';
import { useState, useEffect } from "react";
const DetailView = () => {
const [checked1, setChecked1] = useState(true);
  const cards = [
    {
      names: 'Untitled Owner',
      subName: 'Look Up',

      id: 1,
    },
    {
      names: 'Modified By',
      subName: 'Single line',
      id: 2,
    },
    {
      names: 'Email',
      subName: 'Email',
      id: 2,
    },
  ];

  const Attachments = [
    {
      names: 'File Name',

      id: 1,
    },
    {
      names: 'Attached By',

      id: 2,
    },
    {
      names: 'Date Added',

      id: 2,
    },
    {
      names: 'Size',

      id: 2,
    },
  ];

  const checklist = [
     {
       names: 'Checklist details',
 
       id: 1,
     },
     {
       names: 'Completed by',
 
       id: 2,
     },
    
   ];
  const Emails = [
    {
      names: 'Received By',

      id: 1,
    },
    {
      names: 'Subject',

      id: 2,
    },
    {
      names: 'Owned By',

      id: 3,
    },
    {
      names: 'Date',

      id: 4,
    },
    {
      names: 'Sent By',

      id: 5,
    },
    {
      names: 'Source',

      id: 6,
    },

    {
      names: 'Status',

      id: 8,
    },
  ];
  return (
    <div>
      <div className="TextOne">
        <span>BUSINESS CARD <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></span>
        <span className="customize">Customize</span>
      </div>
      <div>
      {cards.map((button) => (
        <div className="cardQuick">
          <span className="namesQuick">
            {button.names}
            <span className="subName">{button.subName}</span>
          </span>
        </div>
        
      ))}
      <span className="TextOne">
          {/* <i className="pi pi-info-circle"></i> */}
          You can add up to 5 fields to your Business Card.</span>
      </div>
      <br />
      <div>
        {' '}
        <span className="TextOne">DETAILS</span>
        <br />
        <span className="supportLine">
          Fields customized in the Create page will appear here.
        </span>
      </div>
      <br />
      <span className="TextOne">RELATED LIST</span>
      <br /><br/>
      <div>
      <div className='hoverborder'>
        <span className="TextOne "><b>Notes</b></span>
        <br />
        <span className="supportLine">This List cannot be customized..</span></div>
      </div>
      <div className='hoverborder top-margin'>
      <span className="TextOne "><b>Attachments</b></span>
      <br />
      <div className="supportCard">
        {Attachments.map((list) => (
          <div>
            <span className="namesDetail">{list.names} </span>
          </div>
        ))}
      </div></div>
      <div className='hoverborder top-margin'>
      <span className="TextOne"><b>Emails</b></span>
      <br />
      <div className="supportCard">
        {Emails.map((list) => (
          <div>
            <span className="namesDetail">{list.names} </span>
          </div>
        ))}
      </div></div>
      
        <div className='hoverborder top-margin'>
        <span className="Texttwo "> 
          <b>Open Activities</b><span className='customizeStyle'>customise</span>
        </span>
        <br />
        <span className="TextOne">This List preview cannot be shown</span>
      </div>
      
        <div className='hoverborder top-margin'>
        <span className="Texttwo">
        <b>Closed Activitie</b><span className='customizeStyle'>customise</span>
        </span>
        <br />
        <span className="TextOne">This List preview cannot be shown</span>
      </div>
      <br />
      <div className='hoverborder top-margin'>
      <span className="TextOne "><b>Checklists</b></span>
      <br />
      <div className="supportCard">
        {checklist.map((list) => (
          <div>
            <span className="namesDetail">{list.names} </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default DetailView;
