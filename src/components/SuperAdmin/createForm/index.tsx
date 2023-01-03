import SideBar from "./sideBar";
import DropArea from "./dropArea";
import TopBars from "./topBars";
import AddInputs from "./addInputs";
import Arrow from "../../../assets/arrow.png";
import "./CreateForm.css";
import { useState } from "react";

const CreateForm = () => {
  const [show, setshow] = useState("");

  const Atclick = (data: any) => {
    setshow(data);
  };
  return (
    <div className="mx-3">
      <div className="flex align-items-center justify-content-start">
        <h2 className="create_form_main_head ml-2">Create Form</h2>
      </div>
      <div>
        <TopBars onclick={Atclick} />
      </div>
      <div className="flex mt-3 create_form_main">
        <SideBar />
        <div className="create_form_main_division">
          {" "}
          {show == "addinputs" ? <AddInputs /> : <DropArea />}
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
