import { useState, FC } from "react";
import Layout from "../../Layout";
import FirstStepForm from "../FirstForm/FirstStepForm";
import SecondStepForm from "../SecondForm/SecondStepForm";
import ThirdStepForm from "../ThirdForm/ThirdStepForm";
import FourthStepForm from "../FourthForm/FourthStepForm";
import "./MultiStepForm.css";

// import Step2Form from './Step2Form';
// import Step3Form from './Step3Form';
// import Step4Form from './Step4Form';

export interface IUserData {
  userName: string;
  userPhone: string;
  userEmail: string;
  plan: string;
  planPrice: string;
  adds: [
    {
      nameService: string;
      price: number;
    }
  ];
}
const RenderStepContent: FC<{
  currentStep: number;
  setUserData: Function;
  userData: IUserData;
}> = ({ userData, setUserData, currentStep }) => {
  switch (currentStep) {
    case 1:
      return <FirstStepForm userData={userData} setUserData={setUserData} />;
    case 2:
      return <SecondStepForm userData={userData} setUserData={setUserData} />;
    case 3:
      return <ThirdStepForm userData={userData} setUserData={setUserData} />;
    case 4:
      return <FourthStepForm userData={userData} setUserData={setUserData} />;
    default:
      return <FirstStepForm userData={userData} setUserData={setUserData} />;
  }
};

const MultiStepForm: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [userData, setUserData] = useState<IUserData>({
    userName: "",
    userPhone: "",
    userEmail: "",
    plan: "",
    planPrice: "",
    adds: [
      {
        nameService: "",
        price: 0,
      },
    ],
  });

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // yearly ? 90$ : 9$
  // yearly && two month sale
  return (
    <div className="multi-step-form">
      <Layout currentStep={currentStep} />
      <div className="form-content">
        <RenderStepContent
          userData={userData}
          setUserData={setUserData}
          currentStep={currentStep}
        />
        <div className="button-container">
          {currentStep > 1 && (
            <button id='buttonBack' onClick={prevStep} className="back-button">
              Go Back
            </button>
          )}
          {currentStep < 4 && (
            <button id='buttonNext' onClick={nextStep} className="next-button">
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
