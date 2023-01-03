import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "primereact/button";

const DropArea = () => {
  const [uidv4, setuidv4] = useState<any>();
  const count: any = useSelector((state) => state);
  const [sidebar, setSidebar] = useState(false);
  const [selectedCity1, setSelectedCity1] = useState(null);

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
  function handlerClick() {
    // {
    //   Object.keys(previewData || []).map((list: any, i: number) => {
    //     previewData[list]?.map((item: any, index: number) => {
    //       {
    //         item.names === "Multi-Select"
    //           ? setSidebar(false)
    //           : setSidebar(true);
    //       }
    //     });
    //   });
    // }
    setSidebar(!sidebar);
  }
  const onCityChange = (e: any) => {
    setSelectedCity1(e.value);
  };
  const fileUpload = [
    { name: "Upload File", code: "NY" },
    { name: "document", code: "NY" },
  ];
  const cities = [{ name: "Admistrator", code: "NY" }];
  return (
    <div className="">
      <div className="FormDiv1">
        {Object.keys(uidv4 || {}).map((list: any, i: number) => {
          return (
            <Droppable key={list} droppableId={list}>
              {(provided, snapshot) => (
                <div className="" ref={provided.innerRef}>
                  {uidv4[list].length
                    ? uidv4[list].map((item: any, index: number) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              className=" px-2 mt-3"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              style={provided.draggableProps.style}
                              {...provided.dragHandleProps}
                            >
                              <section className="grey py-2">
                                {item.subName}
                              </section>
                              <div className=" py-1">
                                <input
                                  type="text"
                                  name="names"
                                  value={item.names}
                                  onChange={(e) => {
                                    handleChange(e, index);
                                  }}
                                  className="h-2rem w-30rem my-auto border-none text-yellow-800 p-3"
                                />
                                {/* <section className="grey py-2">
                                  {item.subName}
                                </section> */}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))
                    : !provided.placeholder && (
                        <span className="Appp">Drop items here</span>
                      )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>

      {/* <div className="mt-7 flex text-left justify-content-end">
        <Button label="Cancel" className="p-button-secondary" />
        <Button label="Save" className="p-button-secondary ml-2" />
        <Button
          label="Preview"
          className="p-button-secondary ml-2"
          onClick={handlerClick}
        ></Button>
      </div> */}

      <div className="flex  justify-content-end">
        <Button label="Cancel" className="p-button-secondary mr-4" />
        <Button label="Save" />
      </div>
    </div>
  );
};

export default DropArea;
