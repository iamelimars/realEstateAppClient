import React from 'react';
import { houseFlippingCalc, seventyPercentCalc } from '../calculations/calculations';

function App() {
  const data = {
    purchasePrice: 20000,
    rehabCost: 10000,
    interestRate: 3.4,
    anticipatedLengthOfProject: 1,
    loanAmount: 10000,
    monthlyInterestPayment: 8,
    monthlyPropertyTaxes: 50,
    monthlyInsurance: 20,
    monthlyUtilityBills: 50,
    otherMonthlyExpenses: 0,
    costOfSale: 5000,
    afterRepairValue: 50000,
    values: 'test'
  }
  const info = {
    arv: 160000,
    repairCosts: 20000,
    closingAndHoldingCosts: 3600,
    desiredProfit: 30000,
  }
  const vals = houseFlippingCalc(info);
  const vals2 = seventyPercentCalc(info);
  return (
    <div className="App">
      <h1>{vals}</h1>
      <h1>{vals2}</h1>
    </div>
  );
}

export default App;
