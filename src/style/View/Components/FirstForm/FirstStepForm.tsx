import React, { FC } from "react";
import { IUserData } from "../MultiStepForm/MultiStepForm";
import "./FirstStepForm.css";

const FirstStepForm: FC<{ setUserData: Function; userData: IUserData }> = ({
  setUserData,
  userData,
}) => {
  const getDataUser = (ev: any) => {
    try {
      setUserData({ ...userData, [ev.target.name]: ev.target.value });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userData);

  return (
    <div>
      <h1 id='hFirstForm' >Personal info</h1>
      <p id='pFirstForm' >Please provide your name, email address, and phone number.</p>
      <form>
        <div id='container'>
          <label id="labelFirstForm" htmlFor="userName">
            Name
          </label>
          <input
            id="inputFirstForm"
            type="text"
            placeholder="e.g. Stephen King"
            name="userName"
            onChange={getDataUser}
          />
        </div>
        <div id='container'>
          <label id="labelFirstForm" htmlFor="userEmail">
            Email
          </label>
          <input
            id="inputFirstForm"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            name="userPhone"
            onChange={getDataUser}
          />
        </div>
        <div id='container'>
          <label id="labelFirstForm" htmlFor="userEmail">
            Phone Number
          </label>
          <input
            id="inputFirstForm"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            name="userEmail"
            onChange={getDataUser}
          />
        </div>
      </form>
    </div>
  );
};

export default FirstStepForm;
