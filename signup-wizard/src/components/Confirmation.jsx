import React, { useContext } from "react";
import { SignupContext } from "../context/SignupContext";

const Confirmation = () => {
  const { signupData } = useContext(SignupContext);
  const { userDetails } = signupData;

  return (
    <div>
      <h2>Congratulations, you have signed up!</h2>
      <p>
        <strong>Name:</strong> {userDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {userDetails.email}
      </p>
      <p>
        <strong>Password:</strong> {userDetails.password}
      </p>
      <p>
        <strong>Confirm Password:</strong> {userDetails.confirmPassword}
      </p>
    </div>
  );
};

export default Confirmation;
