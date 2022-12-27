import { dragAndDropValueSuperAdmin } from "../../../features/counter/dragAndDrop";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./FormDropArea.css";

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
    <div className="mx-auto">
      <div className="flex justify-content-between ">
        <h3>Form Creation</h3>
        <div className="flex align-items-center">
          <i className="pi pi-pencil" style={{ fontSize: "1em" }}></i>
          <p className="ml-1">Edit</p>
        </div>
      </div>
      <div>
        {Object.keys(uidv4 || {}).map((list: any, i: number) => {
          return (
            <Droppable key={list} droppableId={list}>
              {(provided, snapshot) => (
                <div className="FormDropArea" ref={provided.innerRef}>
                  {uidv4[list].length
                    ? uidv4[list].map((item: any, index: number) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              className="FormDropAreaMain px-2"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              style={provided.draggableProps.style}
                            >
                              <div
                                className="FormDropAreaCard"
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
                                <section className="grey py-2">
                                  {item.subName}
                                </section>
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

      <div className="mt-7 flex text-left justify-content-end">
        <Button label="Cancel" className="p-button-secondary" />
        <Button label="Save" className="p-button-secondary ml-2" />
        <Button label="Preview" className="p-button-secondary ml-2" />
      </div>
    </div>
  );
};

export default FormDropArea;
