import "./create.css";
import Draggable from "react-draggable";
import previewTopSideBar from "./previewTopSideBar";
// interface props{
//   data:any;
// }

const Footer = ({ cards }: any) => {
  // const cards = [
  //   {
  //     names: "Secondary email",
  //     subname: " Single Line",

  //     id: 1,
  //   },
  //   {
  //     names: "Untitled Name",
  //     subname: " Single Line",
  //     id: 2,
  //   },
  //   {
  //     names: "Untitled Owner",
  //     subname: " Single Line",
  //     id: 3,
  //   },
  //   {
  //     names: "Email Opt Out",
  //     subname: " Email",
  //     id: 4,
  //   },
  //   {
  //     names: "Email",
  //     subname: " Email",
  //     id: 5,
  //   },
  //   {
  //     names: "Created By",
  //     subname: " Single Line",
  //     id: 6,
  //   },

  // ];

  return (
    <div className="boder-Style">
      <h5 className="informationName">Untitled Information</h5>
      {/* {cards.map((button) => (
        <div className="card">
          <span className="names">
            {button.names} <span className="grey">{button.subname} </span>
            <i className="pi pi-ellipsis-v"></i>
          </span>{" "}
        </div>
      ))} */}
      <Draggable
        defaultPosition={{ x: 25, y: 25 }}
        position={{ x: 25, y: 35 }}
        onStart={(event, data) => {
          console.log(event, "onStart", data, "isDragged");
        }}
        onDrag={(event, data) => {
          console.log(data, "onDrag", event, "isDragged");
        }}
        onStop={(event, data) => {
          console.log(event, "onStop", data, "isDragged");
        }}
      >
        {/* <div className="card">
          <span className="names">
            Secondary email<span className="grey">Single Line </span>
            <i className="pi pi-ellipsis-v"></i>
          </span>
        </div> */}
        <div>
          {/* {cards.map((button: any) => (
            <div className="card">
              <span className="names">
                {button.names} <span className="grey">{button.subname} </span>
                <i className="pi pi-ellipsis-v"></i>
              </span>{" "}
            </div>
          ))} */}
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{ x: 25, y: 25 }}
        onStart={(event, data) => {
          console.log(event, "onStart", data, "isDragged");
        }}
        onDrag={(event, data) => {
          console.log(data, "onDrag", event, "isDragged");
        }}
        onStop={(event, data) => {
          console.log(event, "onStop", data, "isDragged");
        }}
      >
        <div className="card">
          <span className="names">
            Untitled Owner <span className="grey">Single Line </span>
            <i className="pi pi-ellipsis-v"></i>
          </span>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{ x: 25, y: 25 }}
        onStart={(event, data) => {
          console.log(event, "onStart", data, "isDragged");
        }}
        onDrag={(event, data) => {
          console.log(data, "onDrag", event, "isDragged");
        }}
        onStop={(event, data) => {
          console.log(event, "onStop", data, "isDragged");
        }}
      >
        <div className="card">
          <span className="names">
            Untitled Name <span className="grey">Single Line </span>
            <i className="pi pi-ellipsis-v"></i>
          </span>
        </div>
      </Draggable>

      <Draggable
        defaultPosition={{ x: 25, y: 25 }}
        onStart={(event, data) => {
          console.log(event, "onStart", data, "isDragged");
        }}
        onDrag={(event, data) => {
          console.log(data, "onDrag", event, "isDragged");
        }}
        onStop={(event, data) => {
          console.log(event, "onStop", data, "isDragged");
        }}
      >
        <div className="card">
          <span className="names">
            Email Opt Out<span className="grey">Email </span>
            <i className="pi pi-ellipsis-v"></i>
          </span>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{ x: 25, y: 25 }}
        onStart={(event, data) => {
          console.log(event, "onStart", data, "isDragged");
        }}
        onDrag={(event, data) => {
          console.log(data, "onDrag", event, "isDragged");
        }}
        onStop={(event, data) => {
          console.log(event, "onStop", data, "isDragged");
        }}
      >
        <div className="card">
          <span className="names">
            Email <span className="grey">Email </span>
            <i className="pi pi-ellipsis-v"></i>
          </span>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{ x: 25, y: 25 }}
        onStart={(event, data) => {
          console.log(event, "onStart", data, "isDragged");
        }}
        onDrag={(event, data) => {
          console.log(data, "onDrag", event, "isDragged");
        }}
        onStop={(event, data) => {
          console.log(event, "onStop", data, "isDragged");
        }}
      >
        <div className="card">
          <span className="names">
            Created By<span className="grey">Single Line </span>
            <i className="pi pi-ellipsis-v"></i>
          </span>
        </div>
      </Draggable>
    </div>
  );
};

export default Footer;
