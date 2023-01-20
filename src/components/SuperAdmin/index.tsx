import "./index.css";
import React, { useState, useEffect } from "react";
import SuperAdminSideBar from "./superAdminSideBar";
import CreateRecruiterForm from "./createRecruiterForm";
import CreateRecrutierTable from "./createRecruiterTable";
import CandidateTable from "./CandidateTable";
import StatusTable from "./StatusTable";
import Dashboard from "../layouts/Dashboard-Main/dashboard";
import FormCreation from "./formCreation";
import SideBar from "../layouts/Sidebar/sidebar";
import SettingsModules from "../SuperAdmin/Modules/index";
import LayoutPage from "../SuperAdmin/Layout/index";
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
import { ModuleNameGetFormsaa } from "../../features/Modules/module";
import { newSectionIndexData } from "../../features/counter/dragAndDrop";
import { Button } from "primereact/button";
import { type } from "os";

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
  console.log(
    "destination",
    destination,
    "droppableSource",
    droppableSource,
    "droppableDestination",
    droppableDestination
  );
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
  const [sample, setSample] = useState<any>({});

  const addList = () => {
    setCompleted({ ...complete, [uuidv4()]: [] });
    let lent = Object.keys(complete).length;
    dispatch(newSectionIndexData(lent));
  };

  useEffect(() => {
    console.log("useeffect", complete);
  }, [complete]);

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

    if (window.location.pathname === `/super-admin/edit/${editId}`) {
      let totalValue = count.module?.rolesGetForms;

      let value = Object.assign({}, totalValue[0]?.moduleelements);
      const value1 = Object.assign({}, complete);

      let res1 = Object.keys(value);
      let res2 = Object.keys(value1);

      res1.map((x, i) => {
        if (res2.length === i) {
          let ab: any = [uuidv4()];
          complete[ab] = [];
        }
      });

      for (let key in value) {
        value[uuidv4()] = value[key];
        delete value[key];
      }

      console.log("value", value);
      console.log("complete", complete);

      let keyss = Object.keys(complete);

      let valuess = Object.values(value);
      console.log("valuess", valuess);
      console.log("keyss", keyss);
      let resObj: any = {};
      keyss.map((ke: any, idx: any) => {
        resObj[ke] = valuess[idx];
      });

      console.log(resObj, "resObj");

      if (Object.values(complete)[0] === Object.values(resObj)[0]) {
        console.log(
          "iffff",
          Object.values(complete)[0],
          Object.values(value)[0]
        );
      } else {
        console.log("else", resObj);
        setCompleted(resObj);
      }

      // let lastValue: any = [];
      // arrayVal.map((x: any) => {
      //   ITEMS.map((i: any) => {
      //     if (x == i.names) {
      //       lastValue.push(i);
      //     }
      //   });
      // });

      // for (let key in complete) {

      //   setCompleted({ [key]: lastValue });
      // }

      // let lent = Object.keys(complete).length;
      // dispatch(newSectionIndexData(lent));

      dispatch(dragAndDropValueSuperAdmin(complete));
    }

    // Object.keys(complete || {}).map((list: any, i: number) => {
    //   complete[list].map((x: any) => {
    //     if (x.subName === "Pick List") {
    //       dispatch(pickListDragableIdStore(x.id));
    //     }
    //   });
    // });
  }, [complete]);

  function toAddData() {}

  const handleClick = (e: any) => {
    setId(e);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => {
          console.log("result", result);
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
        {window.location.pathname == "/super-admin/LayoutPage" ? (
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

              {window.location.pathname ==
              "/super-admin/Settings/Modules/layoutpage" ? (
                <CreateForm />
              ) : (
                ""
              )}

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
