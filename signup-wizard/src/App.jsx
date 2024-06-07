import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignupProvider } from "./context/SignupContext";
import SignupWizard from "./components/SignupWizard";

const App = () => {
  return (
    <Router>
      <SignupProvider>
        <Routes>
          <Route path="/" element={<SignupWizard />} />
        </Routes>
      </SignupProvider>
    </Router>
  );
};

export default App;
