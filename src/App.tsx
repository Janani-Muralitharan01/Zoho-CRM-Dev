import React from "react";
import "./App.css";
import "primeicons/primeicons.css";
import Dashboard from "./components/layouts/Dashboard-Main/dashboard";
import NavBar from "./components/layouts/Navbar/navbar";
import SideBar from "./components/layouts/Sidebar/sidebar";

import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
} from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  dragAndDropValue,
  quickDragAndDropValue,
  dragAndDropDialogOpenIndex,
} from "./features/counter/dragAndDrop";
import {
  ITEMS,
  QUICKITEMS,
  COMPLETE,
  QUICKCREATECOMPLETE,
} from "./components/Constant/const";
import OrganizationSignup from "../src/components/Authentication/organization-signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/layouts/LoginPage/Login";
import SignUp from "./components/layouts/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />
      {/* <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }

          switch (source.droppableId) {
            case destination.droppableId:
              if (counter == 0) {
                setCompleted({
                  [destination.droppableId]: reorder(
                    complete[source.droppableId],
                    source.index,
                    destination.index
                  ),
                });
              } else {
                setQuickCreateComplete({
                  [destination.droppableId]: reorder(
                    quickCreateComplete[source.droppableId],
                    source.index,
                    destination.index
                  ),
                });
              }

              break;
            case "CHECKITEMS":
              setCompleted({
                [destination.droppableId]: copy(
                  ITEMS,
                  complete[destination.droppableId],
                  source,
                  destination
                ),
              });
              let indexOfDragable = result ? result.source.index : "";
              dispatch(dragAndDropDialogOpenIndex(indexOfDragable));

              break;
            case "QUICKCREATEITEMS":
              setQuickCreateComplete({
                [destination.droppableId]: copy(
                  QUICKITEMS,
                  quickCreateComplete[destination.droppableId],
                  source,
                  destination
                ),
              });
              break;
            default:
              if (counter == 0) {
                setCompleted(
                  move(
                    complete[source.droppableId],
                    complete[destination.droppableId],
                    source,
                    destination
                  )
                );
              } else {
                setQuickCreateComplete(
                  move(
                    quickCreateComplete[source.droppableId],
                    quickCreateComplete[destination.droppableId],
                    source,
                    destination
                  )
                );
              }

              break;
          }
        }}
      >
        <div className="App">
          <div className="container">
            <nav>
              <NavBar />
            </nav>
            <main>
              <Dashboard />
            </main>
            <div id="sidebar">
              <SideBar />
            </div>
          </div>
        </div>
      </DragDropContext> */}
    </Routes>
  );
}

export default App;
