import { SIDEBARITEMS } from "../../Constant/const";
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
} from "react-beautiful-dnd";
import "./FormSideBar.css";

const FormSideBar = (props: any) => {
  return (
    <div className="surface-300 min-h-screen ">
      <Droppable droppableId="CHECKSUPERDRAGITEMS" isDropDisabled={true}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="text-blue-500 alignTwo gap-2 mx-1"
          >
            {SIDEBARITEMS.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                      className="rectanglebox1 white-space-nowrap"
                    >
                      <img
                        className="imagedesign1 height1"
                        src={item.icon}
                      ></img>
                      {item.names}
                    </div>
                    {snapshot.isDragging && (
                      <span className="rectanglebox1 white-space-nowrap">
                        <img
                          className="imagedesign1 height1"
                          src={item.icon}
                        ></img>
                        {item.names}
                      </span>
                    )}
                  </>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};
export default FormSideBar;
