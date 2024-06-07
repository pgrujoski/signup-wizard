import React, { createContext, useState } from "react";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    step: 1,
    userDetails: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const nextStep = () => {
    setSignupData((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const prevStep = () => {
    setSignupData((prev) => ({ ...prev, step: prev.step - 1 }));
  };

  const updateUserDetails = (details) => {
    setSignupData((prev) => ({
      ...prev,
      userDetails: { ...prev.userDetails, ...details },
    }));
  };

  return (
    <SignupContext.Provider
      value={{ signupData, nextStep, prevStep, updateUserDetails }}
    >
      {children}
    </SignupContext.Provider>
  );
};
