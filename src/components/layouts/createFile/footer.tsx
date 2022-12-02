import './create.css'
const Footer = () => {
    

     const buttonNames = [
          {
          names : 'Secondary email',
         
          id : 1,
          },
          {
            names : 'Untitled Name',
           
            id : 2,
          },
          {
            names : 'Untitled Owner',
            
            id : 3,
          },
          {
            names : 'Email Opt Out',
            
            id : 4,
          },
          {
            names : 'Email',
            
            id : 5,
          },
          {
            names : 'Created By',
            
            id : 6,
          },
          
         
        ]
     return (
          
          <div className='boder-Style'>
               {buttonNames.map(button=>  
               <div className='card'><span className='names'>{button.names}</span></div>
              )}</div>
     );
   }
   
   export default Footer;