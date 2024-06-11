import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleState } from "../slices/signSlice";
import { setWizardStep } from "../slices/wizardSlice";

const Step1 = () => {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.signup.firstName);
  const lastName = useSelector((state) => state.signup.lastName);
  const username = useSelector((state) => state.signup.username);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={firstName}
        placeholder="First Name"
        type="text"
        onChange={(e) =>
          dispatch(handleState({ key: "firstName", value: e.target.value }))
        }
      />
      <br />
      <input
        value={lastName}
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          dispatch(handleState({ key: "lastName", value: e.target.value }))
        }
      />
      <br />
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={(e) =>
          dispatch(handleState({ key: "username", value: e.target.value }))
        }
      />
      <br />
      <button onClick={() => dispatch(setWizardStep(2))}>Next</button>
    </form>
  );
};

export default Step1;
