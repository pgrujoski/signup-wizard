import React, { useContext } from "react";
import { SignupContext } from "../context/SignupContext";

const Step3 = () => {
  const { signupData, nextStep, prevStep, updateUserDetails } =
    useContext(SignupContext);

  const handleChange = (e) => {
    updateUserDetails({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 3: Enter Password</h2>
      <input
        type="password"
        name="password"
        value={signupData.userDetails.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step3;
