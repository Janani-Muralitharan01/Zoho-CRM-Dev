import "./CreateForm.css";
import Edit from "../../../assets/edit.png";
import Add from "../../../assets/add.png";
import Actions from "../../../assets/actions.png";

const TopBars = (props: any) => {
  return (
    <div className="topBanners_main flex">
      <div className="flex align-items-center">
        <img src={Add} width={14} height={14} />
        <p className="ml-1" onClick={() => props.onclick("addinputs")}>
          {" "}
          Add Inputs
        </p>
      </div>
      <div
        className="flex align-items-center mx-5"
        onClick={() => props.onclick("edit")}
      >
        <img src={Edit} width={14} height={14} />
        <p className="ml-1">Edit</p>
      </div>
      <div
        className="flex align-items-center mx-5"
        onClick={() => props.onclick("create")}
      >
        <img src={Actions} width={14} height={14} />
        <p className="ml-1">Create</p>
      </div>

      <div
        className="flex align-items-center mr-5"
        onClick={() => props.onclick("auickActions")}
      >
        <img src={Actions} width={14} height={14} />
        <p className="ml-1">Quick Actions</p>
      </div>

      <div
        className="flex align-items-center"
        onClick={() => props.onclick("preview")}
      >
        <img src={Actions} width={14} height={14} />
        <p className="ml-1">Preview</p>
      </div>
    </div>
  );
};

export default TopBars;
