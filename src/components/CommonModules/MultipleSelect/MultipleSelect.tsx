import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import "./MultipleSelect.css";
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";

interface MultipleSelectProps {
  dialogVisible: boolean;
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({ dialogVisible }) => {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [state, setState] = useState(false);
  const [checkAlpha, setCheckAlpha] = useState("");
  const [checkRequire, setCheckRequire] = useState("");
  const [checkToolTip, setCheckToolTip] = useState("");
  const [val, setVal] = useState([]);
  const [option, setOption] = useState([]);
  const [arr, setArr] = useState(inputArr);
  const [checked, setChecked] = useState(false);

  const addInput = () => {
    setArr((s: any) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };
  var k = 1;
  const handlerCheck = (e:any) =>{
    console.log(e,"ee")
    setChecked(!checked)
    }
  const deleteinput = (i:any) =>{
  const deleteVal = [ ...arr]
      deleteVal.splice(i,1)
      setArr(deleteVal)
  }
  const handleChange = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  useEffect(() => {
    setState(dialogVisible);
  }, [dialogVisible]);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
  ];

  return (
    <div>
      <Dialog
        visible={state}
        onHide={() => setState(false)}
        position="top"
        header="Multi Pick List Properties"
      >
        <p className="multiSelect_feild_lable">
          <label>Field Label</label>
          <input type="text" />
        </p>

        <p className="multiSelect_option">
          Multi Pick List Option
          <i className="pi pi-cog"></i>
        </p>
        <section className="multipleSelectDialogOption_main">
          {arr.map((item, i: any) => {
            return (
              <section className="multipleSelectDialogOption">
                <input
                  onChange={handleChange}
                  value={item.value}
                  id={i}
                  placeholder= {" Options" +""+ k++} 
                  type={item.type}
                />
                <i className="pi pi-plus "  onMouseEnter={() => "hello"} onClick={addInput}></i>
                <i className="pi pi-minus" onClick= { () => deleteinput(i)}></i>
              </section>
            );
          })}
        </section>
        <section>
          <p>
            <input
              type="checkbox"
              value="alphabetically"
              name="alphabetically"
              onChange={(event) => setCheckAlpha(event.target.value)}
            ></input>
            Display values alphabetically, instead of in the order entered.
          </p>

          <p>
            <input
              type="checkbox"
              value="Required"
              name="Required"
              onChange={(event) => setCheckRequire(event.target.value)}
            ></input>
            Required
          </p>

          <p>
            {" "}
            <Checkbox inputId="binary" checked={checked} onChange={handlerCheck} />
            <label className="ml-1">Show Tooltip</label>{" "}
          </p>
          {checked?<div><InputTextarea placeholder="Type tooltip message"/></div>:""}
        </section>

        <p>Select default value</p>

        <Dropdown
          value={option}
          options={cities}
          optionLabel="name"
          placeholder="-None-"
        />

        <div className="multiSelect_cancel">
          <p className="">Don't save this field.</p>
          <Button label="Done" onClick={() => setState(!state)} />
        </div>
      </Dialog>
    </div>
  );
};

export default MultipleSelect;
