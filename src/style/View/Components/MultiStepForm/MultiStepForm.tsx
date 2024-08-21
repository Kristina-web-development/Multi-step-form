import React, { useState } from 'react';
import Layout from '../../Layout';
import FirstStepForm from '../FirstStepForm';
import SecondStepForm from '../SecondStepForm';
import ThirdStepForm from '../ThirdStepForm';
import FourthStepForm from '../FourthStepForm';
import './MultiStepForm.css'

// import Step2Form from './Step2Form';
// import Step3Form from './Step3Form';
// import Step4Form from './Step4Form';

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FirstStepForm />;
      case 2:
        return <SecondStepForm />;
      case 3:
        return <ThirdStepForm />;
      case 4:
        return <FourthStepForm />;
      default:
        return <FirstStepForm />;
    }
  };

  return (
    <div className="multi-step-form">
      <Layout currentStep={currentStep} />
      <div className="form-content">
        {renderStepContent()}
     
        <div className="button-container">
          {currentStep > 1 && (
            <button onClick={prevStep} className="back-button">
              Go Back
            </button>
          )}
          {currentStep < 4 && (
            <button onClick={nextStep} className="next-button">
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
