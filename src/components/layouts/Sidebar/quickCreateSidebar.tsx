
import './sidebar.css'
import singleline from '../../../assets/singleline.svg'
import File from '../../../images/file.png'
import SearchFile from '../../../images/searchFile.png'
import email from '../../../images/email.png'
const QuickCreateSidebar = () => {
     const cards = [
          
          {
            names : 'Untitled Owner',
            icon: SearchFile,
           
            id : 1,
          },
          {
            names : 'secondary Email',
            icon:email,
            id : 2,
          },
          {
               names : 'Email opt out',
               icon:File,
               id : 2,
             },
          
         
        ]
     return (
     <div>
          <div className='nameOne margin-10'>Available Fields</div>
          <div className="name bg-green-500 margin-10">Untitled Information</div><br/>
          {cards.map(button=>  
          <div className='cardSidebar margin-10'><span className='cardbottomstyle'><img src={button.icon} className='margin-10'></img><span className='nameThree'>{button.names}</span></span>
          </div>)}
          </div>
     );
   }
   
   export default QuickCreateSidebar;
   