import "./App.css";
import "primeicons/primeicons.css";
import Dashboard from "./components/layouts/Dashboard-Main/dashboard";
import Footer from "./components/layouts/Footer/footer";
import NavBar from "./components/layouts/Navbar/navbar";
import SideBar from "./components/layouts/Sidebar/sidebar";
import QuickCreateSidebar from "../src/components/layouts/Sidebar/quickCreateSidebar";
import DetailSidebar from "../src/components/layouts/Sidebar/detailsidebar";
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
} from "./features/counter/dragAndDrop";

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

function App() {
  const [complete, setCompleted] = useState<any>({
    [uuidv4()]: [
      {
        names: "Untitled Owner",
        subName: "Untitled Owner",
        id: uuidv4(),
      },
      {
        names: "Untitled Name",
        subName: "Untitled Name",
        id: uuidv4(),
      },
      {
        names: "Created By",
        subName: "Created By",
        id: uuidv4(),
      },
      {
        names: "Secondary Email",
        subName: "Secondary Email",
        id: uuidv4(),
      },
      {
        names: "Email Opt Out",
        subName: "Email Opt Out",
        id: uuidv4(),
      },
      {
        names: "Email",
        subName: "Email",
        id: uuidv4(),
      },
      {
        names: "Modified By",
        subName: "Modified By",
        id: uuidv4(),
      },
    ],
  });
  const [counter, setCounter] = useState<any>();

  const [quickCreateComplete, setQuickCreateComplete] = useState<any>({
    [uuidv4()]: [
      {
        names: "Untitled Name",
        subName: "Untitled Name",
        id: uuidv4(),
      },
      {
        names: "Email",
        subName: "Email",
        id: uuidv4(),
      },
    ],
  });

  const count = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dragAndDropValue(complete));
  }, [complete]);
  useEffect(() => {
    setCounter(count.user.indexValue);
  }, [count.user.indexValue]);
  useEffect(() => {
    dispatch(quickDragAndDropValue(quickCreateComplete));
  }, [quickCreateComplete]);

  const ITEMS = [
    {
      names: "Single Line",
      subName: "Single Line",
      id: uuidv4(),
    },
    {
      names: "Multi-Line",
      subName: "Multi-Line",
      id: uuidv4(),
    },
    {
      names: "Email",
      subName: "Email",
      id: uuidv4(),
    },
    {
      names: "Phone",
      subName: "Phone",
      id: uuidv4(),
    },
    {
      names: "Pick List",
      subName: "Pick List",
      id: uuidv4(),
    },
    {
      names: "Multi-Select",
      subName: "Multi-Select",
      id: uuidv4(),
    },
    {
      names: "Date",
      subName: "Date",
      id: uuidv4(),
    },
    {
      names: "Date/Time",
      subName: "Date/Time",
      id: uuidv4(),
    },
    {
      names: "Number",
      subName: "Number",
      id: uuidv4(),
    },
    {
      names: "Auto-Number",
      subName: "Auto-Number",
      id: uuidv4(),
    },
    {
      names: "Currency",
      subName: "Currency",
      id: uuidv4(),
    },
    {
      names: "Decimal",
      subName: "Decimal",
      id: uuidv4(),
    },
    {
      names: "Percent",
      subName: "Percent",
      id: uuidv4(),
    },
    {
      names: "Long integer",
      subName: "Long integer",
      id: uuidv4(),
    },
    {
      names: "Checkbox",
      subName: "Checkbox",
      id: uuidv4(),
    },
    {
      names: "URL",
      subName: "URL",
      id: uuidv4(),
    },
    {
      names: "Lookup",
      subName: "Lookup",
      id: uuidv4(),
    },
    {
      names: "Formula",
      subName: "Formula",
      id: uuidv4(),
    },
    {
      names: "User",
      subName: "User",
      id: uuidv4(),
    },
    {
      names: "File Upload",
      subName: "File Upload",
      id: uuidv4(),
    },
    {
      names: "Image Upload",
      subName: "Image Upload",
      id: uuidv4(),
    },
    {
      names: "Multi-Select Lookup",
      subName: "Multi-Select Lookup",
      id: uuidv4(),
    },
    {
      names: "Subform",
      subName: "Subform",
      id: uuidv4(),
    },
    {
      names: "NEW SECTION",
      subName: "NEW SECTION",
      id: uuidv4(),
    },
  ];
  const QUICKITEMS = [
    {
      names: "Single Line",
      subName: "Single Line",
      id: uuidv4(),
    },
    {
      names: "Multi-Line",
      subName: "Multi-Line",
      id: uuidv4(),
    },
    {
      names: "Email",
      subName: "Email",
      id: uuidv4(),
    },
  ];
  return (
    <>
      <DragDropContext
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
      </DragDropContext>
    </>
  );
}

export default App;
