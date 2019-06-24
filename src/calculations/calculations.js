 //(ARV) – (Repair Costs) – (Closing and Holding Costs) – (Desired profit) = Offer Price
 export const houseFlippingCalc = ({
     afterRepairValue,
     repairCosts,
     closingAndHoldingCosts,
     desiredProfit,
 }) => {
    const total = afterRepairValue - repairCosts - closingAndHoldingCosts - desiredProfit;
    return total;
}


//Basically you are taking what the property should sell for when fixed up, subtracting what it will cost you to fix up, and then you are leaving 30% to cover closing and holding costs, as well as desired profit.
export const seventyPercentCalc = ({
    afterRepairValue,
    repairCosts
}) => {
    return afterRepairValue * .70 - repairCosts
}

export const rentalPropertyCalc = ({
    title,
    purchasePrice,
    afterRepairValue,
    estimatedRepairCosts,
    monthlyHoldingCosts,
    daysToCompleteRehab
}) => {
    return null;
}

export const brrrrCalc = ({
    title,
    purchasePrice,
    afterRepairValue,
    estimatedRepairCosts,
    refiLoanAmount,
    refiInterestRate,
    refiFees,
    interestRateOnly,
    refiLoanLength,
}) => {
    return null;
}
