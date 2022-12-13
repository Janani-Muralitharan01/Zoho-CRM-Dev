import './quickCreate.css'
import { useState, useRef ,useEffect} from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
const QuickCreate = () => {
  const [sidebar, setSidebar] = useState(false);
  const [selectedCity1, setSelectedCity1] = useState(null);
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
        const onCityChange = (e: any) => {
          setSelectedCity1(e.value);
        };
        const cities = [{ name: 'Admistrator', code: 'NY' }];
        function handlerClick() {
          setSidebar(!sidebar);
        }
     return (
          <div>
               <h5 className='previewQuick' onClick={handlerClick}>Preview</h5>
          <div className='boder-StyleQuick'>
          {cards.map(button=>  
          <div className='cardQuick'><span className='namesQuick'>{button.names}<span className='subName'>{button.subName}</span> </span>
          </div>
         )}</div>
         <Sidebar
        visible={sidebar}
        position="top"
        style={{ width: '45vw',height: '27vw' }}
        onHide={() => setSidebar(!sidebar)}
      >
        <div>
        <div className="flex  justify-content-center">
            <div className="dropdownBorderStyle">
              <span className="flex ">
                <span className='mt-2'>Preview layout as</span>
                <Dropdown
                  className="ml-2 border-noround"
                  value={selectedCity1}
                  options={cities}
                  onChange={onCityChange}
                  optionLabel="name"
                  placeholder="Administrator"
                />
              </span>
              {/* <Footer cards={cards} /> */}
            </div>
          </div>
          <div className='border-black-alpha-30 border-1 pb-7'>
          <span className='sidebarheader font-medium'>Quick Create</span>
          <div >
        {cards.map((button: any)=>  
               <div className='card border-0 mt-3 ml-7'><span className='names' >{button.names}<InputText className='w-8'/> </span> </div>
              )}</div></div>
          </div>


      </Sidebar>
         </div>
     );
   }
   
   export default QuickCreate;