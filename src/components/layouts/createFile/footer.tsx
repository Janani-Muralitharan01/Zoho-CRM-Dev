import './create.css'
const Footer = () => {
     const cards = [
          {
          names : 'Secondary email',
          subname:' Single Line',
         
          id : 1,
          },
          {
            names : 'Untitled Name',
            subname:' Single Line',
            id : 2,
          },
          {
            names : 'Untitled Owner',
            subname:' Single Line',
            id : 3,
          },
          {
            names : 'Email Opt Out',
            subname:' Email',
            id : 4,
          },
          {
            names : 'Email',
            subname:' Email',
            id : 5,
          },
          {
            names : 'Created By',
            subname:' Single Line',
            id : 6,
          },
          
         
        ]
     return (
          
          <div className='boder-Style'>
               <h5 className='informationName'>Untitled Information</h5>
               {cards.map(button=>  
               <div className='card'><span className='names'>{button.names} <span className="grey">{button.subname} </span><i className="pi pi-ellipsis-v"></i></span> </div>
              )}</div>
     );
   }
   
   export default Footer;