import React, { useContext } from "react";
import { SignupContext } from "../context/SignupContext";

const Step2 = () => {
  const { signupData, nextStep, prevStep, updateUserDetails } =
    useContext(SignupContext);

  const handleChange = (e) => {
    updateUserDetails({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 2: Enter Email</h2>
      <input
        type="email"
        name="email"
        value={signupData.userDetails.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
