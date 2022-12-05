import "./ReplicateButton.css";
import React, { useState, useEffect } from "react";
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
    console.log("buttonName", buttonName);
  }, [buttonName]);

  return (
    <div className="designBox">
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
  );
};

export default ReplicateButton;
