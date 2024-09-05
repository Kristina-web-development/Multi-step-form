import React, { FC, useState } from "react";
import { IUserData } from "../MultiStepForm/MultiStepForm";
import PlanCard from "./PlanCard/PlanCard";
import "./SecondStepForm.css";
import iconarcade from "../../../../assets/images/iconarcade.svg";
import iconadvanced from "../../../../assets/images/iconadvanced.svg";
import iconpro from "../../../../assets/images/iconpro.svg";

const plans = [
  {
    urlImage: iconarcade,
    tariff: "Arcade",
    priceMonth: "$9/mo",
    priceYear: "$90/yr",
  },
  {
    urlImage: iconadvanced,
    tariff: "Advanced",
    priceMonth: "$12/mo",
    priceYear: "$120/yr",
  },
  {
    urlImage: iconpro,
    tariff: "Pro",
    priceMonth: "$15/mo",
    priceYear: "$150/yr",
  },
];

const SecondStepForm: FC<{ setUserData: Function; userData: IUserData }> = ({
  setUserData,
  userData,
}) => {
  // 1. создать форму + инпуты по фигме (можно без CSS)
  // 2. Создать функцию которвя принемает ивент и обновляет стеит (через функцию setUserData)
  // 3. показать в console.log что есть изминения в обьекте.

  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [choosen, setChoosen] = useState({planName:"", planPrice:""})
  // const handleToggle = () => {
  //   setIsYearly((prev) => !prev);
  // };

  return (
    <div>
      <h1 id="hSecondForm">Select your plan</h1>
      <p id="pSecondForm">You have the option of monthly or yearly billing</p>
      <form id="secondForm">
        {plans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} isYearly={isYearly} setChoosen={setChoosen}/>
        ))}
      </form>
      {/* <div id="switchContainer">
        <label className="switch">
          <input 
            type="checkbox" 
            checked={isYearly} 
            onChange={handleToggle} 
          />
          <span className="slider"></span>
        </label>
        <span>{isYearly ? 'Yearly' : 'Monthly'}</span>
      </div> */}
    </div>
  );
};

export default SecondStepForm;
