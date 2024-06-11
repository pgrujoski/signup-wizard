import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleState } from "../slices/signSlice";
import { setWizardStep } from "../slices/wizardSlice";
import { set } from "mongoose";

const Step2 = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.signup.email);
  const password = useSelector((state) => state.signup.password);
  const confirm_password = useSelector(
    (state) => state.signup.confirm_password
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={email}
        onChange={(e) =>
          dispatch(handleState({ key: "email", value: e.target.value }))
        }
        placeholder="Email"
        type="email"
      />
      <br />
      <input
        value={password}
        onChange={(e) =>
          dispatch(handleState({ key: "password", value: e.target.value }))
        }
        placeholder="Password"
        type="password"
      />
      <br />
      <input
        value={confirm_password}
        onChange={(e) =>
          dispatch(
            handleState({ key: "confirm_password", value: e.target.value })
          )
        }
        placeholder="Confirm Password"
        type="password"
      />
      <br />

      <button onClick={() => dispatch(setWizardStep(1))}>Previous</button>
      <button onClick={() => dispatch(setWizardStep(3))}>Next</button>
    </form>
  );
};

export default Step2;
