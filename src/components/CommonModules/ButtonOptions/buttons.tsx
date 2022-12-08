import { useState, useEffect } from "react";
import "./buttons.css";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Draggable from "react-draggable";
import ReplicateButton from "../ReplicateButton/ReplicateButton";
import { useSelector, useDispatch } from "react-redux";

interface ButtonOptionsProps {
  name: string;
  icon: string;
  id: number;
}

const ButtonOptions: React.FC<ButtonOptionsProps> = ({ name, icon }) => {
  //   console.log("Buttonname", name);
  //   console.log("Buttonicon", icon);
  const [isDragged, setIsDragged] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = useSelector((state: any) => state);
  useEffect(() => {
    setActiveIndex(count.user.indexValue);
    console.log("count.user.indexValue", count.user.indexValue);
  }, [count.user.indexValue]);

  const onStart = (event: any, data: any) => {
    // console.log("HELLO");
    // console.log({ event });
    // console.log({ data });
    setIsDragged(true);
  };

  return (
    <div className={isDragged ? "rectangleMainBox" : ""}>
      {isDragged && (
        <div
          className={activeIndex == 1 ? "rectangleboxQuick" : "rectanglebox"}
        >
          <img className="imagedesign height" src={icon}></img>
          <div>{name}</div>
        </div>
      )}
      <Draggable
        onStart={(event, data) => {
          console.log(event, "onStart", data, "isDragged", isDragged);
          onStart(event, data);
        }}
        onDrag={(event, data) => {
          console.log(data, "onDrag", event, "isDragged", isDragged);
        }}
        onStop={(event, data) => {
          console.log(event, "onStop", data, "isDragged", isDragged);
          setIsDragged(true);
        }}
      >
        <div>
          {isDragged && <ReplicateButton buttonName={name} icon={icon} />}
          {!isDragged && (
            <div
              className={
                activeIndex == 1 ? "rectangleboxQuick" : "rectanglebox"
              }
            >
              <img className="imagedesign height" src={icon}></img>
              <div>{name}</div>
            </div>
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default ButtonOptions;
