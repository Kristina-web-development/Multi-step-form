// import React from 'react'

// const Layout = () => {
//   return (
//     <nav>
//         <div>
//             <p>1</p>
//             <p>STEP 1</p>
//             <p>YOUR INFO</p>
//         </div>
//         <div>
//             <p>2</p>
//             <p>STEP 2</p>
//             <p>SELECT PLAN</p>
//         </div>
//         <div>
//             <p>3</p>
//             <p>STEP 3</p>
//             <p>ADD-ONS</p>
//         </div>
//         <div>
//             <p>4</p>
//             <p>STEP 4</p>
//             <p>SUMMARY</p>
//         </div>
//     </nav>
//   )
// }

// export default Layout



import React from 'react';
import './Layout.css'
interface ISteps {
  currentStep: number;
}

const Layout: React.FC<ISteps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'STEP 1', description: 'YOUR INFO' },
    { number: 2, label: 'STEP 2', description: 'SELECT PLAN' },
    { number: 3, label: 'STEP 3', description: 'ADD-ONS' },
    { number: 4, label: 'STEP 4', description: 'SUMMARY' },
  ];

  return (
    <nav>
      {steps.map((step) => (
        //  <div id='stepcontainer'>
        <div id='stepnumber'key={step.number} className={currentStep === step.number ? 'active' : ''}>
        
          <p className={currentStep === step.number ? 'active-step' : 'step'}>{step.number}</p>
          <div id='steptextcontainer'>
          <p id='steplabel'>{step.label}</p>
          <p id='stepdescription'>{step.description}</p>
          </div>
          </div>
      // </div>
      ))}
    </nav>
  );
};

export default Layout;
