import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ investmentDetails }) {
  const results = calculateInvestmentResults(investmentDetails);
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(row.investmentValue)}</td>
            <td>{formatter.format(row.interestEarnedInYear)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
