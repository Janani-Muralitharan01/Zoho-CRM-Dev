import { InputSwitch } from "primereact/inputswitch";
import { Avatar } from "primereact/avatar";
import Footer from "./footer";
import { useState, useRef, useEffect } from "react";
import noImages from "../../../images/noimage.jpg";
import "./create.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useSelector, useDispatch } from "react-redux";
import { iteratorSymbol } from "immer/dist/internal";

const UntitleImage = () => {
  const count: any = useSelector((state) => state);
  const [preview, setPreview] = useState();
  const [checked1, setChecked1] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [selectedCity1, setSelectedCity1] = useState(null);
  const op: any = useRef(null);
  const [previewData,setPreviewData] = useState<any>()
  console.log(previewData,"previewData")
  
  useEffect(() => {
    setPreviewData(count.dragAndDrop.initialStateDrag);
    console.log("count33", count.dragAndDrop.initialStateDrag);
    // if(uidv4?.names == 'Multi-Select'){
    //   console.log("hello")
    // }
  }, [count.dragAndDrop.initialStateDrag]);
  const cards = [
    {
      names: "Secondary email",
      subname: " Single Line",

      id: 1,
    },
    {
      names: "Untitled Name",
      subname: " Single Line",
      id: 2,
    },
    {
      names: "Untitled Owner",
      subname: " Single Line",
      id: 3,
    },
    {
      names: "Email Opt Out",
      subname: " Email",
      id: 4,
    },
    {
      names: "Email",
      subname: " Email",
      id: 5,
    },
    {
      names: "Created By",
      subname: " Single Line",
      id: 6,
    },
  ];

  const onCityChange = (e: any) => {
    setSelectedCity1(e.value);
  };
  const cities = [{ name: "Admistrator", code: "NY" }];
  function handlerClick() {
    
    {Object.keys(previewData || []).map((list:any, i:number) =>{
      previewData[list]?.map((item:any,index:number) =>{
        {item.names === "Multi-Select"?setSidebar(false):setSidebar(true)}
    //  console.log(item.names,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",sidebar)

    //     if(item.names.includes("Multi-Select")){
    //       if(item.names === "Multi-Select"){
            
    //         setSidebar(false);
    //         console.log("hello",sidebar)
    //       }
          
    //     }
        
      })
    })}
   
  }
  const handletoggle = (e: any) => {
    setChecked1(!checked1);
  };
  return (
    <div>
      <div className="untitlee">
        <div className="boder">
          <span>
            Untitle image{" "}
            <InputSwitch checked={checked1} onChange={handletoggle} />
            <br />
            {checked1}
            {checked1 ? (
              <div>
                <span className="mr-2">
                  <img
                    src={noImages}
                    style={{ width: " 96px", height: "74px" }}
                  ></img>
                </span>
                <span className="ellips" onClick={(e) => op.current.toggle(e)}>
                  <i className="pi pi-ellipsis-h mr-2"></i>
                </span>
              </div>
            ) : (
              ""
            )}
            <div>
              {/* <Avatar icon="pi pi-user mr-3" size="xlarge" className="p-overlay-badge"/> */}
            </div>
          </span>
        </div>
        <div className="preview" onClick={handlerClick}>
          preview
        </div>
      </div>
      <Sidebar
        visible={sidebar}
        position="top"
        style={{ width: "92vw", height: "50vw" }}
        onHide={() => setSidebar(!sidebar)}
      >
        <div>
          <div className="flex  justify-content-center">
            <div className="dropdownBorderStyle">
              <span className="flex">
                Preview layout as
                <Dropdown
                  className="ml-2"
                  value={selectedCity1}
                  options={cities}
                  onChange={onCityChange}
                  optionLabel="name"
                  placeholder="Select a City"
                />
              </span>
              {/* <Footer cards={cards} /> */}
            </div>
          </div>
          <div className="border-black-alpha-30 border-1 pb-7">
            <span className="contactName ">Create Untitled</span>
            <span className="contactuntitle">Untitled Image</span>

            <span className="ml-5">
              <img
                src={noImages}
                style={{ width: " 56px", height: "50px" }}
              ></img>
            </span>
            <span className="contactuntitle">Untitled Information</span>
            <div>
              {/* {cards.map((button: any) => (
                <div className="card border-0 mt-3 ml-7">
                  <span className="names">
                    {button.names}
                    <InputText className="w-8" />{" "}
                  </span>{" "}
                </div>
              ))} */}
              <div >
      {Object.keys(previewData || []).map((list: any, i: number) => {
        return (
          <div key={i} className="previewCardAligment">
            
            { previewData[list]?.map((item: any, index: number) => {
              console.log(item,"item")
              
              if(item.names=="Multi-Select"){
              console.log("jeeyyyy")
              
              }
              return (
                <div key={index} >
                  <div className="card border-0 mt-3 ml-7">
                  <span className="names">
                    {item.names==''}
                    {item.names}
                    
                    <InputText className="w-8" />{" "}
                  </span>{" "}
                </div>
                </div>
              );
            })}

                     </div>
        );
      })}
    </div>
            </div>
          </div>
        </div>
      </Sidebar>
      <OverlayPanel ref={op}>
        <div>
          Set Permisson <span></span>
        </div>
      </OverlayPanel>
      <div>
        <Footer cards={cards} />
      </div>
    </div>
  );
};

export default UntitleImage;
