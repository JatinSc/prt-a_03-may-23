import React, { useState, useContext } from "react";
import FormContext from "../FormContext/FormContext";
const Page4 = () => {
  const { formData, setFormData } = useContext(FormContext);
  return (
    <>
  <div className="summary">
    <ul>
    <li>{` First Name : ${formData?.fName}`}</li>
    <li>{`Last Name  : ${formData?.lName}`}</li>
    <li>{`Email  : ${formData?.email}`}</li>
    <li>{`Password : ${formData?.password}`}</li><br/>
    <li>{`D.O.B : ${formData?.dob}`}</li>
    <li>{`Gender  : ${formData?.gender}`}</li>
    <li>{`Number  : ${formData?.number}`}</li>
    <li>{`Address  : ${formData?.address}`}</li><br/>
    <li>{`Education  : ${formData?.education}`}</li>
    <li>{`Employment  : ${formData?.employment}`}</li>
    <li>{`Annual Income  :  ${formData?.income} LPA 💵`}</li>
    <li>{`Marital Status  : ${formData?.marital}`}</li>
    </ul>
  </div>
    </>
  )
}

export default Page4