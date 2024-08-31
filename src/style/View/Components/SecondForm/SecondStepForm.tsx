import React, { FC } from 'react'
import { IUserData } from '../MultiStepForm/MultiStepForm';

const SecondStepForm: FC<{ setUserData: Function; userData: IUserData }> = ({ setUserData, userData}) => {

  // 1. создать форму + инпуты по фигме (можно без CSS)
  // 2. Создать функцию которвя принемает ивент и обновляет стеит (через функцию setUserData)
  // 3. показать в console.log что есть изминения в обьекте. 
  
  return (
    <div>SecondStepForm</div>
  )
}

export default SecondStepForm