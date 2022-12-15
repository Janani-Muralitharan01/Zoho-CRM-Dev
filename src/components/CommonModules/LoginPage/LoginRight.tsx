import './Login.css';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
const LoginRight = () => {
    const [SignUser, setSignUser] = useState('');
    const [SignEmail, setSignEmail] = useState('');
    const [SignPasswoard, setSignPasswoard] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [signup, setSignUp] = useState(false);

  const ClicksignUp = () => {
    console.log('hello', signup);
    setSignUp(!signup);
  };
  return (
    <div>
      {signup ? (
        <div className="loginRightHeading">
        <span className="text-2xl font-bold">Hello !</span>
        <br />
          <span className="flex mt-1">Sign Up to Get Started</span>
          <div className="mt-4">
          <span className="p-input-icon-left">
              <i className="pi pi-user" />
              <InputText
                value={SignUser}
                onChange={(e) => setSignUser(e.target.value)}
                placeholder="Full Name "
                className="borderRadius"
              />
            </span>
            <span className="p-input-icon-left mt-4">
              <i className="pi pi-envelope" />
              <InputText
                value={SignEmail}
                onChange={(e) => setSignEmail(e.target.value)}
                placeholder="Email Address"
                className="borderRadius"
              />
            </span>
            <span className="p-input-icon-left mt-4">
              <i className="pi pi-lock" />
              <InputText
                value={SignPasswoard}
                onChange={(e) => setSignPasswoard(e.target.value)}
                type="password"
                placeholder="Password"
                className="borderRadius"
              />
            </span>
          </div>
          <span >
            <Button
              label="Register"
              aria-label="Submit"
              style={{ width: '239px' }}
              className="mt-3"
              onClick={ClicksignUp}
            />
          </span>
        </div>
      ) : (
        <div className="loginRightHeading">
          <span className="text-2xl font-bold">Hello Again</span>
          <br />
          <span className="flex mt-1">Welcome Back</span>
          <div className="mt-4">
            
            <span className="p-input-icon-left">
              <i className="pi pi-envelope" />
              <InputText
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                placeholder="Email Address"
                className="borderRadius"
              />
            </span>
            <span className="p-input-icon-left mt-4">
              <i className="pi pi-lock" />
              <InputText
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
                type="password"
                placeholder="Password"
                className="borderRadius"
              />
            </span>
          </div>
          <span>
            <Button
              label="login"
              aria-label="Submit"
              style={{ width: '239px' }}
              className="mt-3"
            />
          </span>
          <br />
          <span className="signUp" onClick={ClicksignUp}>
            Sign up
          </span>
          <span className="ml-7 m-1 mt-3 flex">Forget Password</span>
        </div>
      )}
    </div>
  );
};

export default LoginRight;
