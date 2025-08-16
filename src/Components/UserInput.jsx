import React from "react";

export default function UserInput({ investmentDetails, setInvestmentDetails }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment:</label>
          <input
            type="number"
            id="initialInvestment"
            value={investmentDetails.initialInvestment}
            onChange={(e) =>
              setInvestmentDetails({
                ...investmentDetails,
                initialInvestment: parseFloat(e.target.value) || 0,
              })
            }
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment:</label>
          <input
            type="number"
            id="annualInvestment"
            value={investmentDetails.annualInvestment}
            onChange={(e) =>
              setInvestmentDetails({
                ...investmentDetails,
                annualInvestment: parseFloat(e.target.value) || 0,
              })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return:</label>
          <input
            type="number"
            id="expectedReturn"
            value={investmentDetails.expectedReturn}
            onChange={(e) =>
              setInvestmentDetails({
                ...investmentDetails,
                expectedReturn: parseFloat(e.target.value) || 0,
              })
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration (years):</label>
          <input
            type="number"
            id="duration"
            value={investmentDetails.duration}
            onChange={(e) =>
              setInvestmentDetails({
                ...investmentDetails,
                duration: parseFloat(e.target.value) || 0,
              })
            }
          />
        </p>
      </div>
    </section>
  );
}
