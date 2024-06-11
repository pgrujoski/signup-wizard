import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLocation } from "../slices/addressSlice";
import { setWizardStep } from "../slices/wizardSlice";

const Step3 = () => {
  const dispatch = useDispatch();

  const street = useSelector((state) => state.location.address);
  const number = useSelector((state) => state.location.city);
  const postal_code = useSelector((state) => state.location.postal_code);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={address}
        onChange={(e) =>
          dispatch(handleLocation({ key: "address", value: e.target.value }))
        }
        placeholder="Street and Number"
        type="text"
      />
      <br />
      <input
        value={city}
        onChange={(e) =>
          dispatch(handleLocation({ key: "city", value: e.target.value }))
        }
        placeholder="City"
        type="text"
      />
      <br />
      <input
        value={postal_code}
        onChange={(e) =>
          dispatch(
            handleLocation({ key: "postal_code", value: e.target.value })
          )
        }
        placeholder="Postal Code"
        type="text"
      />
      <br />
      <button onClick={(e) => dispatch(setWizardStep(2))}>Previous</button>
      <button onClick={(e) => dispatch(setWizardStep(4))}>Next</button>
    </form>
  );
};

export default Step3;
