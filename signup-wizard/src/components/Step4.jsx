// src/components/Step4.jsx
import React, { useContext } from "react";
import { SignupContext } from "../context/SignupContext";

const Step4 = () => {
  const { signupData, prevStep, updateUserDetails, nextStep } =
    useContext(SignupContext);

  const handleChange = (e) => {
    updateUserDetails({ [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Signup Data:", signupData.userDetails);
    nextStep();
  };

  return (
    <div>
      <h2>Step 4: Confirm Password</h2>
      <input
        type="password"
        name="confirmPassword"
        value={signupData.userDetails.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step4;
