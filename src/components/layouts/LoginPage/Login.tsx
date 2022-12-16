// import "./Login.css";
// import { RadioButton } from "primereact/radiobutton";
// import { useState, useEffect } from "react";
// // import LoginRight from "./LoginRight";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { Password } from "primereact/password";
// import { useNavigate } from "react-router-dom";
// import { Toast } from "primereact/toast";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const Login = () => {
//   const navigate = useNavigate();
//   const [city, setCity] = useState(null);
//   const [value3, setValue3] = useState("");
//   const [value4, setValue4] = useState("");

//   return (
//     <div>
//       <div className="split left">
//         <div className="centered">
//           <div style={{ padding: "100px" }} className="mt-8">
//             <div className="HeadingStyle">
//               Recruiteas
//               <br />
//             </div>
//             <span className="text-50 flex mt-1">
//               Lorem ipsum is a pseudo-Latin text used in web design
//             </span>

//             <p className="text-2xl text-50">Who is Using?</p>
//             <div className="flex gap ">
//               <div className="field-radiobutton radioButtonorder">
//                 <RadioButton
//                   inputId="Human Resources"
//                   name="city"
//                   value="Human Resources"
//                   onChange={(e) => setCity(e.value)}
//                   checked={city === "Human Resources"}
//                 />
//                 <label htmlFor="Human Resources" className="text-50">
//                   Human Resources
//                 </label>
//               </div>
//               <div className="field-radiobutton  radioButtonorder">
//                 <RadioButton
//                   inputId="Assistance"
//                   name="city"
//                   value="Assistance"
//                   onChange={(e) => setCity(e.value)}
//                   checked={city === "Assistance"}
//                 />
//                 <label htmlFor="Assistance" className="text-50">
//                   Assistance
//                 </label>
//               </div>

//               <div className="field-radiobutton  radioButtonorder">
//                 <RadioButton
//                   inputId="Management"
//                   name="city"
//                   value="Management"
//                   onChange={(e) => setCity(e.value)}
//                   checked={city === "Management"}
//                 />
//                 <label htmlFor="Management" className="text-50">
//                   Management
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="splittwo right">
//         <div className="centered">
//           <div className="loginRightHeading">
//             <span className="text-2xl font-bold">Hello Again</span>
//             <br />
//             <span className="flex mt-1">Welcome Back</span>
//             <div className="mt-4">
//               <span className="p-input-icon-left">
//                 <i className="pi pi-envelope" />
//                 <InputText
//                   value={value3}
//                   onChange={(e) => setValue3(e.target.value)}
//                   placeholder="Email Address"
//                   className="borderRadius"
//                 />
//               </span>
//               <span className="p-input-icon-left mt-4">
//                 <i className="pi pi-lock" />
//                 <InputText
//                   value={value4}
//                   onChange={(e) => setValue4(e.target.value)}
//                   type="password"
//                   placeholder="Password"
//                   className="borderRadius"
//                 />
//               </span>
//             </div>
//             <span>
//               <Button
//                 label="login"
//                 aria-label="Submit"
//                 style={{ width: "230px" }}
//                 className="mt-3 p-button-rounded"
//               />
//             </span>
//             <br />
//             <div
//               className="text-center mt-2 pointer"
//               style={{ width: "239px" }}
//               onClick={() => navigate("/")}
//             >
//               Sign up
//             </div>{" "}
//             <br />
//             <div className="text-center  pointer" style={{ width: "239px" }}>
//               Forget Password
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import "./Login.css";
import { RadioButton } from "primereact/radiobutton";
import { useState, useEffect } from "react";
// import LoginRight from "./LoginRight";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React, { useRef } from "react";

const signUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const toast = useRef<any>(null);
  const [city, setCity] = useState(null);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        let val = {
          email: values.email,
          password: values.password,
        };
        try {
          let res = await axios.post("http://localhost:8080/user/login", val);

          await toast.current.show({
            severity: "info",
            summary: "Sticky Message",
            detail: "Message Content",
            sticky: false,
          });
          localStorage.setItem("token", res.data.access_token);
          navigate("/dashboard");
        } catch (err) {
          await toast.current.show({
            severity: "info",
            summary: "Sticky Message",
            detail: err,
            sticky: false,
          });
        }

        action.resetForm();
      },
    });

  return (
<div>
<div>
      <Toast ref={toast} position="top-center" />
<div className="containerLogin">
  <div className="lefts">
  <div className="centered">
          <div style={{ padding: "100px" }} className="mt-8">
            <div className="HeadingStyle">
              Recruiteas
              <br />
            </div>
            <span className="text-50 flex mt-1">
              Lorem ipsum is a pseudo-Latin text used in web design
            </span>

            <p className="text-2xl text-50 flex">Who is Using?</p>
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
  <div className="rights">
  <div className="loginRightHeading">
            <span className="text-2xl font-bold flex">Hello Again</span>
            <br />
            <span className="flex mt-1">Welcome Back</span>
            <form onSubmit={handleSubmit} className="p-fluid">
              <div className="mt-4">
                <span className="p-input-icon-left">
                  <i className="pi pi-envelope" />
                  <InputText
                    placeholder="Email Address"
                    className="borderRadius"
                    name="email"
                    id="email"
                    type="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: "230px" }}
                  />
                </span>
                {errors.email && touched.email ? (
                  <span className="form-error">{errors.email}</span>
                ) : null}
                <span className="p-input-icon-left mt-4">
                  <i className="pi pi-lock" />
                  <InputText
                    type="password"
                    placeholder="Password"
                    className="borderRadius"
                    autoComplete="off"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: "230px" }}
                  />
                </span>
                {errors.password && touched.password ? (
                  <span className="form-error">{errors.password}</span>
                ) : null}
              </div>
              <span>
                <Button
                  label="login"
                  aria-label="Submit"
                  style={{ width: "230px" }}
                  onClick={() => navigate("/selection")}
                  className="mt-3 p-button-rounded"
                />
              </span>
            </form>
            <br />
            <div
              className="text-center mt-2 pointer"
              style={{ width: "239px" }}
              onClick={() => navigate("/")}
            >
              Sign up
            </div>{" "}
            <br />
            <div className="text-center  pointer" style={{ width: "239px" }}>
              Forget Password
            </div>
          </div>
  </div>
</div>

    
     
</div>

    {/* <div>
      <div className="split left">
        <div className="centered">
          
        </div>
      </div>

      <div className="splittwo right">
        <div className="centered">
         
        </div>
      </div>
    </div> */}
    
    </div>
  );
};

export default Login;
