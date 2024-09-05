import React, { FC } from "react";
import { IUserData } from "../MultiStepForm/MultiStepForm";
import "./ThirdStepForm.css";

const ThirdStepForm: FC<{ setUserData: Function; userData: IUserData }> = ({
  setUserData,
  userData,
}) => {
  return (
    <div>
      {" "}
      <h1 id="hThirdForm">Pick add-ons</h1>
      <p id="pThirdForm">Add-ons help enhance your gaming experience.</p>
    </div>
  );
};

export default ThirdStepForm;
