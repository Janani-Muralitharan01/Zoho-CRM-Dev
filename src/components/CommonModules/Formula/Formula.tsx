import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import "./Formula.css";

interface FormulaProps {
  FormulaDialogVisible: boolean;
}

const Formula: React.FC<FormulaProps> = ({ FormulaDialogVisible }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(FormulaDialogVisible);
  }, [FormulaDialogVisible]);

  return (
    <div className="formula_Main">
      <Dialog
        header="The formula will not be retroactively applied to existing records. To
      apply the formula to existing records you will need to select the
      records and manually update them."
        visible={state}
        style={{ width: "50vw" }}
        position="top"
        onHide={() => setState(false)}
      >
        <p>
          Field Label <br />
          <input type="text" />
        </p>
      </Dialog>
    </div>
  );
};

export default Formula;
