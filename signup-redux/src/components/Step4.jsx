import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWizardStep } from "../slices/wizardSlice";
import { setCheckbox, setOption, setRadio } from "../slices/inputSlice";

const Step4 = () => {
  const dispatch = useDispatch();

  const selectedOption = useSelector((state) => state.inputs.selectedOption);
  const selectedRadio = useSelector((state) => state.inputs.selectedRadio);
  const checkboxes = useSelector((state) => state.inputs.checkboxes);

  const handleOptionsChange = (e) => {
    dispatch(setOption(e.target.value));
  };

  const handleRadioChange = (e) => {
    dispatch(setRadio(e.target.value));
  };

  const handleCheckboxChange = (e) => {
    dispatch(setCheckbox({ name: e.target.name, checked: e.target.checked }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Select a course:
        <select value={selectedOption} onChange={handleOptionsChange}>
          <option value="0">Select...</option>
          <option value="1">Front end developer</option>
          <option value="2">Back end developer</option>
          <option value="3">FullStack developer</option>
        </select>
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="begginer"
          checked={selectedRadio === "begginer"}
          onChange={handleRadioChange}
        />
        Begginer
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="intermediate"
          checked={selectedRadio === "intermediate"}
          onChange={handleRadioChange}
        />
        Intermediate
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="pro"
          checked={selectedRadio === "pro"}
          onChange={handleRadioChange}
        />
        Proffesional
      </label>
      <br />
      <p>Type of job</p>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={checkboxes.option1}
          onChange={handleCheckboxChange}
        />
        Full time
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option2"
          checked={checkboxes.option2}
          onChange={handleCheckboxChange}
        />
        Internship
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option3"
          checked={checkboxes.option3}
          onChange={handleCheckboxChange}
        />
        Part time
      </label>
      <br />

      <button onClick={() => dispatch(setWizardStep(3))}>Previous</button>
      <button onClick={() => dispatch(setWizardStep(5))}>Finish</button>
    </form>
  );
};

export default Step4;
