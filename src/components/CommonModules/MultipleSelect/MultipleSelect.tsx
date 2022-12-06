import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import "./MultipleSelect.css";
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
                  type={item.type}
                />
                <i className="pi pi-plus " onClick={addInput}></i>
                <i className="pi pi-minus"></i>
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
            <input
              type="checkbox"
              value="toolTip"
              name="toolTip"
              onChange={(event) => setCheckToolTip(event.target.value)}
            ></input>
            Show Tooltip{" "}
          </p>
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
