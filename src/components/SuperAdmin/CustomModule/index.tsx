
import Edit from "../../../assets/edit.png";
import Add from "../../../assets/add.png";
import Actions from "../../../assets/actions.png";
import { Sidebar } from "primereact/sidebar";
import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import noImages from "../../../images//noimage.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { useLocation } from "react-router-dom";
import {
     NewModuleCreation,
     ModuleNameGetFormsaa,
   } from "../../../features/Modules/module";
 

const CustomModule = (props: any) => {
     const [state, setState] = React.useState<any>([
         
     ])
  const count: any = useSelector((state) => state);
  const dispatch = useAppDispatch();
  const [previewData, setPreviewData] = useState<any>();
  console.log(previewData,"previewData")
  const [checked1, setChecked1] = useState(false);
  const location = useLocation();
  const { from } = location.state;
  const { form } = location.state;
  const { name } = location.state;
  const { id } = location.state;
  console.log(form,"formformformform")

  function handleChange(evt:any) {
     const value = evt.target.value;
     setState({
          
       ...state,
       [evt.target.name]: value
     });
     
   }

//   useEffect(() => {
//      // eslint-disable-next-line no-lone-blocks
//      {from?.map((item: any, index: number) => {
//           state.push(item.DataHeader)
//      })}
//      setState(state)
//   }, []);
 ;
 const saveForm = async () => {
     let payload: object = {
          _id:id,
               modulename: name,
               recuriter:form,
               tableDate:{
                    tableData:[{data:state}]
               }
               
     }
     const res = await dispatch(NewModuleCreation(payload));
     let back = await dispatch(ModuleNameGetFormsaa(id));
 }
  return (
    <div>
     
        <div>
          <div className="border-black-alpha-30 border-1 pb-7">
            <span className="contactName ">Create Untitled</span>
            <span className="contactuntitle">Untitled Image</span>
            <span className="ml-5">
              <img
                src={noImages}
                style={{ width: " 56px", height: "50px" }}
              ></img>
            </span>
            <span className="contactuntitle">Untitled Information</span>
            <div>
              <div>
                {/* {Object.keys(previewData || []).map((list: any, i: number) => {
                  return ( */}
                    <div  className="previewCardAligment">
                    {/* {form} */}
                      {from?.map((item: any, index: number) => {

                        return (
                          <div key={index}>
                            <div className="card border-0 mt-3 ml-7">
                              <div className="names">
                                <p className="grey">{item.DataHeader}</p>
                                {item.DataHeader === "Untitled Owner" ? (
                                  <span className="p-input-icon-right ">
                                    <i className="pi pi-lock mt-0" />
                                    <InputText
                                    name={item.DataHeader} value={state.Owner}
                                    onChange={handleChange}
                                      className="mt-3"
                                    />
                                  </span>
                                ) : item.DataHeader === "Lookup" ? (
                                  <span className="p-input-icon-right ">
                                    <i className="pi pi-euro mt-0" />
                                    <InputText className="mt-3"  />
                                  </span>
                                ) : item.DataHeader === "Currency" ? (
                                  <span className="p-input-icon-left">
                                    <i className="pi pi-dollar mt-0" />
                                    <InputText className="mt-3 "  name={item.DataHeader} value={state.Currency}
                                    
                                    onChange={handleChange}/>
                                  </span>
                                ) : item.DataHeader === "Percent" ? (
                                  <p>
                                    <InputText name={item.DataHeader} value={state.Percent}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "Untitled Name" ? (
                                  <p>
                                    <InputText name={item.DataHeader} value={state.Name}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "Created By" ? (
                                  <p>
                                    <InputText name={item.DataHeader} value={state.Created}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "Secondary Email" ? (
                                  <p>
                                    <InputText name={item.DataHeader} value={state.Email}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "Image Upload" ? (
                                  <p>
                                    <Button
                                      label="+ New Image"
                                      className="bg-blue-100 text-primary"
                                    />
                                  </p>
                                ) : item.DataHeader === "Email" ? (
                                  <p>
                                    <InputText name={item.DataHeader} value={state.Email}
                                    
                                     onChange={handleChange}/>
                                  </p>
                                ) : item.DataHeader === "File Upload" ? (
                                  <p>
                                    {/* <Dropdown
                                      className="mr-6"
                                      value={selectedCity1}
                                      options={fileUpload}
                                      onChange={onCityChange}
                                      optionLabel="name"
                                      style={{ width: "99%" }}
                                      placeholder="Select a file"
                                    /> */}
                                  </p>
                                ) : item.DataHeader === "Email Opt Out" ? (
                                  <p>
                                    <Checkbox value={item.value} />
                                  </p>
                                ) : item.DataHeader === "Modified By" ? (
                                  <p>
                                    <InputText  name={item.DataHeader} value={state.Email}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "Date/Time" ? (
                                  <p>
                                    <Calendar
                                     name={item.DataHeader} value={state.Email}
                                      showTime
                                      
                                      showSeconds
                                      placeholder="Enter the date"
                                    />
                                  </p>
                                ) : item.DataHeader === "Decimal" ? (
                                  <p>
                                    <InputText name={item.DataHeader} value={state.Decimal}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "URL" ? (
                                  <p>
                                    <InputText  name={item.DataHeader} value={state.URL}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "Multi-Line" ? (
                                  <p>
                                    <InputTextarea name={item.DataHeader} value={state.Multi}
                                    
                                    onChange={handleChange} />
                                  </p>
                                ) : item.DataHeader === "Date" ? (
                                  <p>
                                    <Calendar name={item.DataHeader} value={item.Date} onChange={handleChange} placeholder="DD/MM/YY   " />
                                  </p>
                                ) : item.DataHeader === "Checkbox" ? (
                                  <div className="grid p-fluid">
                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={checked1} onChange={(e) => setChecked1(!checked1)} />
                            </span>
                            <InputText placeholder="Username"/>
                        </div>
                    </div></div>
                                ) : item.DataHeader === "Phone" ? (
                                  <p>
                                    {" "}
                                    <InputMask
                                      id="phone"
                                      mask="99-99-99-99-99"
                                      name={item.DataHeader}
                                      value={state.lastName}
                                      onChange={handleChange}
                                      placeholder="(999) 999-9999"
                                    ></InputMask  >
                                  </p>
                                ) : item.DataHeader === "Long integer" ? (
                                  <p>
                                    <InputText  value={item.DataHeader} />
                                  </p>
                                ) : item.DataHeader === "Number" ? (
                                  <p>
                                    <InputText  value={item.DataHeader} />
                                  </p>
                                ) : item.DataHeader === "User" ? (
                                  <span className="p-input-icon-right ">
                                    {/* <Dropdown
                                      className="mr-6"
                                      value={selectedCity1}
                                      options={cities}
                                      onChange={onCityChange}
                                      optionLabel="name"
                                      style={{ width: "99%" }}
                                      placeholder="Select a City"
                                    /> */}
                                  </span>
                                ) : (
                                  <InputText
                                    type="text"
                                    name="DataHeader"
                                    value={item.DataHeader}
                                    onChange={(e) => {}}
                                    
                                    className="h-2rem my-auto"
                                  />
                                )}
                              </div>
                            </div>
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
                  {/* );
                 })} */}
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default React.memo(CustomModule);
