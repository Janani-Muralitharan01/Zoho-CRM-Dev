import "./create.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import UntitleImage from "../createFile/create";
import { useSelector, useDispatch } from "react-redux";
import MultipleSelect from "../../CommonModules/MultipleSelect/MultipleSelect";
import Picklist from "../../CommonModules/PickList/PickList"
import CurrencyProperties from "../../CommonModules/CurrencyProperties/CurrencyProperties";
import LookUp from "../../CommonModules/LookUp/LookUp";
import AutoNumber from "../../CommonModules/AutoNumber/AutoNumber";
import Formula from "../../CommonModules/Formula/Formula";

const Footer = ({ cards }: any, items: any) => {
  const count: any = useSelector((state) => state);
  const [name, setName] = useState("");
  const [uidv4, setUidv4] = useState<any>();
  const [listId, setListId] = useState<any>();

  useEffect(() => {
    setUidv4(count.dragAndDrop.initialStateDrag);

    let index: any;
    let inputName: any;
    Object.keys(count.dragAndDrop.initialStateDrag || {}).map((x: any) => {
      index = x;
    });
    if (index != null) {
      [count.dragAndDrop.initialStateDrag].map((x: any) => {
        inputName = x[index];
      });
    }
  }, [count.dragAndDrop.initialStateDrag]);

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
    setUidv4({ [index]: inputName });
  };

  return (
    <div>
      <section>
        <div className="boder-Style">
          <h5 className="informationName">Untitled Information</h5>

          <div className="">
            {Object.keys(uidv4 || []).map((list: any, i: number) => {
              return (
                <Droppable key={list} droppableId={list}>
                  {(provided, snapshot) => (
                    <div className="App" ref={provided.innerRef}>
                      {uidv4[list].length
                        ? uidv4[list].map((item: any, index: number) => {
                            return (
                              <>
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
                                          type="text"
                                          name="names"
                                          value={item.names}
                                          onChange={(e) => {
                                            handleChange(e, index);
                                          }}
                                          className="h-2rem my-auto"
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
                                            uidv4[list].splice(
                                              objWithIdIndex,
                                              1
                                            );
                                          }}
                                        >
                                          <i className="pi pi-ellipsis-v"></i>
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                                {item.names == "Multi-Select" ? (
                                  <MultipleSelect dialogVisible={true} />
                                ) : items.names == "Pick List" ? (
                                  <Picklist pickListDialogVisible ={true} />
                                ) : item.names == "Currency" ? (
                                  <CurrencyProperties
                                    currencyDialogVisible={true}
                                  />
                                ) : item.names == "Lookup" ? (
                                  <LookUp lookUpDialogVisible={true} />
                                ) : item.names == "Auto-Number" ? (
                                  <AutoNumber AutoNumberDialogVisible={true} />
                                ) : item.names == "Formula" ? (
                                  <Formula FormulaDialogVisible={true} />
                                ) : (
                                  ""
                                )}
                              </>
                            );
                          })
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
    </div>
  );
};

export default Footer;
