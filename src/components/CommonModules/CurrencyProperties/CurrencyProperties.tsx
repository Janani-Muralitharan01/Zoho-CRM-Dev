import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import "./CurrencyProperties.css";

interface CurrencyPropertiesProps {
  currencyDialogVisible: boolean;
}

const CurrencyProperties: React.FC<CurrencyPropertiesProps> = ({
  currencyDialogVisible,
}) => {
  const [state, setState] = useState(false);
  const [checkAlpha, setCheckAlpha] = useState("");
  const [checkRequire, setCheckRequire] = useState("");
  const [checkToolTip, setCheckToolTip] = useState("");

  useEffect(() => {
    setState(currencyDialogVisible);
  }, [currencyDialogVisible]);

  return (
    <div>
      <Dialog
        header="Currency Properties"
        visible={state}
        style={{ width: "50vw" }}
        position="top"
        onHide={() => setState(false)}
      >
        <p>
          Field Label <br />
          <input type="text" />
        </p>
        <p>
          Maximum digits allowed <br />
          <input type="number" />
        </p>
        <p>
          Number of decimal places <br />
          <input type="number" />
        </p>
        <div className="Currency_Round">
          <p>
            Rounding Option <br />
            <input type="number" />
          </p>
          <p className="Currency_Precision">
            Precision <br />
            <input type="number" />
          </p>
        </div>

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
export default CurrencyProperties;
