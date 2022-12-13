import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./sidebar.css";
import ButtonOptions from "../../CommonModules/ButtonOptions/buttons";
import singleline from "../../../assets/singleline.svg";
import onetwothree from "../../../assets/123.svg";
import autonum from "../../../assets/autonum.svg";
import check from "../../../assets/check.svg";
import currency from "../../../assets/currency.svg";
import date from "../../../assets/date.svg";
import dateandtime from "../../../assets/dateandtime.svg";
import decimal from "../../../assets/decimal.svg";
import fileupload from "../../../assets/fileupload.svg";
import fx from "../../../assets/fx.svg";
import imageupload from "../../../assets/imageupload.svg";
import longint from "../../../assets/longint.svg";
import lookup from "../../../assets/lookup.svg";
import mail from "../../../assets/mail.svg";
import multiline from "../../../assets/multiline.svg";
import multiselect from "../../../assets/multiselect.svg";
import multilookup from "../../../assets/multi-lookup.svg";
import percent from "../../../assets/percent.svg";
import phone from "../../../assets/phone.svg";
import picklist from "../../../assets/picklist.svg";
import user from "../../../assets/user.svg";
import subform from "../../../assets/subform.svg";
import url from "../../../assets/url.svg";
import rect from "../../../assets/rect.svg";
import { InputText } from "primereact/inputtext";
import { color } from "@mui/system";
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
} from "../../../features/counter/dragAndDrop";

const SideBar = () => {
  const [search, setsearch] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const count: any = useSelector((state) => state);

  const [uidv4, setUidv4] = useState<any>();

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dragAndDropValue(uidv4));
  }, [uidv4]);

  useEffect(() => {
    setActiveIndex(count.user.indexValue);
  }, [count.user.indexValue]);

  useEffect(() => {
    setUidv4(count.dragAndDrop.initialStateDrag);
  }, [count.dragAndDrop.initialStateDrag]);

  const addList = (e: any) => {
    setUidv4({ [uuidv4()]: [] });
  };
  const handleSearch = (e: any) => {
    setsearch(!search);
  };

  const ITEMS = [
    {
      names: "Single Line",
      icon: singleline,
      id: uuidv4(),
    },
    {
      names: "Multi-Line",
      icon: multiline,
      id: uuidv4(),
    },
    {
      names: "Email",
      icon: mail,
      id: uuidv4(),
    },
    {
      names: "Phone",
      icon: phone,
      id: uuidv4(),
    },
    {
      names: "Pick List",
      icon: picklist,
      id: uuidv4(),
    },
    {
      names: "Multi-Select",
      icon: multiselect,
      id: uuidv4(),
    },
    {
      names: "Date",
      icon: date,
      id: uuidv4(),
    },
    {
      names: "Date/Time",
      icon: dateandtime,
      id: uuidv4(),
    },
    {
      names: "Number",
      icon: onetwothree,
      id: uuidv4(),
    },
    {
      names: "Auto-Number",
      icon: autonum,
      id: uuidv4(),
    },
    {
      names: "Currency",
      icon: currency,
      id: uuidv4(),
    },
    {
      names: "Decimal",
      icon: decimal,
      id: uuidv4(),
    },
    {
      names: "Percent",
      icon: percent,
      id: uuidv4(),
    },
    {
      names: "Long integer",
      icon: longint,
      id: uuidv4(),
    },
    {
      names: "Checkbox",
      icon: check,
      id: uuidv4(),
    },
    {
      names: "URL",
      icon: url,
      id: uuidv4(),
    },
    {
      names: "Lookup",
      icon: lookup,
      id: uuidv4(),
    },
    {
      names: "Formula",
      icon: fx,
      id: uuidv4(),
    },
    {
      names: "User",
      icon: user,
      id: uuidv4(),
    },
    {
      names: "File Upload",
      icon: fileupload,
      id: uuidv4(),
    },
    {
      names: "Image Upload",
      icon: imageupload,
      id: uuidv4(),
    },
    {
      names: "Multi-Select Lookup",
      icon: multilookup,
      id: uuidv4(),
    },
    {
      names: "Subform",
      icon: subform,
      id: uuidv4(),
    },
    {
      names: "NEW SECTION",
      icon: rect,
      id: uuidv4(),
    },
  ];

  const AvailableButtonNames = [
    {
      names: "Single Line",
      icon: singleline,
      id: 1,
    },
    {
      names: "Multi-Line",
      icon: multiline,
      id: 2,
    },
    {
      names: "Email",
      icon: mail,
      id: 3,
    },
  ];

  return (
    <div>
      {activeIndex === 0 ? (
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>New Fields</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Droppable droppableId="ITEMS" isDropDisabled={true}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    className="text-blue-500 alignTwo"
                  >
                    {ITEMS.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <>
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={provided.draggableProps.style}
                              className="rectanglebox white-space-nowrap"
                            >
                              <img
                                className="imagedesign height"
                                src={item.icon}
                              ></img>
                              {item.names}
                            </div>
                            {snapshot.isDragging && (
                              <span className="rectanglebox white-space-nowrap">
                                <img
                                  className="imagedesign height"
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

              {/* <section className="text-blue-500 bg-green-300">
                <div onClick={addList}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                    />
                  </svg>
                  <span>Add List</span>
                </div>

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
                                      className="App"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      style={provided.draggableProps.style}
                                    >
                                      <div className="text-pink-400 flex">
                                        <section
                                          className="App"
                                          {...provided.dragHandleProps}
                                        >
                                          <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                            />
                                          </svg>
                                        </section>
                                        <input
                                          type={"text"}
                                          name="name"
                                          value={name}
                                          onChange={() => setName(item.content)}
                                        />
                                        <p> {item.content}</p>
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
                                          ...
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
              </section> */}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Unused Fields</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-gray-50">
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ) : activeIndex === 1 ? (
        <div>
          {search ? (
            <div className="nameOne margin-10 mt-3 justify-content-between flex">
              Available Fields{" "}
              <span onClick={handleSearch}>
                <i className="pi pi-search mr-2"></i>
              </span>
            </div>
          ) : (
            <div className="justify-content-between flex mt-3">
              <InputText
                type="text"
                className=" mb-2 w-10 "
                style={{ background: "#3b3f42" }}
                placeholder="search"
              />
              <span onClick={handleSearch}>
                <i className="pi pi-times mr-2 text-50 mt-2"></i>
              </span>
            </div>
          )}

          <div className="name  margin-10 ">Untitled Information</div>
          <br />

          <div>
            {AvailableButtonNames.map((button) => (
              <ButtonOptions
                name={button.names}
                icon={button.icon}
                id={button.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <span className="nameOne margin-10">Related List</span>
          <span className="detail margin-10">
            All available related lists have been selected.{" "}
          </span>
        </div>
      )}
    </div>
  );
};

export default SideBar;
