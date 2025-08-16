import React from "react";
import InvestmentLogo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <div id="header">
      <img src={InvestmentLogo} alt="Investment Calculator Logo" />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
