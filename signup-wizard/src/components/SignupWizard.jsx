import React, { useContext } from "react";
import { SignupContext } from "../context/SignupContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Confirmation from "./Confirmation";

const SignupWizard = () => {
  const { signupData } = useContext(SignupContext);

  switch (signupData.step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Confirmation />;
    default:
      return <Step1 />;
  }
};

export default SignupWizard;
