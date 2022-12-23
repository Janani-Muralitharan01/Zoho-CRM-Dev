import React from "react";
import "./App.css";
import "primeicons/primeicons.css";
import Dashboard from "./components/layouts/Dashboard-Main/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/layouts/LoginPage/Login";
import Selection from "./components/layouts/SelectionPage/Selection";
import SignUp from "./components/layouts/SignUp/SignUp";
import { AuthRoute } from "../src/components/AuthRoute/AuthRoute";
import SuperAdmin from "./components/SuperAdmin";
import CreateRecruiterForm from "./components/SuperAdmin/createRecruiterForm/index";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<AuthRoute />}> */}
      <Route >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
      </Route>
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
