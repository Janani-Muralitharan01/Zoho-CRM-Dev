import "./ReplicateButton.css";
import React, { useState, useEffect } from "react";
import MultipleSelect from "../MultipleSelect/MultipleSelect";
import CurrenctProperties from "../CurrencyProperties/CurrencyProperties";
import PickList from "../PickList/PickList";

interface ReplicateButtonOptions {
  buttonName: string;
  icon: string;
}

const ReplicateButton: React.FC<ReplicateButtonOptions> = ({
  buttonName,
  icon,
}) => {
  const [buttonNames, setButtonsNames] = useState("");

  useEffect(() => {
    setButtonsNames(buttonName);
    console.log(icon, "buttonName", buttonName);
  }, [buttonName]);

  return (
    <div className="designBox">
      {buttonName === "Multi-Select" ? (
        <div>
          <MultipleSelect dialogVisible={true} />
          <div className="designBoxSub">
            <input
              type="text"
              value={buttonNames}
              onChange={(e) => setButtonsNames(e.target.value)}
              className="ReplicateInputBox"
            />
            <p className="ReplicateLable">{buttonName}</p>
            <p className="apple">...</p>
          </div>
        </div>
      ) : buttonName === "Currency" ? (
        <div>
          <CurrenctProperties currencyDialogVisible={true} />
          <div className="designBoxSub">
            <input
              type="text"
              value={buttonNames}
              onChange={(e) => setButtonsNames(e.target.value)}
              className="ReplicateInputBox"
            />
            <p className="ReplicateLable">{buttonName}</p>
            <p className="apple">...</p>
          </div>
        </div>
      ) : buttonName === "Pick List" ? (
        <div>
          <PickList pickListDialogVisible={true} />
          <div className="designBoxSub">
            <input
              type="text"
              value={buttonNames}
              onChange={(e) => setButtonsNames(e.target.value)}
              className="ReplicateInputBox"
            />
            <p className="ReplicateLable">{buttonName}</p>
            <p className="apple">...</p>
          </div>
        </div>
      ) : (
        <div className="designBoxSub">
          <input
            type="text"
            value={buttonNames}
            onChange={(e) => setButtonsNames(e.target.value)}
            className="ReplicateInputBox"
          />
          <p className="ReplicateLable">{buttonName}</p>
          <p className="apple">...</p>
        </div>
      )}
    </div>
  );
};

export default ReplicateButton;
