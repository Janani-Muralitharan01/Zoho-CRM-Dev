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
  dragAndDropTotalValue,
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
        names: "Multi-Select Lookup",
        id: uuidv4(),
      },
      {
        names: "Subform",
        id: uuidv4(),
      },
      {
        names: "NEW SECTION",
        id: uuidv4(),
      },
    ],
  });
  const count = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dragAndDropValue(complete));
  }, [complete]);

  const ITEMS = [
    {
      names: "Single Line",

      id: uuidv4(),
    },
    {
      names: "Multi-Line",

      id: uuidv4(),
    },
    {
      names: "Email",

      id: uuidv4(),
    },
    {
      names: "Phone",

      id: uuidv4(),
    },
    {
      names: "Pick List",

      id: uuidv4(),
    },
    {
      names: "Multi-Select",

      id: uuidv4(),
    },
    {
      names: "Date",

      id: uuidv4(),
    },
    {
      names: "Date/Time",

      id: uuidv4(),
    },
    {
      names: "Number",

      id: uuidv4(),
    },
    {
      names: "Auto-Number",

      id: uuidv4(),
    },
    {
      names: "Currency",

      id: uuidv4(),
    },
    {
      names: "Decimal",

      id: uuidv4(),
    },
    {
      names: "Percent",

      id: uuidv4(),
    },
    {
      names: "Long integer",

      id: uuidv4(),
    },
    {
      names: "Checkbox",

      id: uuidv4(),
    },
    {
      names: "URL",

      id: uuidv4(),
    },
    {
      names: "Lookup",

      id: uuidv4(),
    },
    {
      names: "Formula",

      id: uuidv4(),
    },
    {
      names: "User",

      id: uuidv4(),
    },
    {
      names: "File Upload",

      id: uuidv4(),
    },
    {
      names: "Image Upload",

      id: uuidv4(),
    },
    {
      names: "Multi-Select Lookup",
      id: uuidv4(),
    },
    {
      names: "Subform",
      id: uuidv4(),
    },
    {
      names: "NEW SECTION",
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
              setCompleted({
                [destination.droppableId]: reorder(
                  complete[source.droppableId],
                  source.index,
                  destination.index
                ),
              });

              break;
            case "ITEMS":
              setCompleted({
                [destination.droppableId]: copy(
                  ITEMS,
                  complete[destination.droppableId],
                  source,
                  destination
                ),
              });

              break;
            default:
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
