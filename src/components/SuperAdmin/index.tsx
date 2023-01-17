import "./index.css";
import React, { useState, useEffect } from "react";

import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
} from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import {
  ITEMS,
  QUICKITEMS,
  COMPLETE,
  QUICKCREATECOMPLETE,
} from "../Constant/const";

import {
  dragAndDropValue,
  quickDragAndDropValue,
  dragAndDropDialogOpenIndex,
  dragAndDropValueSuperAdmin,
  dragAndDropDialogIndexSuperAdmin,
} from "../../features/counter/dragAndDrop";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./navBar";
import CreateForm from "./createForm";
import { useParams } from "react-router-dom";
import { pickListDragableIdStore } from "../../features/counter/dragAndDrop";
import { ModuleNameGetForms } from "../../features/Modules/module";
import { newSectionIndexData } from "../../features/counter/dragAndDrop";
import { Button } from "primereact/button";

const reorder = (
  list: Iterable<unknown> | ArrayLike<unknown>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const copy = (
  source: Iterable<unknown> | ArrayLike<unknown>,
  destination: Iterable<unknown> | ArrayLike<unknown>,
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item: any = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuidv4() });
  return destClone;
};

const move = (
  source: Iterable<unknown> | ArrayLike<unknown>,
  destination: Iterable<unknown> | ArrayLike<unknown>,
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const SuperAdmin = () => {
  const { editId } = useParams();
  const [id, setId] = useState();

  const [complete, setCompleted] = useState<any>({
    [uuidv4()]: [],
  });
  const [indexId, setIndexId] = useState<any>();
  const count: any = useSelector((state) => state);

  useEffect(() => {
    if (window.location.pathname !== `/super-admin/edit/${editId}`) {
      dispatch(dragAndDropValueSuperAdmin(complete));
    }

    if (
      window.location.pathname === `/super-admin/edit/${editId}` &&
      count.module.rolesGetForms === undefined
    ) {
      dispatch(dragAndDropValueSuperAdmin(complete));
    }

    if (
      window.location.pathname === `/super-admin/edit/${editId}` &&
      count.module.rolesGetForms !== undefined
    ) {
      let totalValue = count.module?.rolesGetForms;
      let keyValue;
      for (let key in totalValue[0]?.moduleelements) {
        keyValue = totalValue[0]?.moduleelements[key];
      }
      let arrayValue = [];
      let arrayVal: any = [];
      for (let val in keyValue) {
        arrayValue.push(keyValue[val]);
        arrayVal.push(val);
      }
      let lastValue: any = [];
      arrayVal.map((x: any) => {
        ITEMS.map((i: any) => {
          if (x == i.names) {
            lastValue.push(i);
          }
        });
      });

      for (let key in complete) {
        setCompleted({ [key]: lastValue });
      }

      dispatch(dragAndDropValueSuperAdmin(complete));
    }

    Object.keys(complete || {}).map((list: any, i: number) => {
      complete[list].map((x: any) => {
        if (x.subName === "Pick List") {
          dispatch(pickListDragableIdStore(x.id));
        }
      });
    });
  }, [complete]);

  function toAddData() {}

  const handleClick = (e: any) => {
    setId(e);
  };

  const addList = () => {
    setCompleted({ ...complete, [uuidv4()]: [] });
    let lent = Object.keys(complete).length;
    dispatch(newSectionIndexData(lent));
  };

  const dispatch = useDispatch();

  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }

          switch (source.droppableId) {
            case destination.droppableId:
              // if (counter == 0) {
              setCompleted({
                [destination.droppableId]: reorder(
                  complete[source.droppableId],
                  source.index,
                  destination.index
                ),
              });

              break;
            case "CHECKSUPERDRAGITEMS":
              setCompleted({
                ...complete,
                [destination.droppableId]: copy(
                  ITEMS,
                  complete[destination.droppableId],
                  source,
                  destination
                ),
              });

              let indexOfDragable = result ? result.source.index : "";
              dispatch(dragAndDropDialogIndexSuperAdmin(indexOfDragable));
              setIndexId(indexOfDragable);

              break;

            default:
              // if (counter == 0) {
              setCompleted(
                move(
                  complete[source.droppableId],
                  complete[destination.droppableId],
                  source,
                  destination
                )
              );

              break;
          }
        }}
      >
        {/* <NavBar handleClick={handleClick} /> */}
        {window.location.pathname == "/super-admin/create-form" ? (
          ""
        ) : (
          <NavBar handleClick={handleClick} />
        )}
        {/* <SettingsModules handleClick={handleClick} someProps="hssjs" /> */}
        <div className="layout h-full">
          <div className="sideContent">
            {/* <SuperAdminSideBar handleClick={handleClick} /> */}
          </div>
          <div style={{ background: "#FAFAFB", height: "100vh" }}>
            <div className="mainContent">
              {/* {id === 1 ? (
                <CreateRecruiterForm />
              ) : id === 2 ? (
                <CreateRecrutierTable />
              ) : id === 4 ? (
                <CandidateTable />
              ) : id === 5 ? (
                <CreateForm />
              ) : id === 7 ? (
                <CandidateList />
              ) : id === 8 ? (
                <StatusTable />
              ) : id === 9 ? (
                <Settings />
              ) : id === 10 ? (
                <SettingsModules handleClick={handleClick} />
              ) : id === 11 ? (
                <ModuleScreen />
              ) : (
                ""
              )} */}

              {window.location.pathname == "/super-admin" ? (
                <h2 className=" flex align-items-center justify-content-center">
                  Dashboard
                </h2>
              ) : (
                ""
              )}
              {window.location.pathname == "/super-admin/create-form" ? (
                <>
                  <CreateForm />
                  <div className="w-4 -mt-8  flex justify-content-center">
                    <Button
                      label="+ Add New Section"
                      onClick={() => addList()}
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              {window.location.pathname == `/super-admin/edit/${editId}` ? (
                <CreateForm />
              ) : (
                ""
              )}
              {/* <StatusTable />
              <Settings /> */}

              {/* <Routes>
                <Route path="/super-admin/settings" element={<Settings />} />
              </Routes> */}
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};
export default React.memo(SuperAdmin);
