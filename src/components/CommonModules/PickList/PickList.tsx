import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";

interface PickListProps {
  pickListDialogVisible: boolean;
}

const Picklist: React.FC<PickListProps> = ({ pickListDialogVisible }) => {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];
  const [state, setState] = useState(false);
  const [option, setOption] = useState([]);
  const [order, setOrder] = useState("");
  const [checkAlpha, setCheckAlpha] = useState("");
  const [checkRequire, setCheckRequire] = useState("");
  const [checkToolTip, setCheckToolTip] = useState("");
  const [arr, setArr] = useState(inputArr);

  useEffect(() => {
    setState(pickListDialogVisible);
  }, [pickListDialogVisible]);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
  ];

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

  const onValueChange = (e: any) => {
    setOrder(e.target.value);
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

  return (
    <div className="flex">
      <Dialog
        header="Pick List Properties"
        visible={state}
        style={{ width: "50vw" }}
        position="top"
        onHide={() => setState(false)}
      >
        <p>
          Field Label <br />
          <input type="text" />
        </p>
        <h4>Pick List Option</h4>
        <section>
          {arr.map((item, i: any) => {
            return (
              <section className="surface-100">
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
        <p>Select default value </p>
        <Dropdown
          value={option}
          options={cities}
          optionLabel="name"
          placeholder="-None-"
        />
        <p>Enable history tracking for picklist values.</p>
        <p>Sort order preference</p>
        <p>
          <input
            type="radio"
            name="enter_order"
            id="12"
            value="Entered order"
            onChange={onValueChange}
          />
          <label>Entered order</label>
          <input
            type="radio"
            name="enter_order"
            id="12"
            value="Alphabetical order"
            onChange={onValueChange}
          />
          <label>Alphabetical order</label>
        </p>
        <p className=" bg-blue-100 p-2 border-round border-1 border-blue-500">
          {order == "Entered order"
            ? "Values will be sorted alphabetically in respective languages."
            : "The order customized here will be followed in List views, reports and dashboards where sorting is applied for the picklist field."}
        </p>
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
        <div className="currencyProperties_cancel">
          <p className="">Don't save this field.</p>
          <Button label="Done" onClick={() => setState(!state)} />
        </div>
      </Dialog>
    </div>
  );
};

export default Picklist;
