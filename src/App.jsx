import React, { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Result from "./Components/Result";

const INITIAL_INVESTMENT_DETAILS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentDetails, setInvestmentDetails] = useState(
    INITIAL_INVESTMENT_DETAILS
  );

  const isValidEntry = investmentDetails.duration > 0;

  function handleInvestmentDetails(userInvestmentDetails) {
    // Handle investment details submission
    setInvestmentDetails((prevDetails) => ({
      ...prevDetails,
      ...userInvestmentDetails,
    }));
  }

  return (
    <div>
      <Header />
      <UserInput
        investmentDetails={investmentDetails}
        setInvestmentDetails={(userInvestmentDetails) =>
          handleInvestmentDetails(userInvestmentDetails)
        }
      />
      {!isValidEntry && (
        <p className="center">Please enter a valid duration.</p>
      )}
      {isValidEntry && <Result investmentDetails={investmentDetails} />}
    </div>
  );
}

export default App;
