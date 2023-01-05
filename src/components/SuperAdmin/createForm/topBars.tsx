import "./CreateForm.css";
import { useState } from "react";
import Edit from "../../../assets/edit.png";
import Add from "../../../assets/add.png";
import Actions from "../../../assets/actions.png";
import { TabMenu } from 'primereact/tabmenu';

const TopBars = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(6);
  const status = (e:any) =>{
    console.log(e,"e")
    setActiveIndex(e.index)
    props.pageClick(e)
  }
  
  return (
    <div >
    <TabMenu model={props.items} activeIndex={activeIndex} onTabChange={ status} />
    </div>
    // <div className="topBanners_main flex">
    //   <div className="flex align-items-center">
    //     <img src={Add} width={14} height={14}  />
    //     <p className="ml-1 cursor-pointer" style={{ color: props.active ? "blue" : "black" }} onClick={() => props.onclick("addinputs")}>
    //       {" "}
    //       Add Inputs
    //     </p>
    //   </div>
    //   <div
    //     className="flex align-items-center mx-5"
    //     onClick={() => props.onclick("edit")}
    //   >
    //     <img src={Edit} width={14} height={14} />
    //     <p className="ml-1 cursor-pointer" style={{ color:props.active ? "black" : "blue" }}>Edit</p>
    //   </div>
    //   <div
    //     className="flex align-items-center mx-5"
    //     onClick={() => props.onclick("create")}
    //   >
    //     <img src={Actions} width={14} height={14} />
    //     <p className="ml-1">Create</p>
    //   </div>

    //   <div
    //     className="flex align-items-center mr-5"
    //     onClick={() => props.onclick("auickActions")}
    //   >
    //     <img src={Actions} width={14} height={14} />
    //     <p className="ml-1" >Quick Actions</p>
    //   </div>

    //   <div
    //     className="flex align-items-center"
    //     onClick={() => props.onclick("preview")}
    //   >
    //     <img src={Actions} width={14} height={14} />
    //     <p className="ml-1">Preview</p>
    //   </div>
    // </div>
  );
};

export default TopBars;
