import React from "react";
import { useSelector } from "react-redux";

const Finish = () => {
  const firstName = useSelector((state) => state.signup.firstName);
  const lastName = useSelector((state) => state.sigunup.lastname);
  const username = useSelector((state) => state.signup.username);
  const email = useSelector((state) => state.signup.email);
  const selectedOption = useSelector((state) => state.inputs.selectedOption);
  const selectedRadio = useSelector((state) => state.inputs.selectedRadio);
  const checkboxes = useSelector((state) => state.inputs.checkboxes);

  const getSelectedOptionName = () => {
    switch (selectedOption) {
      case "1":
        return "Front end developer";
      case "2":
        return "Back end developer";
      case "3":
        return "FullStack developer";
      default:
        return "Unknown";
    }
  };

  return (
    <div>
      <h1>Congratulations, you applied successfully!</h1>
      <div>
        <h2>Personal information</h2>
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
      </div>
      <div>
        <h2>Email Confirmation</h2>
        <p>
          Please check your email: <strong>{email}</strong> for confirmation.
        </p>
      </div>
      <div>
        <h2>Application Details</h2>
        <p>
          <strong>Selected Course:</strong> {getSelectedOptionName()}
        </p>
        <p>
          <strong>Experience Level:</strong> {selectedRadio}
        </p>
        <p>
          <strong>Job Type:</strong>
        </p>
        <ul>
          {checkboxes.option1 && <li>Full time</li>}
          {checkboxes.option2 && <li>Internship</li>}
          {checkboxes.option3 && <li>Part time</li>}
        </ul>
      </div>
    </div>
  );
};

export default Finish;
