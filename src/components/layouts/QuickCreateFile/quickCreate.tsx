import './quickCreate.css'
const QuickCreate = () => {
     const cards = [
          
          {
            names : 'Untitled Name',
            subName:'single Line',
           
            id : 1,
          },
          {
            names : 'Email',
            subName:'Email',
            id : 2,
          },
          
         
        ]
     return (
          <div>
               <h5 className='previewQuick'>Preview</h5>
          <div className='boder-StyleQuick'>
          {cards.map(button=>  
          <div className='cardQuick'><span className='namesQuick'>{button.names}<span className='subName'>{button.subName}</span> </span>
          </div>
         )}</div></div>
     );
   }
   
   export default QuickCreate;