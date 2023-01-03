import SideBar from "./sideBar";
import DropArea from "./dropArea";
import TopBars from "./topBars";
import Arrow from "../../../assets/arrow.png";
import "./CreateForm.css";

const CreateForm = () => {
  return (
    <div className="mx-3">
      <div className="flex align-items-center justify-content-start">
        
        <h2 className="create_form_main_head ml-2">Create Form</h2>
      </div>
      <TopBars />
      <div className="flex mt-3 create_form_main">
        <SideBar />
        <DropArea />
      </div>
    </div>
  );
};

export default CreateForm;
