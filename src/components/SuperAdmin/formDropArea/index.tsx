import { dragAndDropValueSuperAdmin } from "../../../features/counter/dragAndDrop";

import { InputText } from "primereact/inputtext";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const FormDropArea = (props: any) => {
  const [uidv4, setuidv4] = useState<any>();
  const count: any = useSelector((state) => state);

  useEffect(() => {
    setuidv4(count.dragAndDrop.initialStartDragSuperAdmin);
  }, [count.dragAndDrop.initialStartDragSuperAdmin]);

  const handleChange = (e: any, i: number) => {
    let index: any;
    let inputName: any[] = [];
    Object.keys(uidv4 || {}).map((x: any) => {
      index = x;
    });
    if (index != null) {
      [uidv4].map((x: any) => {
        inputName = x[index];
      });
    }
    inputName = inputName.map((x: any, idx: any) => {
      if (idx === i) {
        return { ...x, names: e.target.value };
      }
      return x;
    });

    setuidv4({ [index]: inputName });
  };

  return (
    <div>
      <h1>Form Creation</h1>
      <div>
        {Object.keys(uidv4 || {}).map((list: any, i: number) => {
          return (
            <Droppable key={list} droppableId={list}>
              {(provided, snapshot) => (
                <div className="App" ref={provided.innerRef}>
                  {uidv4[list].length
                    ? uidv4[list].map((item: any, index: number) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              className="cardQuickPreview px-2"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              style={provided.draggableProps.style}
                            >
                              <div
                                className="names"
                                {...provided.dragHandleProps}
                              >
                                <input
                                  type="text"
                                  name="names"
                                  value={item.names}
                                  onChange={(e) => {
                                    handleChange(e, index);
                                  }}
                                  className="h-2rem my-auto border-none text-yellow-800"
                                />
                                <p className="grey">{item.subName}</p>
                                <p
                                  className="delete"
                                  onClick={(e) => {
                                    const objWithIdIndex = uidv4[
                                      list
                                    ].findIndex(
                                      (obj: any) => obj.id === item.id
                                    );
                                    uidv4[list].splice(objWithIdIndex, 1);
                                  }}
                                >
                                  <i className="pi pi-ellipsis-v"></i>
                                </p>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))
                    : !provided.placeholder && (
                        <span className="Appp ">Drop items here</span>
                      )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </div>
  );
};

export default FormDropArea;
