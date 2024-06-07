import React, { useContext } from "react";
import { SignupContext } from "../context/SignupContext";

const Step1 = () => {
  const { signupData, nextStep, updateUserDetails } = useContext(SignupContext);

  const handleChange = (e) => {
    updateUserDetails({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 1: Enter Name</h2>
      <input
        type="text"
        name="name"
        value={signupData.userDetails.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
