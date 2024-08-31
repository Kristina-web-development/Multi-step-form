import React, { FC } from 'react'
import { IUserData } from '../MultiStepForm/MultiStepForm';

const ThirdStepForm: FC<{ setUserData: Function; userData: IUserData }>= ({ setUserData, userData}) => {
  return (
    <div>ThirdStepForm</div>
  )
}

export default ThirdStepForm