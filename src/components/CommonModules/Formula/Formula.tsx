import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import "./Formula.css";

interface FormulaProps {
  FormulaDialogVisible: boolean;
}

const Formula: React.FC<FormulaProps> = ({ FormulaDialogVisible }) => {
  const [state, setState] = useState(false);
  const [checkToolTip, setCheckToolTip] = useState("");

  useEffect(() => {
    setState(FormulaDialogVisible);
  }, [FormulaDialogVisible]);

  return (
    <div className="formula_Main">
      <Dialog
        visible={state}
        style={{ width: "50vw" }}
        position="top"
        onHide={() => setState(false)}
      >
        <p className="formulaMainContent">
          The formula will not be retroactively applied to existing records. To
          apply the formula to existing records you will need to select the
          records and manually update them.
        </p>
        <div className="flex">
          <p>
            Field Label <br />
            <input type="text" />
          </p>
          <p>
            Formula Return Type
            <br />
            <input type="text" />
          </p>
          <p className="ml-2">
            Number of decimal places
            <br />
            <input type="text" />
          </p>
        </div>

        <div className="formulaCard ">
          <p>Function Usage :</p>
          <tr>
            Function : <span>Abs</span>
          </tr>
          <tr>
            Description : <span>Returns the absolute value of the number.</span>
          </tr>
          <tr>
            Syntax : <span>Abs(number)</span>
          </tr>
          <tr>
            Example :
            <span>
              Abs(-42) gives result as 42 ; Abs(+33) gives result as 33
            </span>
          </tr>
        </div>
        <div className="mt-3">
          <label>Formula Expression</label>
          <br />
          <textarea rows={4} cols={60}></textarea>
        </div>

        <button className="mt-2">Check Syntax</button>

        <p>
          <input
            type="checkbox"
            value="toolTip"
            name="toolTip"
            onChange={(event) => setCheckToolTip(event.target.value)}
          ></input>
          Show Tooltip
        </p>

        <div className="currencyProperties_cancel">
          <p className="">Don't save this field.</p>
          <Button label="Done" onClick={() => setState(!state)} />
        </div>
      </Dialog>
    </div>
  );
};

export default Formula;
