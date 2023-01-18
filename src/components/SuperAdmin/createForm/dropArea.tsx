import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { dragAndDropDialogIndexSuperAdmin } from "../../../features/counter/dragAndDrop";
import { ITEMS } from "../../Constant/const";
import Picklist from "../../CommonModules/PickList/PickList";
import {
  NewModuleCreation,
  ModuleNameUpdate,
} from "../../../features/Modules/module";
import { object } from "yup";
import { useAppDispatch } from "../../../app/hooks";
import SingleLine from "../Dialogs/singleLine";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router";
import { LoginUserDetails } from "../../../features/Auth/userDetails";
import { Dropdown } from "primereact/dropdown";
import { useParams } from "react-router-dom";

interface formModel {
  name: string;
  id: string;
}

const DropArea = (props: any) => {
  let { editId } = useParams();
  const [uidv4, setuidv4] = useState<any>();
  const count: any = useSelector((state) => state);
  const [formName, setFormName] = useState<any>([{ name: "", id: "" }]);
  const [moduleName, setModuleName] = useState<any>();
  const [array, setArray] = useState<any>([]);
  const [sidebar, setSidebar] = useState(false);
  const [date, setDate] = useState<Date | Date[] | undefined>(new Date());
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [pickList, setPickList] = useState<any>();
  const dispatch = useAppDispatch();
  const toast: any = useRef(null);
  const navigate = useNavigate();
  const [list1, setList1] = useState<any>([]);
  const [editArray, setEditArray] = useState<any>();
  const [finaValue, setFinalValue] = useState<object>();

  useEffect(() => {
    setModuleName(props.moduleValue);
  }, [props.moduleValue]);

  useEffect(() => {
    if (count.dragAndDrop.newSectionIndex >= formName.length) {
      setFormName([...formName, { name: "" }]);
    }
  }, [count.dragAndDrop.newSectionIndex]);

  useEffect(() => {
    if (
      !count.module.rolesGetForms &&
      window.location.pathname !== `/super-admin/edit/${editId}`
    ) {
      setuidv4(count.dragAndDrop.initialStartDragSuperAdmin);
    }

    if (window.location.pathname == `/super-admin/edit/${editId}`) {
      // let totalValue = count.module.rolesGetForms[0].moduleelements;
      // let keyValue;
      // for (let key in totalValue) {
      //   keyValue = totalValue[key];
      //   setEditArray(totalValue[key]);
      // }
      // let arrayValue = [];
      // let arrayVal = [];
      // for (let val in keyValue) {
      //   arrayValue.push(keyValue[val]);
      //   arrayVal.push(val);
      // }

      setuidv4(count.dragAndDrop.initialStartDragSuperAdmin);
    }
  }, [count.dragAndDrop.initialStartDragSuperAdmin]);

  const add = async () => {
    let index: any;
    let inputName: any[] = [];
    Object.keys(count.dragAndDrop.initialStartDragSuperAdmin || {}).map(
      (x: any) => {
        index = x;
      }
    );

    if (index != null) {
      [count.dragAndDrop.initialStartDragSuperAdmin].map((x: any) => {
        inputName = x[index];
      });
    }

    inputName = inputName.map((x: any, idx: any) => {
      if (x.id === count.dragAndDrop.pickListDragableId) {
        return { ...x, picklist: count.dragAndDrop.PickListData };
      }
      return x;
    });
  };

  useEffect(() => {
    GetModuleName();
  }, []);

  const GetModuleName = async () => {
    let res = await dispatch(LoginUserDetails());
  };

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

  const onCityChange = (e: any) => {
    setSelectedCity1(e.value);
  };

  const openDialog = () => {
    let value = ITEMS[count.dragAndDrop.DialogIndex];

    if (value) {
      if (value.names === "Pick List") {
        return <Picklist pickListDialogVisible={true} />;
      } else if (value.names === "Single Line") {
        return <SingleLine SingleLineDialogVisible={true} />;
      }
    }
  };

  const saveForm = async () => {
    let val: object = {};

    const value = Object.assign(
      {},
      count.dragAndDrop.initialStartDragSuperAdmin
    );
    formName.map((f: formModel, i: number) => {
      value[f.name] = value[f.id];
      delete value[f.id];
    });

    let payload: object = {
      modulename: moduleName,
      recuriter: count?.userValue?.roles?.id,
      moduleelements: value,
    };

    let res;
    if (window.location.pathname === `/super-admin/edit/${editId}`) {
      let val = {
        payload: payload,
        editId: editId,
      };

      res = await dispatch(ModuleNameUpdate(val));
    } else {
      res = await dispatch(NewModuleCreation(payload));
    }

    if (res.payload.status == 200) {
      navigate("/super-admin");
    }
  };
  useEffect(() => {
    if (count.module.rolesGetForms) {
      let val = Object.keys(count.module.rolesGetForms[0]?.moduleelements);
      // setFormName(val);

      let val1: any = [];
      val.map((x, i) => {
        val1.push({ name: x, id: "" });
      });

      setFormName(val1);
      setModuleName(count.module.rolesGetForms[0]?.modulename);

      // setuidv4(count.module.rolesGetForms[0]?.moduleelements);
    }
  }, [count.module.rolesGetForms]);

  var pickListValue: any = [];

  useEffect(() => {
    setList1(count.dragAndDrop.PickListData);

    add();
  }, [count.dragAndDrop.PickListData]);

  let handleChangeForm = (i: number, e: any, list: any) => {
    let newFormValues = [...formName];

    newFormValues[i].name = e.target.value;
    newFormValues[i].id = list;
    setFormName(newFormValues);
  };

  return (
    <div className="">
      <Toast ref={toast} />
      <div className="ml-8 pl-2">
        {/* <div className="grey py-2 font-semibold" style={{ color: "#333333" }}>
          Module Name
        </div>
        <input
          placeholder="Untiled form"
          className=" w-30rem my-auto border-round-md text-sm uppercase text-900"
          p-3
          style={{
            height: "52px",
            border: "1px solid lightgrey",
            color: "#333333",
            background: "#CCCCCC",
          }}
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
        /> */}
      </div>
      {/* <div className="ml-8 ">
        <div className="grey py-2 font-semibold" style={{ color: "#333333" }}>
          Submit Form Date
        </div>
        <Calendar
          placeholder="Untiled form"
          className=" w-30rem my-auto border-round-md text-sm"
          value={date}
          onChange={(e) => setDate(e.value)}
          dateFormat="dd-mm-yy"
          p-3
          disabled
          style={{
            height: "52px",
            border: "1px solid lightgrey",
            color: "#333333",
            background: "#CCCCCC",
          }}
        />
      </div> */}
      <div className="FormDiv1">
        {Object.keys(uidv4 || {}).map((list: any, i: number) => {
          return (
            <div>
              <Droppable key={list} droppableId={list}>
                {(provided, snapshot) => (
                  <div
                    className=" border-dashed border-2 w-30rem ml-8 mt-2"
                    ref={provided.innerRef}
                  >
                    <section className="mt-2 p-2  mx-auto">
                      <input
                        placeholder="Untitled form"
                        className="  mx-auto  text-sm w-28rem  text-900 border-none"
                        style={{
                          height: "48px",
                          color: "#333333",
                        }}
                        value={formName.name}
                        onChange={(e) => handleChangeForm(i, e, list)}
                      />
                    </section>

                    {
                      uidv4[list].length ? (
                        uidv4[list].map((item: any, index: number) => (
                          <div
                            //  className=" border-dashed border-2 w-30rem ml-8 mt-1"
                            className="p-2"
                          >
                            {/* <section className="ml-8 pl-2 mt-2">
                              <input
                                placeholder="Untiled form"
                                className=" w-30rem my-auto  text-sm  text-900"
                                style={{
                                  height: "52px",
                                  color: "#333333",
                                }}
                                value={formName.name}
                                onChange={(e) => handleChangeForm(i, e)}
                              />
                            </section> */}

                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  className=" cardQuickPreview  py-1 px-2 w-28rem"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  style={provided.draggableProps.style}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="names flex justify-content-between align-items-center">
                                    <section
                                      className="grey font-semibold  "
                                      // style={{ color: "#333333" }}
                                    >
                                      {item.subName}
                                    </section>
                                    {item.subName === "Pick List" ? (
                                      <>
                                        <Dropdown
                                          value={pickList}
                                          options={list1}
                                          onChange={(e) => {
                                            handleChange(e, index);
                                            setPickList(e.value);
                                          }}
                                          optionLabel="value"
                                          placeholder="Pick List"
                                          style={{
                                            height: "44px",
                                            border: "1px solid lightgrey",
                                            color: "#8083A3",
                                          }}
                                          className="  mx-auto my-auto border-round-md"
                                        />
                                      </>
                                    ) : (
                                      <input
                                        type="text"
                                        name="names"
                                        style={{
                                          height: "44px",
                                          border: "1px solid lightgrey",
                                          // color: "#8083A3",
                                        }}
                                        value={item.names}
                                        onChange={(e) => {
                                          handleChange(e, index);
                                        }}
                                        className=" text-yellow-600  my-auto border-round-md "
                                      />
                                    )}

                                    <p className="delete">
                                      <i className="pi pi-ellipsis-v"></i>
                                    </p>

                                    {/* <section
                                      className="grey py-2 font-semibold"
                                      style={{ color: "#333333" }}
                                    >
                                      {item.subName}
                                    </section> */}
                                  </div>
                                </div>
                              )}
                            </Draggable>

                            {count.dragAndDrop.DialogIndex == 5 &&
                            item.subName == "Pick List"
                              ? openDialog()
                              : item.subName == "Single Line"
                              ? openDialog()
                              : ""}
                          </div>
                        ))
                      ) : (
                        // !provided.placeholder && (
                        <div className="w-28rem mx-auto pt-4 p-2 surface-300 border-round-sm h-6rem  flex justify-content-center  mt-2">
                          <p className="">+ Drop items here</p>
                        </div>
                      )
                      // )
                    }
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>

      <div className="flex  justify-content-end mt-2 mb-3 mr-5">
        <Button
          label="Cancel"
          className="surface-300 border-300 text-color mr-5"
        />
        <Button
          label="Save"
          className="bg-primary"
          onClick={() => {
            saveForm();
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(DropArea);
