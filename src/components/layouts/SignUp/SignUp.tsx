import "./SignUp.css";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const [SignUser, setSignUser] = useState("");
  const [SignEmail, setSignEmail] = useState("");
  const [SignPasswoard, setSignPasswoard] = useState("");
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <div style={{ padding: "100px" }} className="mt-8">
            <div className="HeadingStyle">
              Recruiteas
              <br />
            </div>
            <span className="text-50 flex mt-1">
              Lorem ipsum is a pseudo-Latin text used in web design
            </span>

            <p className="text-2xl text-50">Who is Using?</p>
            <div className="flex gap ">
              <div className="field-radiobutton radioButtonorder">
                <RadioButton
                  inputId="Human Resources"
                  name="city"
                  value="Human Resources"
                  onChange={(e) => setCity(e.value)}
                  checked={city === "Human Resources"}
                />
                <label htmlFor="Human Resources" className="text-50">
                  Human Resources
                </label>
              </div>
              <div className="field-radiobutton  radioButtonorder">
                <RadioButton
                  inputId="Assistance"
                  name="city"
                  value="Assistance"
                  onChange={(e) => setCity(e.value)}
                  checked={city === "Assistance"}
                />
                <label htmlFor="Assistance" className="text-50">
                  Assistance
                </label>
              </div>

              <div className="field-radiobutton  radioButtonorder">
                <RadioButton
                  inputId="Management"
                  name="city"
                  value="Management"
                  onChange={(e) => setCity(e.value)}
                  checked={city === "Management"}
                />
                <label htmlFor="Management" className="text-50">
                  Management
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="splittwo right">
        <div className="centered">
          <div className="loginRightHeading">
            <span className="text-2xl font-bold flex  justify-content-left">
              Hello !
            </span>
            <br />
            <span className="flex mt-1 flex  justify-content-left">
              Sign Up to Get Started
            </span>
            <div className=" flex  justify-content-left align-items-start flex-column mt-4">
              <span className="p-input-icon-left">
                <i className="pi pi-user" />
                <InputText
                  value={SignUser}
                  onChange={(e) => setSignUser(e.target.value)}
                  placeholder="Full Name "
                  className="borderRadius"
                  style={{ width: "200px" }}
                />
              </span>
              <span className="p-input-icon-left mt-4">
                <i className="pi pi-envelope" />
                <InputText
                  value={SignEmail}
                  onChange={(e) => setSignEmail(e.target.value)}
                  placeholder="Email Address"
                  className="borderRadius"
                  style={{ width: "200px" }}
                />
              </span>
              <span className="p-input-icon-left mt-4">
                <i className="pi pi-lock" />
                <InputText
                  value={SignPasswoard}
                  onChange={(e) => setSignPasswoard(e.target.value)}
                  type="password"
                  placeholder="Password"
                  style={{ width: "200px" }}
                  className="borderRadius "
                />
              </span>
            </div>
            <span className="flex  justify-content-start">
              <Button
                label="Register"
                aria-label="Submit"
                style={{ width: "200px" }}
                className="mt-3 p-button-rounded"
                // onClick={ClicksignUp}
              />
            </span>
            <div
              className="text-center mt-2"
              style={{ width: "200px" }}
              onClick={() => navigate("/login")}
            >
              LOG IN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
