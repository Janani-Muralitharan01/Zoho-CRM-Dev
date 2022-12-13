import "./create.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

const Footer = ({ cards }: any, items: any) => {
  const count: any = useSelector((state) => state);
  const [name, setName] = useState("");
  const [uidv4, setUidv4] = useState<any>();

  useEffect(() => {
    setUidv4(count.dragAndDrop.initialStateDrag);
    console.log("count", count);
  }, [count.dragAndDrop.initialStateDrag]);

  return (
    <section>
      <div className="boder-Style">
        <h5 className="informationName">Untitled Information </h5>

        <div className="">
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
                                className="card px-2"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                style={provided.draggableProps.style}
                              >
                                <div
                                  className="names"
                                  {...provided.dragHandleProps}
                                >
                                  <input
                                    type={"text"}
                                    name="name"
                                    value={name}
                                    onChange={() => setName(item.names)}
                                    className="h-2rem my-auto"
                                  />
                                  <p className="grey">{item.names}</p>
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
    </section>
  );
};

export default Footer;
